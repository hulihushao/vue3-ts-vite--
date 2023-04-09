<script setup lang="ts">
import { ref, onMounted } from "vue";
let iframeOption = defineProps({
  src: {
    required: true,
    type: String,
  },
});
let iframe = ref(null);
onMounted(() => {
  //console.log(iframe.value.contentWindow, 222);
});
</script>

<template>
  <iframe
    ref="iframe"
    id="iframe-con"
    :src="iframeOption.src"
    width="100%"
    height="100%"
  ></iframe>
</template>

<style scoped lang="less">
#iframe-con {
  border: none;
}
</style>
