<script setup lang="ts">
import Aside from "@/views/layout/LayoutSider.vue";
import Header from "@/views/layout/LayoutHeader.vue";
import Content from "@/views/layout/LayoutContent.vue";
import Footer from "@/views/layout/LayoutFooter.vue";
</script>

<template>
  <a-layout class="layout" style="height: 100% !important">
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
  background: url("https://img.mp.itc.cn/upload/20161119/1a99a2d9eab34a588f05aaad00ad9883_th.jpg")
    center/cover no-repeat !important;
}
:deep(.ant-layout),
:deep(#tabs .ant-tabs),
:deep(#tabs .ant-tabs-tab),
:deep(#tabs .ant-tabs-tab-active),
:deep(.ant-layout-content),
:deep(.ant-layout-footer) {
  background: rgba(255, 255, 255, 0.5) !important;
}
</style>
