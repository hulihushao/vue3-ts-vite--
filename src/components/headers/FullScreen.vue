<script setup lang="ts">
import useFullScreen from "@/store/fullScreen"
let isFull=useFullScreen()
let setFull=()=>{
    isFull.fullScreen=!isFull.fullScreen
}
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
