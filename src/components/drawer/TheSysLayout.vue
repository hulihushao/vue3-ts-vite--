<script setup lang="ts">
import useTheme from "@/store/theme";

let themeObj = useTheme();
</script>

<template>
  <div id="buju">
    <div class="buju-item">
      <span>顶部菜单</span
      ><span
        ><a-switch
          v-model:checked="themeObj.isTopMenu"
          checked-children="开"
          un-checked-children="关"
      /></span>
    </div>
    <div class="buju-item">
      <span>标签页</span
      ><span
        ><a-switch
          v-model:checked="themeObj.isShowTabs"
          checked-children="开"
          un-checked-children="关"
      /></span>
    </div>
    <div class="buju-item">
      <span>系统时间</span
      ><span
        ><a-switch
          v-model:checked="themeObj.isShowTime"
          checked-children="开"
          un-checked-children="关"
      /></span>
    </div>
    <div class="buju-item">
      <span>菜单栏默认展开</span
      ><span
        ><a-switch
          v-model:checked="themeObj.isUnfoldMenusSider"
          checked-children="展开"
          un-checked-children="缩起"
      /></span>
    </div>
    <div class="buju-item">
      <span>子菜单默认展开</span
      ><span
        ><a-switch
          v-model:checked="themeObj.isMenuOpen"
          checked-children="开"
          un-checked-children="关"
      /></span>
    </div>
  </div>
</template>

<style scoped lang="less">
#buju {
  padding: 5px 10px;
  .buju-item {
      width:80%;
      padding:5px 0;
    display: flex;
    justify-content: space-between;
  }
}
</style>
