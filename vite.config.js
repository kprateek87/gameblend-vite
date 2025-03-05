import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import compression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), compression(), react()],
  build: { chunkSizeWarningLimit: 6000 },
  base: "/",
});
