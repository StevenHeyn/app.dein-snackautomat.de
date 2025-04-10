import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/app.dein-snackautomat.de/',
  plugins: [react()],
});
