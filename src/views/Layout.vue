<script setup lang="ts">
import { ref, onMounted, watch, nextTick, provide, onBeforeUnmount } from "vue";
import Aside from "@/views/layout/LayoutSider.vue";
import Header from "@/views/layout/LayoutHeader.vue";
import Content from "@/views/layout/LayoutContent.vue";
import Footer from "@/views/layout/LayoutFooter.vue";
import Notice from "@/components/common/Notice.vue";
import useTheme from "@/store/theme";
import { useGetRoute } from "@/composables/useGetRoute";
import { useRouter } from "vue-router";

let router = useRouter();
let isShowNotice = ref(false);
let isHome = ref(false);
let unwatch = watch(
  () => router.currentRoute.value.path,
  (toPath) => {
    let path = useGetRoute();
    isHome.value = path.includes("home");
  },
  { immediate: true, deep: true }
);
let themeObj = useTheme();
let header = ref();
//打开抽屉
let openDrawer = () => {
  console.log(header.value);
  header.value.users.setting();
};

// 局部组件刷新
const isRouterAlive = ref(true);
const reload = () => {
  isRouterAlive.value = false;
  nextTick(() => {
    isRouterAlive.value = true;
  });
};
provide("reload", reload);

onMounted(() => {
  setTimeout(() => {
    isShowNotice.value = true;
  }, 1000);
});
onBeforeUnmount(() => {
  unwatch();
});
</script>

<template>
  <a-layout
    class="layout"
    :id="themeObj.isDark ? 'layout-dark' : 'layout-light'"
    :style="{ backgroundImage: `url(${themeObj.bgImg}) !important` }"
    style="height: 100% !important"
  >
    <Aside />
    <a-layout>
      <span v-drag class="setting">
        <Icon @click="openDrawer" :color="true" iconfont="icon-shezhi" />
      </span>
      <header>
        <Header ref="header" />
      </header>
      <Notice
        v-if="isShowNotice && isHome"
        :show="isShowNotice"
        style="position: absolute; top: 125px"
      />
      <Content :isRouterAlive="isRouterAlive" />
      <footer>
        <Footer />
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
                :fill="
                  themeObj.isDark
                    ? 'rgba(105,105,105,.5)'
                    : 'rgba(224,233,239,.5)'
                "
              />
              <use
                xlink:href="#hans-wave"
                x="50"
                y="3"
                :fill="
                  themeObj.isDark
                    ? 'rgba(105,105,105,.5)'
                    : 'rgba(224,233,239,.5)'
                "
              />
              <use
                xlink:href="#hans-wave"
                x="50"
                y="6"
                :fill="
                  themeObj.isDark
                    ? 'rgba(105,105,105,.5)'
                    : 'rgba(224,233,239,.5)'
                "
              />
            </g>
          </svg>
        </div>
      </footer>
    </a-layout>
  </a-layout>
</template>

<style scoped lang="less">
.layout {
  background: url() center/cover no-repeat !important;
}
#layout-dark {
  --bgColor: rgba(31, 31, 31, 0.5);
}
#layout-light {
  --bgColor: rgba(255, 255, 255, 0.5);
}
.setting {
  width: 26px;
  font-size: 25px;
  position: absolute;
  z-index: 999;
  right: 10px;
  top: 300px;
  &:hover {
    cursor: pointer;
  }
}
:deep(.ant-layout),
:deep(.custom-dark-layout),
:deep(#tabs .ant-tabs),
:deep(#tabs .custom-dark-tabs),
:deep(#tabs .ant-tabs-tab),
:deep(#tabs .custom-dark-tabs-tab),
:deep(#tabs .ant-tabs-tab-active),
:deep(#tabs .custom-dark-tabs-tab-active),
#layout-dark .ant-layout :deep(.ant-layout-content),
#layout-dark .custom-dark-layout :deep(.custom-dark-layout-content),
#layout-light .ant-layout :deep(.ant-layout-content),
#layout-light .custom-dark-layout :deep(.custom-dark-layout-content),
:deep(.ant-layout-footer),
:deep(.custom-dark-layout-footer) {
  transition: var(--transition);
  background: var(--bgColor) !important;
}
</style>
