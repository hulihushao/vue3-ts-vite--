<script setup lang="ts">
import { ref, onMounted } from "vue";
import Aside from "@/views/layout/LayoutSider.vue";
import Header from "@/views/layout/LayoutHeader.vue";
import Content from "@/views/layout/LayoutContent.vue";
import Footer from "@/views/layout/LayoutFooter.vue";
import useTheme from "@/store/theme";
let themeObj = useTheme();
</script>

<template>
  <a-layout
    class="layout"
    :id="themeObj.isDark?'layout-dark':'layout-light'"
    :style="{ backgroundImage: `url(${themeObj.bgImg}) !important` }"
    style="height: 100% !important"
  >
    <Aside />
    <a-layout>
      <header>
        <Header />
      </header>
      <Content />
      <footer>
        <Footer />
      </footer>
    </a-layout>
  </a-layout>
</template>

<style scoped>
.layout {
  background: url() center/cover no-repeat !important;
}
#layout-dark {
  --bgColor: rgba(0, 0, 0, 0.5);
}
#layout-light {
  --bgColor: rgba(255, 255, 255, 0.5);
}
:deep(.ant-layout),
:deep(#tabs .ant-tabs),
:deep(#tabs .ant-tabs-tab),
:deep(#tabs .ant-tabs-tab-active),
#layout-dark .ant-layout :deep(.ant-layout-content),
#layout-light .ant-layout :deep(.ant-layout-content),
:deep(.ant-layout-footer) {
  background: var(--bgColor) !important;
}
</style>
