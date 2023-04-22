<script setup lang="ts">
import DemoContainer from "@/views/componentdemo/index.vue";
import WebSocket from "@/views/componentdemo/webSocket/index.vue";
</script>
<template>
  <demo-container
    title="WebSocket Demo"
    src="@/views/componentdemo/webSocket/index.vue"
  >
    <WebSocket />
  </demo-container>
</template>

<style scoped lang="less"></style>
