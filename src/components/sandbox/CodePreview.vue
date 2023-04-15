<script setup lang="ts">
import { onMounted } from "vue";
import { VueLive } from "vue-live";
import Layout from "./Layout.vue";

let layout = Layout;
let props = defineProps({
  code: String,
  component:Function,
});
</script>

<template>
  <VueLive :layout="layout" :code="props.code" :components="{ component:props.component }" />
</template>

<style scoped></style>
