import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Binds to all network interfaces
    port: 5173, // Ensure this matches the port you intend to use
  },
})



// vite.config.js
// import { defineConfig } from 'vite';

// export default defineConfig({
//   server: {
//     host: true, // Binds to all network interfaces
//     port: 5173, // Ensure this matches the port you intend to use
//   },
// });
