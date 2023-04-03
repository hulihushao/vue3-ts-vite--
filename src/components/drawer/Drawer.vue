<script setup lang="ts">
import { ref ,toRefs} from "vue";
let visibleObj=defineProps<{
    visible:{required:true,type:Boolean}
}>()
let {visible}=toRefs(visibleObj)
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
      title="Basic Drawer"
      placement="right"
      @after-visible-change="afterVisibleChange"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>
  </div>
</template>

<style scoped></style>
