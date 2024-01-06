import { defineConfig } from "astro/config";
import wasm from "vite-plugin-wasm";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "hybrid",
  vite: {
    plugins: [wasm()],
    worker: {
      // Not needed with vite-plugin-top-level-await >= 1.3.0
      // format: "es",
      plugins: [
        wasm(),
       
      ]
    }
  },
});
