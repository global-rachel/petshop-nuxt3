import {resolve} from 'node:path';
import vue from '@vitejs/plugin-vue';
// @ts-ignore
import vuetify from "@vuetify/vite-plugin";

export default {
    plugins: [vue()],
    test: {
        globals: true,
        environment: 'jsdom',
        deps: {
            inline: ["vuetify"],
        },
        setupFiles: "vuetify.config.ts",
    },
    alias: {
        //     '@': resolve(__dirname, './'),
        '~': resolve(__dirname, './'),
        // '#imports': resolve(__dirname, './.nuxt/imports.d.ts')
    }
};