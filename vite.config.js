// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Tambahkan konfigurasi server ini
  server: {
    host: true, // Ini akan membuat Vite mendengarkan di semua alamat IP yang tersedia
    port: 5174, // Opsional: Anda bisa menentukan port di sini, jika tidak, Vite akan mencari port yang tersedia
  },
});
