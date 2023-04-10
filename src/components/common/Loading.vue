<template>
  <a-spin size="large" wrapperClassName="spin" :spinning="spinning">
    <template #tip>
      <slot name="tip"></slot>
    </template>
    <template #indicator>
      <slot name="indicator"></slot>
    </template>
    <slot></slot>
  </a-spin>
</template>

<script lang="ts" setup>
import { toRefs } from "vue";
const props = defineProps<{
  spinning: boolean;
  tip?: string;
  indicator?: HTMLHtmlElement;
}>();
const { spinning } = toRefs(props);
</script>

<style lang="less" scoped>
/**
.postion {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
 */
.spin {
  width: 100%;
  height: 100%;
}
:deep(.ant-spin-container) {
  height: 100%;
  width: 100%;
}
</style>
