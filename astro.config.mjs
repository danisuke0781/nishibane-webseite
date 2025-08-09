    // astro.config.mjs
    import { defineConfig } from "astro/config";
    import mdx from "@astrojs/mdx";
    import sitemap from "@astrojs/sitemap";
    import cloudflare from "@astrojs/cloudflare";
    import tailwindcss from "@tailwindcss/vite";

    // https://astro.build/config
    export default defineConfig({
      site: "https://www.nishib.org",
      integrations: [mdx(), sitemap()],
      adapter: cloudflare({
        platformProxy: {
          enabled: true,
        },
      }),
      vite: {
        plugins: [tailwindcss()],
        // envPrefix and envDir are already the defaults in Astro/Vite.
        // We can keep them or remove them as they do not change the behavior.
        envPrefix: "VITE_",
        envDir: ".",
      },
    });