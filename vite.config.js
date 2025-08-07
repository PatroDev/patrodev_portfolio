// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true,
    port: 5174,
    strictPort: true,
  },
  build: {
    rollupOptions: {
      input: '/src/main.jsx', // pas main.tsx
    },
  },
});
