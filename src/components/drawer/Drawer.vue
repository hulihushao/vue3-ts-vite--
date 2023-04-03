<script setup lang="ts">
import { ref, toRefs } from "vue";
//接受props
let visibleObj = defineProps<{
  visible: { required: true; type: Boolean };
}>();
//结构保持响应性
let { visible } = toRefs(visibleObj);
//定义派发的事件
let emits = defineEmits<{
  (e: "setVisible"): void;
}>();

const afterVisibleChange = (bool: boolean) => {
  console.log("visible", bool);
};
</script>

<template>
  <div id="drawer-con">
    <a-drawer
      v-model:visible="visible"
      class="custom-class"
      style="color: red"
      :bodyStyle="{ padding: '30px' }"
      title="Basic Drawer"
      placement="right"
      @close="emits('setVisible')"
      @after-visible-change="afterVisibleChange"
    >
      <div>
        <h3>主题风格设置</h3>
        <div>
          <span>主题颜色</span>
          
        </div>
      </div>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>
  </div>
</template>

<style scoped></style>
