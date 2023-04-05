<script setup lang="ts">
import { ref, toRefs, onMounted, onUnmounted, nextTick } from "vue";
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";

import { Sketch } from "@ans1998/vue3-color";
let colors = ref("red");
let bgColor = ref("#000");

let showSketch = ref(false);
//实时更新颜色
let updateColor = (e) => {
  console.log(e);
  bgColor.value = `rgba(${e.rgba.r},${e.rgba.g},${e.rgba.b},${e.rgba.a})`;
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
  visible: boolean;
}>();
//结构保持响应性
let { visible } = toRefs(visibleObj);
//定义派发的事件
let emits = defineEmits<{
  (e: "setVisible"): void;
}>();
let closeDrawer = () => {
  showSketch.value = false;
  emits("setVisible");
};
let colorPreview = ref(null);
let colorSelect = ref(null);
let onClickCbk = (event) => {
  const targetElement = event.target; // 获取当前被点击的元素
  const myDiv = colorSelect.value.$el;
  let colorPreviewDiv = colorPreview.value;
  console.log(colorPreviewDiv);
  //如果当前被点击的元素不是 myDiv 或 myDiv 的子元素，则隐藏 myDiv 和 mask
  if (
    targetElement !== myDiv &&
    !myDiv.contains(targetElement) &&
    targetElement !== colorPreviewDiv
  ) {
    showSketch.value = false;
  }
};
onMounted(() => {
  document
    .querySelector(".custom-class")
    .removeEventListener("click", onClickCbk);
  document
    .querySelector(".custom-class")
    .addEventListener("click", onClickCbk, false);
});
onUnmounted(() => {});
</script>

<template>
  <a-drawer
    destroyOnClose
    forceRender
    v-model:visible="visible"
    class="custom-class"
    style=""
    :bodyStyle="{ padding: '30px' }"
    placement="right"
    @close="closeDrawer"
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
            ref="colorPreview"
            @click.prevent="showSketch = true"
            :class="$style.color_con"
            :style="{ background: bgColor }"
          ></div>
          <div style="position: absolute; left: -200%; top: 30px">
            <Sketch
              ref="colorSelect"
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
    <a-divider />
    <div :class="$style.buju_con">
      <h3>系统布局设置</h3>
    </div>
    <a-divider />
    <div :class="$style.btn_con">
      <a-button>
        <template #icon><Icon icon="SaveOutlined" /></template>
        保存设置
      </a-button>
      <a-button>
        <template #icon><Icon icon="SyncOutlined" /></template>
        重置设置
      </a-button>
    </div>
  </a-drawer>
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
.buju_con {
  margin: 10px 0;
  border: 1px solid red;
}
.btn_con {
  display: flex;
  justify-content: space-around;
}
</style>
