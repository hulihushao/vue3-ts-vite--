<script setup lang="ts">
import { ref } from "vue";
import useLoading from "@/store/loading";
import { useSetTheme, useSetLanguage } from "@/composables/useSetTheme";
import useTheme from "@/store/theme";
//国际化
import enUS from "ant-design-vue/es/locale/en_US";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
dayjs.locale(zhCN.locale);

const loading = useLoading();
const theme = useTheme();
document.body.style.background = theme.isDark ? "#000" : "#fff";
//设置全局主题色
useSetTheme(theme.color);
useSetLanguage(theme.isZHCN);
</script>

<template>
  <a-config-provider
    :locale="theme.isZHCN ? zhCN : enUS"
    :prefix-cls="theme.isDark ? 'custom-dark' : 'ant'"
  >
    <Loading :spinning="loading.loading">
      <router-view class="app" />
    </Loading>
  </a-config-provider>
  <div>
    <svg
      class="hans-container"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="hans-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g class="hans-parallax">
        <use
          xlink:href="#hans-wave"
          x="50"
          y="0"
          :fill="theme.isDark ? 'rgba(8,8,8,.5)' : 'rgba(224,233,239,.5)'"
        />
        <use
          xlink:href="#hans-wave"
          x="50"
          y="3"
          :fill="theme.isDark ? 'rgba(8,8,8,.5)' : 'rgba(224,233,239,.5)'"
        />
        <use
          xlink:href="#hans-wave"
          x="50"
          y="6"
          :fill="theme.isDark ? 'rgba(8,8,8,.5)' : 'rgba(224,233,239,.5)'"
        />
      </g>
    </svg>
  </div>
</template>

<style scoped lang="less">
.app {
}
</style>
<style>
h1,
h2,
h3,
h4,
h5,
h6 {
  color: v-bind("theme.setColor") !important;
}
.demo-con h1 {
  text-align: center;
}
/**顶部进度条样式 */
#nprogress .bar {
  background: var(--ant-primary-color) !important;
}
#nprogress .peg {
  box-shadow: 0 0 10px var(--ant-primary-color),
    0 0 5px var(--ant-primary-color) !important;
}
#nprogress .spinner .spinner-icon {
  border-left-color: var(--ant-primary-color) !important;
  border-top-color: var(--ant-primary-color) !important;
}

/*滚动条的宽度*/
.ant-layout-content::-webkit-scrollbar,
::-webkit-scrollbar {
  width: 4px;
}

/*滚动条里面小方块*/
.ant-layout-content::-webkit-scrollbar-thumb,
::-webkit-scrollbar-thumb {
  border-radius: 2px;
  box-shadow: inset 0 0 5px var(--ant-primary-color);
  background: var(--ant-primary-color);
}

/*滚动条里面轨道*/
.ant-layout-content::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
</style>
