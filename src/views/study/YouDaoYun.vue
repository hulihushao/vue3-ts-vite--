<script setup lang="ts">
import Iframe from "@/components/common/Iframe.vue"
let src="https://note.youdao.com/web/#/file/recent/note/671D5B5B42AA4051AF7E6BB0615E168F/"
</script>

<template>
<span>Tip:部分浏览器不支持嵌套登录，请<a :href="src" target="_blank">跳转链接打开</a></span>
<Iframe :src="src"/>
</template>

<style scoped></style>