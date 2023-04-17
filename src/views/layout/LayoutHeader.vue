<script setup lang="ts">
import { ref } from "vue";
import TabsView from "@/components/tabs/TabsView.vue";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import useLayout from "@/store/layout";
import * as Headers from "@/components/headers/index";
import isMobile from "@/utils/deviceType";
import useTheme from "@/store/theme";
import TopMenu from "@/components/menu/TopMenu.vue";
let themeObj = useTheme();
let collapsed = useLayout();
</script>
<template>
  <a-layout-header class="header-con" :style="{background:themeObj.isDark?'':'#fff'}">
    <span class="header-menu">
      <menu-unfold-outlined
        v-if="collapsed.collapsed && !themeObj.isTopMenu"
        class="trigger"
        @click="() => (collapsed.collapsed = !collapsed.collapsed)"
      />

      <menu-fold-outlined
        v-if="!collapsed.collapsed && !themeObj.isTopMenu"
        class="trigger"
        @click="() => (collapsed.collapsed = !collapsed.collapsed)"
      />
      <TopMenu v-if="themeObj.isTopMenu" />
    </span>
    <span class="tool-con">
      <Headers.Search />
      <Headers.Fullscreen />
      <Headers.Github />
      <Headers.Time v-if="themeObj.isShowTime" />
      <Headers.User />
    </span>
  </a-layout-header>
  <tabs-view  v-show="themeObj.isShowTabs"/>
</template>

<style scoped lang="less">
.header-con {
  overflow: hidden;
  padding: 0;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;

  justify-content: space-between;
  .tool-con {
    height: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    overflow-x:auto;
    overflow-y:hidden;;
  }
}
.header-menu {
  display: flex;
  align-items: center;
}
.trigger {
  font-size: 18px;
  line-height: 0px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
.trigger:hover {
  color: var(--ant-primary-color);
}
</style>
