/* eslint-disable import/no-unresolved */
import { resolve } from "node:path";

import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite({ autoCodeSplitting: true }), viteReact()],
  test: {
    globals: true,
    environment: "jsdom",
  },
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      "#": resolve(__dirname, "./src"),
    },
  },
});
