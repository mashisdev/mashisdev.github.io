// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

const LIVE_URL = "https://mashisdev.github.io";

// https://astro.build/config
export default defineConfig({
  site: LIVE_URL,
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), sitemap()],
});