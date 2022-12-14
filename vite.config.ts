import { defineConfig } from "vite";
import Preact from "@preact/preset-vite";
import Dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.tsx",
      name: "Friendlinks",
      fileName: "index",
    },
  },
  plugins: [
    Preact(),
    Dts(),
  ],
});
