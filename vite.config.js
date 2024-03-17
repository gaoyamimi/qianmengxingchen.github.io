import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        VueSetupExtend(),
    ],
    base: '/', // 重要：更新为你的 GitHub 仓库名
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src',
                import.meta.url))
        }
    },
    server: {
        host: '127.0.0.1',
        // 确保端口号与你的项目实际使用的端口号一致，这里假设是5173
        port: 5173,
    },
})