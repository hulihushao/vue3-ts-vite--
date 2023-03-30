<script setup lang="ts">
import { ref } from "vue";
import { Empty } from "ant-design-vue";
let simpleImage = ref(Empty.PRESENTED_IMAGE_SIMPLE);
</script>

<template>
  <a-empty
    :image="simpleImage"
    :image-style="{
      height: '60px',
      'margin-top': '100px',
    }"
  >
    <template #description>
      <span> 敬请期待! </span>
    </template>
  </a-empty>
</template>

<style scoped></style>
