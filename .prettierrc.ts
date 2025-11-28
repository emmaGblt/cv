// prettier.config.ts, .prettierrc.ts, prettier.config.mts, or .prettierrc.mts

import { type Config } from "prettier";

const config: Config = {
  trailingComma: "none",
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindFunctions: ["cn"]
};

export default config;
