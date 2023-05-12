import { resolve } from 'node:path';
import { defineConfig } from "vite";

export default defineConfig(({ command, mode, ssrBuild }) => {
  return {
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          nested: resolve(__dirname, 'nested/index.html')
        },
        output: {
          // inlineDynamicImports: true
        }
      },
      // 库模式
      // lib: {
      //   entry: resolve(__dirname, 'lib/main.js'),
      //   name: 'MyLib',
      //   fileName: 'my-lib'
      // }
    }
  }
})
