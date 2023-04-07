<script setup lang="ts">
import useLoading from "@/store/loading";
import Loading from "@/components/loading/index.vue";
import { useSetTheme } from "@/composables/useSetTheme";
import useTheme from "@/store/theme";
const loading = useLoading();
const theme = useTheme();
//设置全局主题色
useSetTheme(theme.color);
</script>

<template>
  <router-view class="app" />
  <Loading :spinning="loading.loading" />
</template>

<style scoped>
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
