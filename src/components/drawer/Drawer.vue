<script setup lang="ts">
import { ref, reactive, toRefs, onMounted, onBeforeUnmount } from "vue";
import { useSetTheme, useSetLanguage } from "@/composables/useSetTheme";
import "vue3-colorpicker/style.css";
import type { SelectProps } from "ant-design-vue";
import { Sketch } from "@ans1998/vue3-color";
import Upload from "@/components/upLoad/Upload.vue";
import TheSysLayout from "@/components/drawer/TheSysLayout.vue";
import useTheme from "@/store/theme";
import { useI18n } from "vue-i18n";
import { message } from "ant-design-vue";
let themeObj = useTheme();
let colors = ref(themeObj.color);
let bgColor = ref(themeObj.color);

//主题风格设置
let setThemeStyle = (value: boolean) => {
  themeObj.themeChecked = value;
};

let showSketch = ref(false);
//实时更新颜色
let updateColor = (e: any) => {
  console.log(e);
  bgColor.value = `rgba(${e.rgba.r},${e.rgba.g},${e.rgba.b},${e.rgba.a})`;
  themeObj.color = bgColor.value;
  //设置主题色
  useSetTheme(bgColor.value);
};
//确定按钮更新颜色
function changSketchButton(item: any) {
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
let colorSelect = ref();
let onClickCbk = (event: Event) => {
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
  imgBase64.value = "";
  urlValue.value = "";
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
//按钮加载状态
const btnLoading = reactive({
  saveLoading: false,
  resetLoading: false,
});
//保存设置
let saveSetting = () => {
  btnLoading.saveLoading = true;
  if (showWhich.value) {
    if (urlValue.value) themeObj.bgImg = urlValue.value;
  } else {
    if (imgBase64.value) themeObj.bgImg = imgBase64.value;
  }
  setTimeout(() => {
    message.success("设置成功！");
    btnLoading.saveLoading = false;
  }, 1000);
};
//重置设置
let resetSetting = () => {
  btnLoading.resetLoading = true;
  themeObj.$reset();
  bgColor.value = themeObj.color;
  colors.value = themeObj.color;
  //设置主题色
  useSetTheme(bgColor.value);
  message.success("重置成功！");
  btnLoading.resetLoading = false;
};

//主题改变时事件
let themeChange = () => {
  useSetTheme(bgColor.value);
};
//语言选择
const { locale } = useI18n();
let languageChange = (value: boolean) => {
  useSetLanguage(value, locale);
};
onMounted(() => {
  //监听点击位置以关闭颜色选择器
  let div = document.querySelector(".custom_class") as HTMLElement;
  div.removeEventListener("click", onClickCbk);
  div.addEventListener("click", onClickCbk);
});
onBeforeUnmount(() => {
  let div = document.querySelector(".custom_class") as HTMLElement;
  div.removeEventListener("click", onClickCbk);
});
</script>

<template>
  <a-drawer
    destroyOnClose
    forceRender
    width="300"
    v-model:visible="visible"
    :class="$style.custom_class"
    class="custom_class"
    :style="{ color: themeObj.setColor, transition: 'var(--transition)' }"
    :bodyStyle="{ padding: '30px' }"
    placement="right"
    @close="closeDrawer"
  >
    <template #title>
      <h2>布局设置</h2>
    </template>
    <div class="theme-con">
      <h3>主题风格设置</h3>
      <div :class="$style.theme_style">
        <div :class="$style.theme_style_item" @click="setThemeStyle(true)">
          <Icon
            v-if="themeObj.themeChecked"
            :class="$style.icon_"
            icon="CheckOutlined"
          />
          <img src="@/assets/dark.svg" />
        </div>
        <div :class="$style.theme_style_item" @click="setThemeStyle(false)">
          <Icon
            v-if="!themeObj.themeChecked"
            :class="$style.icon_"
            icon="CheckOutlined"
          />
          <img src="@/assets/light.svg" />
        </div>
      </div>
      <div :class="$style.buju_item">
        <span>暗黑主题</span
        ><span
          ><a-switch
            @change="themeChange"
            v-model:checked="themeObj.isDark"
            checked-children="开"
            un-checked-children="关"
        /></span>
        <span></span>
      </div>
      <div :class="$style.buju_item">
        <span>语言选择</span
        ><span
          ><a-switch
            @change="languageChange"
            v-model:checked="themeObj.isZHCN"
            checked-children="中"
            un-checked-children="英"
        /></span>
        <span></span>
      </div>
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
          <br />
          <span style="color: #ccc; font-size: 12px; margin-left: 10px"
            >注:URL和上传只会生效一个</span
          >
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
      <TheSysLayout />
    </div>
    <a-divider />
    <div :class="$style.btn_con">
      <a-button :loading="btnLoading.saveLoading" @click="saveSetting">
        <template #icon><Icon icon="SaveOutlined" /></template>
        保存设置
      </a-button>
      <a-button :loading="btnLoading.resetLoading" @click="resetSetting">
        <template #icon><Icon icon="SyncOutlined" /></template>
        重置设置
      </a-button>
    </div>
  </a-drawer>
</template>

<style lang="less" module scoped>
.custom_class {
  h2,
  h3 {
    transition: var(--transition);
    color: v-bind("themeObj.setColor") !important;
  }
}
.theme_style {
  display: flex;
  align-items: center;
  padding: 10px 10px 10px 0;
  .theme_style_item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    .icon_ {
      position: absolute;
      color: var(--ant-primary-color);
    }
  }
}
.color_select,
.buju_item {
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
