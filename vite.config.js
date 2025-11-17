import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/travel-frontend/',   // 👈 add this line (repo name)
})
