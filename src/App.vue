<script setup lang="ts">
import Layout from "./views/Layout.vue";
import Aside from "./views/layout/LayoutSider.vue";
import Header from "./views/layout/LayoutHeader.vue";
import Content from "./views/layout/LayoutContent.vue";
import Footer from "./views/layout/LayoutFooter.vue";
</script>

<template>
  <Layout style="height: 100% !important">
    <template #aside>
      <Aside />
    </template>
    <template #header> <Header /> </template>
    <template #main> <Content /> </template>
    <template #footer> <Footer /> </template>
  </Layout>
</template>

<style scoped></style>
