import { resolve } from 'node:path';
import { defineConfig } from "vite";

export default defineConfig(({ command, mode, ssrBuild }) => {
  return {
    base: '/test-vite-build', // 开发或生产环境服务的公共基础路径; 类型： string; 默认：'/';
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
