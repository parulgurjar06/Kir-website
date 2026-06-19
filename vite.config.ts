import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'c8f0-106-222-216-129.ngrok-free.app',
      '.ngrok-free.app'
    ]
  }
})
