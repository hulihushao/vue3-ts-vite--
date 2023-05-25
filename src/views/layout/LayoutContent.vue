<script setup lang="ts">
const props=defineProps(["isRouterAlive"])
</script>

<template>
  <a-layout-content
    :style="{
      margin: '10px 6px 0',
      padding: '5px',
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
        enter-active-class="animate__animated animate__bounceInRight animate__fast"
        leave-active-class="animate__animated animate__fadeOutLeft animate__fast"
      >
        <component style="" :is="Component" />
      </transition>
    </router-view>
  </a-layout-content>
</template>

<style scoped></style>
