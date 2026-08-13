import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/SerranoDaniloReact/', // <-- El nombre exacto de tu repositorio entre barras
})