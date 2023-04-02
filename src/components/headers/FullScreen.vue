<script setup lang="ts">
import useFullScreen from "@/store/fullScreen";
import fullscreen from "@/composables/useFullScreen";
let isFull = useFullScreen();
//设置全屏显示
let setFull = () => {
  if (!isFull.fullScreen) {
    //全屏
    fullscreen.requestFullScreen(document.documentElement);
  } else {
    //退出全屏
    fullscreen.exitFullScreen();
  }

  isFull.fullScreen = !isFull.fullScreen;
};
</script>

<template>
  <div id="fullScreen">
    <a-button @click="setFull" type="link">
      <template #icon>
        <Icon v-if="!isFull.fullScreen" icon="FullscreenOutlined" />
        <Icon v-else icon="FullscreenExitOutlined" />
      </template>
    </a-button>
  </div>
</template>

<style scoped></style>
