<script setup lang="ts">
import { ref } from "vue";
const panes = ref([
  { title: "Tab 1", content: "Content of Tab 1", key: "1", closable: false },
  { title: "Tab 2", content: "Content of Tab 2", key: "2", closable: true },
]);
const activeKey = ref(panes.value[0].key);
</script>

<template>
  <div id="tabs">
    <a-tabs
      style="background: #fff"
      v-model:activeKey="activeKey"
      hide-add
      type="editable-card"
    >
      <a-tab-pane
        v-for="pane in panes"
        :key="pane.key"
        :tab="pane.title"
        :closable="pane.closable"
      >
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<style scoped></style>

<style lang="less">
#tabs {
  .ant-tabs {
    padding-top: 2px;
    padding-left: 2px;
    height: 45px;
    border-bottom: 1px solid #eee;
  }
}
</style>
