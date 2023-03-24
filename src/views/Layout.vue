<script setup lang="ts">
import Aside from "@/views/layout/LayoutSider.vue";
import Header from "@/views/layout/LayoutHeader.vue";
import Content from "@/views/layout/LayoutContent.vue";
import Footer from "@/views/layout/LayoutFooter.vue";
</script>

<template>
  <a-layout style="height:100% !important">
      <Aside/>
    <a-layout>
        <header>
            <Header/>
        </header>
            <Content/>
        <footer>
            <Footer/>
        </footer>
    </a-layout>
  </a-layout>
</template>

<style scoped></style>
