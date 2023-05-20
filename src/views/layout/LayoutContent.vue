<script setup lang="ts">
const props=defineProps(["isRouterAlive"])
</script>

<template>
  <a-layout-content
    :style="{
      margin: '22px 16px 0',
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
        enter-active-class="animate__animated animate__bounceInRight"
        leave-active-class="animate__animated animate__fadeOutLeft"
      >
        <component style="" :is="Component" />
      </transition>
    </router-view>
  </a-layout-content>
</template>

<style scoped></style>
