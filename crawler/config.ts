import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.google.com/search?q=How+much+caffeine+is+in+matcha+tea%3F&rlz=1C1ONGR_itIT1034IT1034&oq=How+much+caffeine+is+in+matcha+tea%3F&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQABgTGIAEMgkIAhAAGBMYgAQyCggDEAAYExgWGB4yCggEEAAYExgWGB4yCggFEAAYExgWGB4yBggGEEUYPDIGCAcQRRg80gEHNjAyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8",
  match: "",
  selector:"#rso",
  maxPagesToCrawl: 7,
  outputFileName: "output.json",
};
