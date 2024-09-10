import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import { dirname, join, resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    VueI18nVitePlugin({
      runtimeOnly: false,
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
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['./src/tests/vitest/**/*.(spec|test).ts'],
    coverage: {
      all: false,
      enabled: true,
      reporter: ['text', 'json', 'html'],
    },
  },
})
