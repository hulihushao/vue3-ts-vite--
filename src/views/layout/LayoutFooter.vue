<script setup lang="ts">
import { ref } from "vue";
let doc_title = ref("");
doc_title.value = import.meta.env.VITE_DOC_TITLE;
</script>

<template>
  <a-layout-footer
    style="
      text-align: center;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    "
  >
    {{ $t("footer.content", { doc_title }) }}
  </a-layout-footer>
</template>

<style scoped></style>
