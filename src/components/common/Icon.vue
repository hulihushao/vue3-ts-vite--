<script setup lang="ts">
import { Icon } from "@/utils/ICON";
let icons = defineProps({
  icon: {
    type: String,
  },
  iconfont: String,
  color: Boolean,
});
</script>

<template>
  <Icon v-if="icons.icon" :icon="icons.icon" />
  <i
    v-else-if="icons.iconfont && !icons.color"
    :class="'iconfont ' + icons.iconfont"
  ></i>
  <!--多色图标-->
  <svg
    v-else-if="icons.iconfont && icons.color"
    class="icon"
    aria-hidden="true"
  >
    <use :xlink:href="'#' + icons.iconfont"></use>
  </svg>
</template>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
