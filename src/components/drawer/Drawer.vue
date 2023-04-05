<script setup lang="ts">
import { ref, toRefs } from "vue";
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";

import { Sketch } from "@ans1998/vue3-color";
let colors = ref("red");
let bgColor = ref("#000");

let showSketch = ref(false);
//实时更新颜色
let updateColor = (e) => {
  console.log(e);
  bgColor.value=`rgba(${e.rgba.r},${e.rgba.g},${e.rgba.b},${e.rgba.a})`
};
//确定按钮更新颜色
function changSketchButton(item) {
  showSketch.value = false;
  console.log(item);
  if (item.isOk) {
    console.log("确定");
    bgColor.value = item.activeColor;
  } else {
    console.log("取消");
  }
}
const pureColor = ref("#71afe5");
const gradientColor = ref(
  "linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)"
);

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
</script>

<template>
  <div id="drawer-con" @click="showSketch = false">
    <a-drawer
      :destroyOnClose="true"
      v-model:visible="visible"
      class="custom-class"
      style=""
      :bodyStyle="{ padding: '30px' }"
      placement="right"
      @close="emits('setVisible')"
    >
      <template #title>
        <h2>布局设置</h2>
      </template>
      <div class="theme-con">
        <h3>主题风格设置</h3>
        <div :class="$style.color_select">
          <span>主题颜色</span>
          <div style="position: relative">
            <div
              @click.prevent="showSketch = true"
              :class="$style.color_con"
              :style="{ background: bgColor }"
            ></div>
            <div style="position: absolute; left: -200%; top: 30px">
              <Sketch
                @update:modelValue="updateColor"
                v-model="colors"
                :show="showSketch"
                @changButton="changSketchButton"
              ></Sketch>
            </div>
          </div>
          <div></div>
          <span v-if="false" style="border: 1px solid red; position: relative">
            <color-picker
              v-model:pureColor="pureColor"
              format="rgb"
              useType="both"
              pickerType="chrome"
              v-model:gradientColor="gradientColor"
            />
          </span>
        </div>
      </div>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>
  </div>
</template>

<style lang="less" module scoped>
.color_select {
  width: 100%;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.color_con {
  width: 40px;
  height: 20px;
}
</style>
