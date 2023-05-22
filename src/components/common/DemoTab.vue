<script setup lang="ts">
import { ref } from "vue";
let activeKey = ref("1");
</script>

<template>
  <div class="card-container">
    <a-tabs v-model:activeKey="activeKey" type="card">
      <a-tab-pane key="1" tab="demo">
        <slot v-if="activeKey == '1'" name="demo" />
      </a-tab-pane>
      <a-tab-pane key="2" tab="code">
        <slot name="code" />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<style scoped lang="less">
.card-container {
  width: 100%;
  height: calc(100% - 29px);
  :deep(.ant-tabs-card),
  :deep(.custom-dark-tabs-card),
  :deep(.custom-dark-tabs-content) {
    height: 100% !important;
  }
}
</style>
