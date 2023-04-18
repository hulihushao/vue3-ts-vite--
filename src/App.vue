<script setup lang="ts">
import useLoading from "@/store/loading";
import { useSetTheme } from "@/composables/useSetTheme";
import useTheme from "@/store/theme";
//国际化
import enUS from 'ant-design-vue/es/locale/en_US';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale(zhCN.locale);

const loading = useLoading();
const theme = useTheme();
//设置全局主题色
useSetTheme(theme.color);
</script>

<template>
  <a-config-provider :locale="zhCN" :prefix-cls="theme.isDark?'custom-dark':'ant'">
    <Loading :spinning="loading.loading">
      <router-view class="app" />
    </Loading>
  </a-config-provider>
</template>

<style scoped lang="less">
.app {
}
</style>
<style>
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
</style>
