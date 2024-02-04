import { defineConfig } from "vite";
import { fileURLToPath } from "url";

import vue from "@vitejs/plugin-vue";
import devtools from "vite-plugin-vue-devtools";

export default defineConfig({
    plugins: [
        vue(),
        devtools()
    ],
    server:{
        port: 5197
    },
    resolve:{
        alias:{
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
            '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
            '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
            '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
            '@layout': fileURLToPath(new URL('./src/layouts', import.meta.url))
        }
    }
})