<script setup lang="ts">
import { ref } from "vue";
let activeKey = ref("1");
</script>

<template>
  <div class="card-container">
    <a-tabs v-model:activeKey="activeKey" type="card">
      <a-tab-pane key="1" tab="demo">
        <slot name="demo" />
      </a-tab-pane>
      <a-tab-pane key="2" tab="code">
        <slot name="code" />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<style scoped>
.card-container {
  width: 100%;
}
</style>
