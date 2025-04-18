import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  base: "/Portfolio/",
  plugins: [
    react(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: "dist/index.html",
          dest: "", // copy to dist/ as 404.html
          rename: "404.html",
        },
      ],
    }),
  ],
});
