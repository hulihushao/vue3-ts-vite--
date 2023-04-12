<script setup lang="ts">
import { ref } from "vue";
import SearchIcon from "./search/SearchIcon.vue";
import TheSearch from "./search/TheSearch.vue";

let theSearch = ref(null);
let isShowInput = ref(false);
let handleShowInput = (isShow: boolean) => {
  if (!isShow){
    console.log(theSearch.value)
      theSearch.value.searchClear();
  } 
  setTimeout(()=>{
    isShowInput.value = isShow;
  })
};
</script>

<template>
  <div id="search-con">
    <transition
      mode="out-in"
      appear
      enter-active-class="animate__animated animate__fadeInRight"
      leave-active-class="animate__animated animate__fadeOutRight"
    >
      <TheSearch ref="theSearch" v-if="isShowInput" />
    </transition>
    <SearchIcon @handle-show-input="handleShowInput" />
  </div>
</template>

<style scoped lang="less">
#search-con {
  display: flex;
  align-items: center;
}
</style>
