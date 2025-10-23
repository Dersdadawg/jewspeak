import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/1984hasbara/', // Change this to your repo name for GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
