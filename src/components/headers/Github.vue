<script setup lang="ts">
import Icon from "@/components/icon/Icon.vue";
</script>

<template>
  <a-button style="display:flex;justify-content:center;align-items:center"
    href="https://github.com/hulihushao/vue3-ts-vite--"
    target="_blank"
    type="link"
    size="large"
    ghost
  >
    <template #icon
      ><Icon
        style="font-size: 25px; margin-top: 7px"
        icon="GithubOutlined"
      /> </template
  ></a-button>
</template>

<style scoped></style>
