import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => ({
  plugins: [
    react({
      include: ["**/*.tsx", "**/*.jsx"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  optimizeDeps: {
    exclude: ["@butter-technologies/dish"],
  },
  server: {
    host: "0.0.0.0",
    port: 8090,
  },
}));
