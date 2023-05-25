<script setup lang="ts">
import { Codemirror } from "vue-codemirror";
import { vue } from "@codemirror/lang-vue";
import { oneDark } from "@codemirror/theme-one-dark";
import { basicSetup } from "codemirror";
import { ref, shallowRef } from "vue";
import {Component} from "@/api/api";
import CodePreview from "@/components/sandbox/CodePreview.vue";
import {useModules} from "@/composables/useModules"

let props = defineProps<{
  src: string;
}>();
//所有demo组件
let allModules=useModules()

const code = ref("");
const component=ref()

//获取vue文件内容
//先用Url+"?raw"将其内容转为字符串
//再去掉export default后使用JSON.parse转化
let loadData = async () => {
  let src = props.src.replace("@", "/src");
  component.value=allModules[src]
  //console.log(component)
  let res:any = await Component.getComponent(src + "?raw")
  code.value = res.data.replace("export default ", "");
};
loadData();
const extensions = [vue(), basicSetup, oneDark];
let log = console.log;
const view = shallowRef();
const handleReady = (payload:any) => {
  view.value = payload.view;

};
</script>

<template>
  <code-preview :code="code" :component="component" />
  <codemirror
    v-model="code"
    placeholder="loading..."
    :style="{ width: '100%', minHeight: '300px', maxHeight: '65vh;' }"
    :autofocus="false"
    :indent-with-tab="true"
    :tabSize="2"
    :extensions="extensions"
    @ready="handleReady"
    @change="log('change', $event)"
    @focus="log('focus', $event)"
    @blur="log('blur', $event)"
  />
</template>

<style scoped></style>
