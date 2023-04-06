<script setup lang="ts">
import useLoading from "@/store/loading";
import Loading from "@/components/loading/index.vue";
import {useSetTheme} from "@/composables/useSetTheme"
import useTheme from "@/store/theme"
const loading = useLoading();
const theme=useTheme()
//设置全局主题色
useSetTheme(theme.color)
</script>

<template>
  <router-view class="app"/>
  <Loading :spinning="loading.loading"/>
</template>

<style scoped>
.app{

}
</style>
