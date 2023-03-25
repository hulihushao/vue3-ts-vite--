<script setup lang="ts">
import Loading from "@/components/loading/index.vue";
</script>

<template>
  <a-layout-content
    :style="{
      margin: '24px 16px',
      padding: '10px',
      background: '#fff',
      minHeight: '280px',
      maxHeight: '100vh',
      overflow: 'auto',
    }"
  >
    <router-view class="view" v-slot="{ Component }">
      <transition
        mode="out-in"
        appear
        enter-active-class="animate__animated animate__fadeInRight"
        leave-active-class="animate__animated animate__fadeOutLeft"
      >
        <component style="" :is="Component" />
      </transition>
    </router-view>
  </a-layout-content>
</template>

<style scoped></style>
