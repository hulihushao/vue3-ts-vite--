<script setup lang="ts">
import { ref } from "vue";
import { Component } from "@/api/api";
import SearchTree from "@/components/tree/SearchTree.vue"
import type {List_tree} from "@/types/md"

let list_tree = ref<Array<List_tree>>([]);
Component.getMd("static/md/index.json").then((res: any) => {
  console.log(res.data);
  let data:List_tree[]=[]
  res.data.forEach((item:{name:string},index:number)=>{
    data.push({
      title:item.name.split(".")[0],
      key:index,
    })
  })
  list_tree.value=data
});

let md = ref("");
Component.getMd("static/md/vue3ts.md").then((res: any) => {
  console.log(res.data);
  md.value = res.data;
});
</script>

<template>
  <div id="markdown-con">
    <div class="list-tree">
      目录
      <div>
        <search-tree :data="list_tree" />
      </div>
    </div>
    <div class="markdown">
      <v-md-preview
        :style="{ background: 'var(--bgColor)', border: '1px solid #999' }"
        :text="md"
      ></v-md-preview>
    </div>
  </div>
</template>

<style scoped lang="less">
#markdown-con {
  height: 100%;
  border: 1px solid red;
  display: flex;
  .list-tree,
  .markdown {
    height: 100%;
    overflow: auto;
  }
  .list-tree {
    width: 30%;
    border: 1px solid red;
    padding:10px;
  }
  .markdown {
    width: 100%;
  }
}
</style>
