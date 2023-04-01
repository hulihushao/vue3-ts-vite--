<script setup lang="ts">
import { ref } from "vue";
import TabsView from "@/components/tabs/TabsView.vue";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import useLayout from "@/store/layout";
import * as Headers from "@/components/headers/index";
let collapsed = useLayout();
</script>
<template>
  <a-layout-header class="header-con">
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

    <span class="tool-con">
          <Headers.Time/>
      <Headers.Search/>
      <Headers.Github/>
      <Headers.User />
    </span>
  </a-layout-header>
  <tabs-view />
</template>

<style scoped lang="less">
.header-con {
  overflow:hidden;
  background: #fff;
  padding: 0;
  border-bottom: 1px solid #ccc;
  display:flex;
  align-items:center;
  height:50px;
  justify-content:space-between;
  .tool-con{
    height:100%;
    padding:20px;
    display:flex;
    align-items:center;
  }
}
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
