<script setup lang="ts">
import { ref, toRefs, onMounted, onBeforeUnmount } from "vue";
import { useSetTheme } from "@/composables/useSetTheme";
import "vue3-colorpicker/style.css";
import type { SelectProps } from "ant-design-vue";
import { Sketch } from "@ans1998/vue3-color";
import Upload from "@/components/upLoad/Upload.vue";
import TheSysLayout from "@/components/drawer/TheSysLayout.vue"
import useTheme from "@/store/theme";

let themeObj = useTheme();
let colors = ref(themeObj.color);
let bgColor = ref(themeObj.color);

let showSketch = ref(false);
//实时更新颜色
let updateColor = (e) => {
  console.log(e);
  bgColor.value = `rgba(${e.rgba.r},${e.rgba.g},${e.rgba.b},${e.rgba.a})`;
  themeObj.color = bgColor.value;
  //设置主题色
  useSetTheme(bgColor.value);
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
//暂时无用
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
  //如果当前被点击的元素不是 myDiv 或 myDiv 的子元素，则隐藏 myDiv 和 mask
  if (
    targetElement !== myDiv &&
    !myDiv.contains(targetElement) &&
    targetElement !== colorPreviewDiv
  ) {
    showSketch.value = false;
  }
};
let urlValue = ref("");

let defaultSelect = ref("URL");
const selectObj = ref<SelectProps["options"]>([
  {
    value: "0",
    label: "URL",
  },
  {
    value: "1",
    label: "上传",
  },
]);
let showWhich = ref(true);

let selectChange = (value: string) => {
  imgBase64.value=""
  urlValue.value=""
  if (value == "0") {
    showWhich.value = true;
  } else {
    showWhich.value = false;
  }
};
//暂存上传的图片
let imgBase64 = ref("");
let saveImgBase64 = (base64Url: string) => {
  console.log(base64Url);
  imgBase64.value = base64Url;
};
//保存设置
let saveSetting = () => {
  if (showWhich.value) {
    if (urlValue.value) themeObj.bgImg = urlValue.value;
  } else {
    if(imgBase64.value)themeObj.bgImg = imgBase64.value;
  }
  
};
//重置设置
let resetSetting = () => {
  themeObj.$reset();
  bgColor.value = themeObj.color;
  colors.value = themeObj.color;
  //设置主题色
  useSetTheme(bgColor.value);
};
onMounted(() => {
  //监听点击位置以关闭颜色选择器
  document
    .querySelector(".custom-class")
    .removeEventListener("click", onClickCbk);
  document
    .querySelector(".custom-class")
    .addEventListener("click", onClickCbk, false);
});
onBeforeUnmount(() => {
  document
    .querySelector(".custom-class")
    .removeEventListener("click", onClickCbk);
});
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
          <div style="position: absolute; z-index: 999; left: -200%; top: 30px">
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
      <div :class="$style.bgImg_con">
        <div>
          <span>背景图片</span>
          <a-select
            size="small"
            ref="select"
            v-model:value="defaultSelect"
            style="width: 75px; margin-left: 10px"
            :options="selectObj"
            @change="selectChange"
          ></a-select>
          <span style="color:#ccc;font-size:12px;margin-left:10px">注:URL和上传只会生效一个</span>
        </div>

        <div :class="$style.img_select_con">
          <a-input
            v-if="showWhich"
            v-model:value="urlValue"
            placeholder="请输入图片URL"
            allow-clear
          />
          <Upload @saveImg="saveImgBase64" v-else />
        </div>
      </div>
    </div>
    <a-divider />
    <div :class="$style.buju_con">
      <h3>系统布局设置</h3>
     <TheSysLayout/>
    </div>
    <a-divider />
    <div :class="$style.btn_con">
      <a-button @click="saveSetting">
        <template #icon><Icon icon="SaveOutlined" /></template>
        保存设置
      </a-button>
      <a-button @click="resetSetting">
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
.bgImg_con {
  padding: 5px 10px;
  .img_select_con {
    margin-top: 5px;
  }
}
.buju_con {
  margin: 10px 0;
}
.btn_con {
  display: flex;
  justify-content: space-around;
}
</style>
