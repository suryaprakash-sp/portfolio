import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    return {
      base: '/portfolio/', // GitHub Pages base path (lowercase)
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      // API keys should NOT be exposed in client-side code for static deployments
      // The AI Assistant feature requires a backend proxy for secure API key handling
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
