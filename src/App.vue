<script setup lang="ts">
import useLoading from "@/store/loading"
const loading=useLoading()
</script>

<template>
<router-view />
  <a-spin v-if='loading.loading' size="large" class="postion" :spinning="loading.loading" >
      </a-spin>
</template>

<style scoped>
.loading-qj {
  height: 100vh !important;
}

.postion {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
<style lang="less">
#qj {
  .ant-spin-nested-loading {
    height: 100vh !important;
  }
  .ant-spin-container {
    height: 100vh !important;
  }
}
</style>
