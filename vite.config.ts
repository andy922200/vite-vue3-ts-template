import {
    defineConfig 
} from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        legacy({
            targets: ['defaults', 'not IE 11']
        })
    ],
    resolve: {
        alias:
        [
            {
                find: 'vue-i18n',
                replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
            },
            {
                find: '@',
                replacement: path.join(__dirname, './src')
            }
        ]
    },
    build: {
        rollupOptions: {
            external: [
                path.resolve(__dirname, './src/**/*.**.test.ts')
            ]
        }
    }
})
