<script setup lang="ts">
import useLoading from "@/store/loading";
import Loading from "@/components/loading/index.vue";
const loading = useLoading();
</script>

<template>
  <router-view class="app"/>
  <Loading :spinning="loading.loading"/>
</template>

<style scoped>
.app{

}
</style>
