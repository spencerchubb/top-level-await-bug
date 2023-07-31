import { resolve } from 'path'
import { defineConfig } from 'vite'
import topLevelAwait from "vite-plugin-top-level-await";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    topLevelAwait(),
  ],
  build: {
    rollupOptions: {
      input: {
        page1: resolve(__dirname, 'page1.html'),
        page2: resolve(__dirname, 'page2.html'),
      },
    },
  },
})
