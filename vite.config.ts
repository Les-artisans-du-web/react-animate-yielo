import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@animations": path.resolve(__dirname, "./src/animations"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "react-animate-yielo",
    },
    rollupOptions: {
      external: ["react"],
    },
  },
});
