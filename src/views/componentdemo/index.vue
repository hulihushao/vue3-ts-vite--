<script setup lang="ts">
import CodeMirror from "@/components/sandbox/CodeMirror.vue";
import DemoTab from "@/components/common/DemoTab.vue";

let props=defineProps<{
  title:string,
  src:string,
}>()
</script>
<template>
  <div class="demo-con">
    <h1>{{props.title}}</h1>
    <demo-tab>
      <template #demo>
          <slot></slot>
      </template>
      <template #code>
        <code-mirror :src="props.src"/>
      </template>
    </demo-tab>
  </div>
</template>

<style scoped lang="less">
.demo-con {
  height: 100%;
}
</style>
