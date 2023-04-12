<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useAllMenus } from "@/composables/useGetRoute";
import {menus} from "@/types/menus"
import {useMenuClick} from "@/composables/useMenuClick"
let searchValue = ref("");
let allMenus = useAllMenus();
const router=useRouter()
let searchResult = ref(null);
let onSearch = () => {
  searchResult = computed(() =>
    allMenus.filter((item:menus) => item.title.includes(searchValue.value)&& searchValue.value)
  );
  console.log(searchResult.value);
};

let menuClick = (menu:menus) => {
  useMenuClick(menu,router)
  searchValue.value=""
  searchResult.value=[]
};

defineExpose({
  searchClear:()=>{
    searchValue.value=""
    onSearch()
  }
})
</script>

<template>
  <div id="search-box">
    <a-input
      v-model:value="searchValue"
      placeholder="请输入搜索内容"
      enter-button
      @change="onSearch"
      @pressEnter="onSearch"
    />
    <div class="result-box" v-show="searchResult && searchResult.length">
      <p
        class="result-item"
        @click="menuClick(item)"
        v-for="item in searchResult"
        :key="item.key"
      >
        {{ item.title }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="less">
#search-box {
  .result-box {
    width: 18%;
    max-height: 40%;
    overflow: auto;
    position: absolute;
    z-index: 999;
    top: 50px;
    border: 1px solid #aaa;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.5);
    .result-item {
      height: 30px;
      line-height: 30px;
      margin: 0;
      border-bottom: 1px solid #ccc;
      transition: all 0.3s;
      padding: 0px 5px;
      font-size: 15px;
      &:hover {
        background: var(--ant-primary-color);
        color: #fff;
      }
    }
  }
}
</style>
