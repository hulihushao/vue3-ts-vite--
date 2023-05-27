<script setup lang="ts">
import {useRouter} from "vue-router";
const router=useRouter()
let handleError=()=>{
  router.push('home')
}
</script>

<template>
  <a-result
    status="404"
    title="404"
    sub-title="Sorry, the page you visited does not exist."
  >
    <template #extra>
      <a-button type="primary" @click='handleError'>返回首页</a-button>
    </template>
  </a-result>
</template>

<style scoped></style>
