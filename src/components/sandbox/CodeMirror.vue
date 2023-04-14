<script setup lang="ts">
import { Codemirror } from "vue-codemirror";
import { vue } from "@codemirror/lang-vue";
import { oneDark } from "@codemirror/theme-one-dark";
import { basicSetup } from "codemirror";
import { ref, shallowRef } from "vue";
import axios from "axios";
import CodePreview from "@/components/sandbox/CodePreview.vue";
let props = defineProps<{
  src: string;
}>();

const code = ref("");
//获取vue文件内容
//先用Url+"?raw"将其内容转为字符串
//再去掉export default后使用JSON.parse转化
let loadData = async () => {
  let src = props.src.replace("@", "/src");
  let res = await axios.get(src + "?raw");
  code.value = res.data.replace("export default ", "");
  code.value = JSON.parse(code.value);
};
loadData();
const extensions = [vue(), basicSetup, oneDark];
let log = console.log;
const view = shallowRef();
const handleReady = (payload) => {
  view.value = payload.view;
  log(view.value);
};
</script>

<template>
  <code-preview :code="code" />
  <codemirror
    v-model="code"
    placeholder="loading..."
    :style="{ width: '100%', minHeight: '300px', maxHeight: '100%;' }"
    :autofocus="false"
    :indent-with-tab="true"
    :tabSize="2"
    :extensions="extensions"
    @ready="handleReady"
    @change="log('change', $event)"
    @focus="log('focus', $event)"
    @blur="log('blur', code)"
  />
</template>

<style scoped></style>
