import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site: https://kajeken-1905.github.io/euroupetour-project/
export default defineConfig({
  base: '/euroupetour-project/',
  plugins: [react()],
})
