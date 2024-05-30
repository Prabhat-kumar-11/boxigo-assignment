import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Define Vite configuration
export default defineConfig({
  plugins: [react()],
  server: {
    middleware: [cors()],
  },
  define: {
    "process.env.VITE_KEY_API_URL": JSON.stringify(process.env.VITE_KEY_API_URL),
  },
});
