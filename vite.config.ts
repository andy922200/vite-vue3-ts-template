import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'
import { resolve, dirname, join } from 'path'
import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    VueI18nVitePlugin({
      include: [resolve(dirname(fileURLToPath(import.meta.url)), './plugins/lang/*.ts')],
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: join(__dirname, './src'),
      },
    ],
  },
  server: {
    open: true,
  },
  build: {
    rollupOptions: {
      external: [resolve(__dirname, './src/**/*.**.test.ts')],
    },
  },
})
