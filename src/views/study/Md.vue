<script setup lang="ts">
import { ref } from "vue";
import { Component } from "@/api/api";
import SearchTree from "@/components/tree/SearchTree.vue";
import type { List_tree } from "@/types/md";
import useTheme from "@/store/theme";

let themeObj = useTheme();
let loading = ref(false);
let list_tree = ref<Array<List_tree>>([]);
Component.getMd("static/md/index.json").then((res: any) => {
  console.log(res.data);
  let data: List_tree[] = [];
  res.data.forEach((item: { name: string }, index: number) => {
    data.push({
      title: item.name.split(".")[0],
      key: index,
    });
  });
  list_tree.value = data;
});

let md = ref("### 暂无数据");
let loadMd = (select: string) => {
  loading.value = true;
  Component.getMd("static/md/" + select + ".md").then((res: any) => {
    console.log(res.data);
    md.value = res.data;
    loading.value = false;
  });
};

let handleSelect = (selected: List_tree[]) => {
  loadMd(selected[0].title);
};
</script>

<template>
  <div id="markdown-con">
    <div class="list-tree">
      目录
      <div>
        <search-tree :data="list_tree" @select="handleSelect" />
      </div>
    </div>
    <div class="markdown">
      <Loading :spinning="loading">
        <template #tip> 加载中... </template>
        <template #indicator>
          <Icon icon="LoadingOutlined" />
        </template>
        <v-md-preview
          :style="{
            color: themeObj.setColor,
            background: 'var(--bgColor)',
            border: '1px solid #999',
            height: '100%',
          }"
          :text="md"
        ></v-md-preview>
      </Loading>
    </div>
  </div>
</template>

<style scoped lang="less">
#markdown-con {
  height: 100%;
  border: 1px solid red;
  color: v-bind("themeObj.setColor") !important;
  display: flex;
  .list-tree,
  .markdown {
    height: 100%;
    overflow: auto;
  }
  .list-tree {
    width: 30%;
    border: 1px solid red;
    padding: 10px;
  }
  .markdown {
    width: 100%;
  }
}
</style>
