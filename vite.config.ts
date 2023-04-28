import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { createHtmlPlugin } from "vite-plugin-html";

//这个配置 为了在html中使用 环境变量
const getViteEnv = (mode:string, target:string) => {
  return loadEnv(mode, process.cwd())[target];
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),
      createHtmlPlugin({
        inject: {
          data: {
            //将环境变量 VITE_APP_TITLE 赋值给 title 方便 html页面使用 title 获取系统标题
            title: getViteEnv(mode, "VITE_DOC_TITLE"),
          },
        },
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    server: {
      open:true,
      proxy: {
        "/ws": {
          target: "ws://121.40.165.18:8800", //这里是后台ws访问地址
          changeOrigin: true, //允许跨域设置
          ws: true, //websocket代理设置
          rewrite: (path) => path.replace(/^\/ws/, ""),
        },
        "/queryip": {
          //target: "http://pv.sohu.com/cityjson?ie=utf-8", 
          target:"http://whois.pconline.com.cn/ipJson.jsp?callback=testJson",
          changeOrigin: true, //允许跨域设置
          rewrite: (path) => path.replace(/^\/queryip/, ""),
        },
      },
    },
  };
});
