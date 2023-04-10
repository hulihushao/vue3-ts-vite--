<script setup lang="ts">
import{ref}from "vue"
let doc_title=ref("")
doc_title.value=import.meta.env.VITE_DOC_TITLE
</script>

<template>
  <a-layout-footer style="text-align: center">
    {{doc_title}} ©2023 Created by TJP
  </a-layout-footer>
</template>

<style scoped></style>
