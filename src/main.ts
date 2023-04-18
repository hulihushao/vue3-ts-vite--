import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Antd from "ant-design-vue";
//import "ant-design-vue/dist/antd.css";
//全局化主题配置样式
import "ant-design-vue/dist/antd.variable.min.css";
import "./dark.css"

import router from "./router";
import store from "@/store";
import "animate.css";
import Icon from "@/components/common/Icon.vue";
import Loading from "@/components/common/Loading.vue";
//导入组件库
import * as antIcons from "@ant-design/icons-vue";

const app = createApp(App);
//注册全局图标组件
app.component("Icon", Icon);
//注册全局加载组件
app.component("Loading", Loading);
//动态使用antd图标，方式一
//使用：<component :is="$antIcons[pane.icon]" />
// 注册组件
Object.keys(antIcons).forEach((key) => {
  app.component(key, antIcons[key]);
});
// 添加到全局
app.config.globalProperties.$antIcons = antIcons;

app.use(store)
app.use(router).use(Antd).mount("#app");
