<script setup lang="ts">
import {ref} from "vue"
import sdk from '@stackblitz/sdk';
</script>

<template>
  <a-button style="color:var(--ant-primary-color)" type="text" shape="circle">
    <template #icon><Icon icon="SearchOutlined" /></template>
  </a-button>
</template>

<style scoped></style>