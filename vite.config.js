import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  return {
    // Only use the subfolder path during 'build' (production)
    base: command === 'build' ? '/noahCareerCoaching-react/' : '/',
    plugins: [react()],
  }
})
