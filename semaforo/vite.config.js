import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./", // Fuerza rutas relativas para que Electron pueda encontrar los recursos
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    open: true,
    proxy: {
      // Add any necessary proxy configuration here
    },
  },
});
