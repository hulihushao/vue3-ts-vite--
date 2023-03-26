<script setup lang="ts">
import useLoading from "@/store/loading";
import Loading from "@/components/loading/index.vue";
const loading = useLoading();
</script>

<template>
  <router-view />
  <Loading :spinning="loading.loading"/>
</template>

<style scoped></style>
