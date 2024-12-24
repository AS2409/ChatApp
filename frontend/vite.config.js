import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      css: {
        additionalData: '@import "./src/index.css";', // Adjust to your file structure
      },
    },
  },
  server:{
    port: 4001,
    proxy: {
        '/api' :{
          target: 'http://localhost:5002',
          changeOrigin: true,
        }
    }
  }
});
