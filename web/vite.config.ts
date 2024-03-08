import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
// import * as path from 'path';
import devopsConfig from '../src/config/devops.config';
// const isDev = process.env.NODE_ENV !== 'production';
const urlPrefix = `${devopsConfig.prefixUrl}`;
// https://vitejs.dev/config/
const config = defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    assetsDir: 'public',
    outDir: 'dist',
  },
  base: urlPrefix,
  server: {
    host: '0.0.0.0',
    port: +`${process.env.VITE_PORT}` || 5173,
    cors: true,
  },
});
export default config;
