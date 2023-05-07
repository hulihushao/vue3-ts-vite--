<script setup lang="ts">
import { ref } from "vue";
import { Component } from "@/api/api";

let md = ref("");
Component.getMd("static/md/vue3ts.md").then((res: any) => {
  console.log(res.data);
  md.value = res.data;
});

</script>

<template>
  <div id="markdown-con">
    <div class="list-tree">目录</div>
    <div class="markdown">
      <v-md-preview
        :style="{ background: 'var(--bgColor)', border: '1px solid #999' }"
        :text="md"
      ></v-md-preview>
    </div>
  </div>
</template>

<style scoped lang="less">
#markdown-con{
  border:1px solid red;
  display:flex;
  .list-tree{
    width:30%;
    border:1px solid red;
  }
}
</style>
