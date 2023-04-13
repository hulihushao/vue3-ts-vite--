<script setup lang="ts">
import CodeMirror from "@/components/common/CodeMirror.vue";
import DemoTab from "@/components/common/DemoTab.vue";
import WebSocket from "@/views/componentdemo/webSocket/index.vue";
</script>
<template>
  <div class="demo-con">
    <h1>WebSocket测试demo</h1>
    <demo-tab>
      <template #demo>
        <WebSocket />
      </template>
      <template #code>
        <code-mirror src="@/views/componentdemo/webSocket/index.vue"/>
      </template>
    </demo-tab>
  </div>
</template>

<style scoped lang="less">
.demo-con {
  height: 100%;
  h1 {
    text-align: center;
  }
}
</style>
