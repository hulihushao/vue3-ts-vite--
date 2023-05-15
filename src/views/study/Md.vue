<script setup lang="ts">
import { ref } from "vue";
import { Component } from "@/api/api";
import SearchTree from "@/components/tree/SearchTree.vue";
import type { List_tree } from "@/types/md";
import useTheme from "@/store/theme";
import { getLightenDarkenColor, oppositeColor } from "@/utils/utils";

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

let md = ref("### <center>暂无数据</center>");
let loadMd = (select: string) => {
  loading.value = true;
  Component.getMd("static/md/" + select + ".md").then((res: any) => {
    console.log(res.data);
    md.value = res.data;
    loading.value = false;
  });
};
//选中加载md文件
let handleSelect = (selected: List_tree[]) => {
  loadMd(selected[0].title);
};

//览预的里h1,h2边框的颜框色
let border_bottom_color = ref("");
border_bottom_color.value = oppositeColor(themeObj.setColor, -5);
</script>

<template>
  <div id="markdown-con">
    <div class="list-tree">
      <h2>目录</h2>
      <div class="tree-con">
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
  color: v-bind("themeObj.setColor") !important;
  display: flex;
  justify-content:space-between;
  .list-tree,
  .markdown {
    height: 100%;
    overflow: auto;
  }
  .list-tree {
    width: 29%;
    border: 1px solid #aaa;
    padding: 5px;
    .tree-con {
      height: calc(100% - 44px);
      overflow-y: auto;
      overflow-x: hidden;
    }
  }
  .markdown {
    width: 69%;
    :deep(h2),
    :deep(h1) {
      border-bottom-color: v-bind(border_bottom_color) !important;
    }
  }
}
</style>
<style></style>
