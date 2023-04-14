<script setup lang="ts">
import { onMounted } from "vue";
import { VueLive } from "vue-live";
import Layout from "./Layout.vue";
import WebSocket from "@/views/componentdemo/webSocket/index.vue";
let layout = Layout;
let props = defineProps({
  code: String,
});
</script>

<template>
  <VueLive :layout="layout" :code="props.code" :components="{ WebSocket }" />
</template>

<style scoped></style>
