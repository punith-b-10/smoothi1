import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Relative base so the built site works whether it's hosted at
// https://<user>.github.io/ or https://<user>.github.io/<repo>/ —
// no need to hardcode a repo name. Combined with HashRouter, direct
// navigation to /menu, /products, /contact, /admin never breaks on
// GitHub Pages' static hosting.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    target: 'es2019',
    sourcemap: false,
  },
})
