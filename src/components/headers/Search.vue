<script setup lang="ts">
import {ref} from "vue"
import SearchIcon from "./search/SearchIcon.vue"
import TheSearch from "./search/TheSearch.vue"

let isShowInput=ref(false)
let handleShowInput=(isShow:boolean)=>{
  isShowInput.value=isShow
}
</script>

<template>
<div id="search-con">
  <transition
    mode="out-in"
    appear
    enter-active-class="animate__animated animate__fadeInRight"
    leave-active-class="animate__animated animate__fadeOutRight"
  >
  <TheSearch v-if="isShowInput"/>
    </transition>
  <SearchIcon @handle-show-input="handleShowInput"/>
</div>
</template>

<style scoped lang="less">
#search-con{
  display:flex;
  align-items:center;
}
</style>
