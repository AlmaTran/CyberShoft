import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: { port: 8989 },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'), // hoặc '@': path.resolve(__dirname,'src')
    },
    extensions: ['.mjs','.js','.ts','.jsx','.tsx','.json','.css'],
  },
})
