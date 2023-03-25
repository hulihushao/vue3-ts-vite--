<script setup lang="ts">
import { ref } from "vue";
import TabsView from "@/components/tabs/TabsView.vue";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import useLayout from "@/store/layout";
let collapsed = useLayout();
</script>
<template>
  <a-layout-header
    style="background: #fff; padding: 0; border-bottom: 1px solid #ccc"
  >
    <menu-unfold-outlined
      v-if="collapsed.collapsed"
      class="trigger"
      @click="() => (collapsed.collapsed = !collapsed.collapsed)"
    />

    <menu-fold-outlined
      v-else
      class="trigger"
      @click="() => (collapsed.collapsed = !collapsed.collapsed)"
    />
  </a-layout-header>
  <tabs-view />
</template>

<style scoped>
.trigger {
  font-size: 18px;
  line-height: 0px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
.trigger:hover {
  color: #1890ff;
}
</style>
