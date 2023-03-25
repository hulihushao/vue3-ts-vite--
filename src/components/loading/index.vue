<template>
  <a-spin
    v-if="spinning"
    size="large"
    class="postion"
    :spinning="spinning"
  >
    <slot></slot>
  </a-spin>
</template>

<script lang="ts" setup>
import{ref,toRefs,watch} from "vue"
const data = ref<boolean>(true);
const props = defineProps<{
  spinning: boolean;
}>();
const { spinning } = toRefs(props);

</script>

<style lang="less" scoped>
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
</style>
