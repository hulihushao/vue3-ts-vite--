<script setup lang="ts">
import { ref, onMounted } from "vue";
import useTheme from "@/store/theme"

let themeObj=useTheme()
let iframeOption = defineProps({
  src: {
    required: true,
    type: String,
  },
  showTip:{
    type:Boolean,
    default:true
  }
});
let iframe = ref(null);
let spinning = ref(true);
onMounted(() => {
  console.log(iframe.value, 222);
});
let loaded = () => {
  spinning.value = false;
};
</script>

<template>
  <Loading :spinning="spinning">
    <template #tip><span>加载中...</span></template>
    <span v-if="iframeOption.showTip"
      ><span :style="{color:themeObj.setColor}">Tip:部分浏览器不支持嵌套登录，请</span><a
        :href="iframeOption.src"
        target="_blank"
        >跳转链接打开</a
      ></span
    >
    <iframe
      ref="iframe"
      id="iframe-con"
      :src="iframeOption.src"
      width="100%"
      height="100%"
      @load="loaded"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  </Loading>
</template>

<style scoped lang="less">
#iframe-con {
  border: none;
}
</style>
