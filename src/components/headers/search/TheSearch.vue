<script setup lang="ts"></script>

<template>
  <a-input-search
    v-model:value="value"
    placeholder="input search text"
    enter-button
    @search="onSearch"
  />
</template>

<style scoped></style>
