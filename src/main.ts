import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import router from "./router";
import { createPinia } from "pinia";
//导入组件库
import * as antIcons from "@ant-design/icons-vue";

const app = createApp(App);

// 注册组件

Object.keys(antIcons).forEach((key) => {
  app.component(key, antIcons[key]);
});
// 添加到全局
app.config.globalProperties.$antIcons = antIcons;

app.use(router).use(Antd).use(createPinia()).mount("#app");
