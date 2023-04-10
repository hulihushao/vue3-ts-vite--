<script setup lang="ts">
import { ref, onMounted } from "vue";

let iframeOption = defineProps({
  src: {
    required: true,
    type: String,
  },
});
let iframe = ref(null);
let spinning=ref(true)
onMounted(() => {
  //console.log(iframe.value.contentWindow, 222);
});
let loaded=()=>{
  spinning.value=false
}
</script>

<template>
<Loading :spinning="spinning">
  <template #tip><span>加载中...</span></template>
  
    <iframe
      ref="iframe"
      id="iframe-con"
      :src="iframeOption.src"
      width="100%"
      height="100%"
      @load="loaded"
      allow="geolocation"
    ></iframe>
</Loading>
</template>

<style scoped lang="less">
#iframe-con {
  border: none;
}
</style>
