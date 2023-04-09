<script setup lang="ts">
import { toRefs } from "vue";
import { menus } from "@/types/menus";
let List = defineProps<{
  list: menus;
}>();
console.log(List);
const { list } = toRefs(List);
</script>

<template>
  <div id="breadcrumb-con">
    <a-breadcrumb>
      <a-breadcrumb-separator />
      <a-breadcrumb-item
        v-if="list.preList && list.preList.length"
        v-for="item in list.preList"
        >{{ item }}</a-breadcrumb-item
      >
      <a-breadcrumb-item>{{ list.title }}</a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<style scoped lang="less">
#breadcrumb-con {
  width: 100%;
  overflow-x: auto;
  overflow-y:hidden;
  white-space: nowrap;
}
</style>
