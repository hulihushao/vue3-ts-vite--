<script setup lang="ts">
import{ref}from "vue"

let whichOne=ref(true)
let emits=defineEmits<{
  (e:"handleShowInput",isShow:boolean):void
}>()
let handleSearch=()=>{
  whichOne.value=!whichOne.value
  //显示输入框
  emits("handleShowInput",!whichOne.value)
}
</script>

<template>
  <a-button @click="handleSearch" style="color:var(--ant-primary-color)" type="text" shape="circle">
    <template #icon><Icon v-if="whichOne" icon="SearchOutlined" /><Icon v-else icon="CloseCircleOutlined" /></template>
  </a-button>
</template>

<style scoped></style>
