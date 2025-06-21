import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0',
    cors: true,
    allowedHosts: [
      '88cf-49-36-243-115.ngrok-free.app', // ✅ Add your current ngrok domain here
      '.ngrok-free.app'
    ]
  }
});
