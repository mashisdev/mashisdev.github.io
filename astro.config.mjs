// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

import partytown from "@astrojs/partytown";

const LIVE_URL = "https://mashisdev.github.io";

// https://astro.build/config
export default defineConfig({
  site: LIVE_URL,
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
        resolveUrl: (url, location, type) => {
          if (url.hostname === "www.googletagmanager.com") {
            return new URL(
              url.pathname + url.search,
              "https://www.googletagmanager.com"
            );
          }
          return url;
        },
      },
    }),
  ],
});
