<script setup lang="ts">
import { onMounted } from "vue";
import { VueLive } from "vue-live";
import Layout from "./Layout.vue";

let layout = Layout;
let props = defineProps({
  code: String,
  component:{
    required:false,
    type:Function
  },
});
</script>

<template>
  <VueLive :layout="layout" :code="props.code" />
</template>

<style scoped></style>
