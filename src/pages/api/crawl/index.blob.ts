import { readFile } from "fs/promises";
import { crawl, write } from "@builder.io/gpt-crawler/src/core";
import type { Config } from "@builder.io/gpt-crawler/src/config";
export const prerender = true


export async function GET(request: Request) {
  const input = new URL(request.url).searchParams.get("input");

  if (input === null) {
    return new Response("Do a question!", { status: 500 });
  }
  const defaultConfig: Config = {
    url: "https://www.google.com/search?"+ new URLSearchParams({q:input}),
    match: "",
    selector: "#rso",
    maxPagesToCrawl: 7,
    outputFileName: "output.json",
  };
  await crawl(defaultConfig);
  await write(defaultConfig);
  const data = await readFile("output-1.json");
 
  
  return new Response(new Blob([data],{type:"text/json"}));
}
