import { Config } from "../../../crawler/src/config";
import { crawl, write } from "../../../crawler/src/core";
import { readFile } from "fs/promises";
const defaultConfig: Config = {
    url: "https://www.google.com/search?q=How+much+caffeine+is+in+matcha+tea%3F&rlz=1C1ONGR_itIT1034IT1034&oq=How+much+caffeine+is+in+matcha+tea%3F&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQABgTGIAEMgkIAhAAGBMYgAQyCggDEAAYExgWGB4yCggEEAAYExgWGB4yCggFEAAYExgWGB4yBggGEEUYPDIGCAcQRRg80gEHNjAyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8",
    match: "",
    selector:"#rso",
    maxPagesToCrawl: 7,
    outputFileName: "output.json",
  };

export async function GET(request: Request) {
  const input = new URL(request.url).searchParams.get("input");

  if (input === null) {
    return Response.json({ message: "Do a question!" }, { status: 500 });
  }
await crawl(defaultConfig)
await write(defaultConfig);
const data = await readFile(defaultConfig.outputFileName)
  return new Response(data);
}
