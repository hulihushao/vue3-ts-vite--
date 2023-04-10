import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { createHtmlPlugin } from "vite-plugin-html";

//这个配置 为了在html中使用 环境变量
const getViteEnv = (mode, target) => {
  return loadEnv(mode, process.cwd())[target];
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createHtmlPlugin({
      inject: {
        data: {
          //将环境变量 VITE_APP_TITLE 赋值给 title 方便 html页面使用 title 获取系统标题
          title: getViteEnv("development", "VITE_DOC_TITLE"),
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
