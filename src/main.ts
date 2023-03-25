import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import router from "./router";
import { createPinia } from "pinia";
import "animate.css"
//导入组件库
import * as antIcons from "@ant-design/icons-vue";

const app = createApp(App);

//动态使用antd图标，方式一
//使用：<component :is="$antIcons[pane.icon]" />
// 注册组件
Object.keys(antIcons).forEach((key) => {
  app.component(key, antIcons[key]);
});
// 添加到全局
app.config.globalProperties.$antIcons = antIcons;

app.use(createPinia())
app.use(router).use(Antd).mount("#app");
