import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: "0.0.0.0", // Allow access from other devices
  //   port: 5173, // Default port for Vite
  //   open: true, // Optional: Automatically open in the default browser
  // },
  build: {
    target: 'esnext',  // Utilitzar ES2022 o superior per suportar top-level await
  },
});
