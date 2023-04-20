import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  module: {
    rules: [
      {
        use: /\.s(a|c)ss$/,
        loaders: ['style', 'css', 'sass'],
      },
    ],
  },
})
