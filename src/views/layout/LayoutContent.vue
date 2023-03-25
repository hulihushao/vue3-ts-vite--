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
    }"
  >
    <router-view class="view" v-slot="{ Component }">
      <transition
        enter-active-class="animate__animated animate__fadeInRight"
        leave-active-class="animate__animated animate__fadeOutLeft"
      >
        <component style="position:absolute" :is="Component" />
      </transition>
    </router-view>
  </a-layout-content>
</template>

<style scoped></style>
