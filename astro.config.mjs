// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://smikulic.com/",
  // base: '/<repo-name>/', // remove if user/organization page or custom domain root
  integrations: [react(), sitemap(), mdx()],
  build: { format: "directory" },
  vite: {
    optimizeDeps: {
      include: [
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/react-fontawesome",
        "@fortawesome/free-regular-svg-icons",
        "@fortawesome/free-brands-svg-icons",
      ],
    },
    ssr: {
      noExternal: [
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/react-fontawesome",
        "@fortawesome/free-regular-svg-icons",
        "@fortawesome/free-brands-svg-icons",
      ],
    },
  },
});
