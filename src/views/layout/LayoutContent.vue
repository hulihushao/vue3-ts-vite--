<script setup lang="ts">
const props=defineProps(["isRouterAlive"])
</script>

<template>
  <a-layout-content
    :style="{
      margin: '24px 16px',
      padding: '10px',
      background: '#fff',
      minHeight: '280px',
      'overflow-y': 'auto',
      'overflow-x': 'hidden',
    }"
  >
    <router-view v-if="props.isRouterAlive" class="view" v-slot="{ Component }">
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
