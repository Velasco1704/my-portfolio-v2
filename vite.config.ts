import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path';

export default defineConfig({
  resolve:{
    alias: {
      "@components": path.resolve(__dirname, './src/components'),
      "@containers": path.resolve(__dirname, './src/containers'),
      "@interfaces": path.resolve(__dirname, './src/interfaces'),
      "@styles": path.resolve(__dirname, './src/styles'),
      "@assets": path.resolve(__dirname, './src/assets'),
    }
  },
  plugins: [react()],
})
