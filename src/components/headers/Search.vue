<script setup lang="ts">
import SearchIcon from "./search/SearchIcon.vue"
import TheSearch from "./search/TheSearch.vue"
</script>

<template>
<div id="search-con">
  <TheSearch/>
  <SearchIcon/>
</div>
</template>

<style scoped lang="less">
#search-con{
  display:flex;
  align-items:center;
}
</style>
