import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://glecetre.github.io",
  base: "cosmos-aria",
  integrations: [tailwind()],
});
