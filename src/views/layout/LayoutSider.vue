<script setup lang="ts">
import {ref} from "vue"
import useLayout from "../../store/layout"
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons-vue";
let collapsed=useLayout()
let selectedKeys= ref<string[]>(["1"])
</script>

<template>
  <a-layout-sider
    breakpoint="lg"
    :collapsed="collapsed.collapsed"
        :trigger="null"
    collapsible

  >
    <div class="logo" ></div>
    <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
      <a-menu-item key="1">
        <user-outlined />
        <span>nav 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <video-camera-outlined />
        <span>nav 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <upload-outlined />
        <span>nav 3</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<style scoped>
.logo{
    height: 32px;

  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}
</style>
