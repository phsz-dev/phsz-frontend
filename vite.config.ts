import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { templateCompilerOptions } from '@tresjs/core'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      ...templateCompilerOptions
    })
  ],
  server: {
    port: 5173,
    open: true,
    proxy: {
      '/api': {
        target: 'http://172.30.49.127:10010',
        ws: true,
        changeOrigin: true
      },
      '/oss': {
        target: 'http://172.30.49.127:10010',
        ws: true,
        changeOrigin: true
      }
    }
  },
  assetsInclude: ['**/*.fbx']
})
