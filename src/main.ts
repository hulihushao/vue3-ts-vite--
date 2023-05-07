import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Antd from "ant-design-vue";
//import "ant-design-vue/dist/antd.css";
//全局化主题配置样式
import "ant-design-vue/dist/antd.variable.min.css";
import "./dark.css";

import router from "./router";
import store from "@/store";
import "animate.css";

//自定义拖拽
import { drag } from "@/directives/drag";

import Icon from "@/components/common/Icon.vue";
import Loading from "@/components/common/Loading.vue";
//导入组件库
import * as antIcons from "@ant-design/icons-vue";

//国际化配置
import i18n from "./language/index";
//markdown预览
import "@kangc/v-md-editor/lib/theme/style/vuepress.css";
import VMdPreview from "@kangc/v-md-editor/lib/preview";
import "@kangc/v-md-editor/lib/style/preview.css";
import githubTheme from "@kangc/v-md-editor/lib/theme/github.js";
import "@kangc/v-md-editor/lib/theme/style/github.css";

// highlightjs
import hljs from "highlight.js";

VMdPreview.use(githubTheme, {
  Hljs: hljs,
});

const app = createApp(App);
//注册拖拽指令
app.directive("drag", drag);
//注册全局图标组件
app.component("Icon", Icon);
//注册全局加载组件
app.component("Loading", Loading);
//动态使用antd图标，方式一
//使用：<component :is="$antIcons[pane.icon]" />
// 注册组件
Object.keys(antIcons).forEach((key) => {
  app.component(key, antIcons[key as keyof typeof antIcons]);
});
// 添加到全局
app.config.globalProperties.$antIcons = antIcons;

app.use(store).use(i18n).use(VMdPreview);
app.use(router).use(Antd).mount("#app");
