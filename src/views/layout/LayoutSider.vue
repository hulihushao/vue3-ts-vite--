<script setup lang="ts">
import Menu from "@/components/menu/Menu.vue";
import useLayout from "../../store/layout";
import useTheme from "@/store/theme";

let themeObj = useTheme();
let collapsed = useLayout();
//设置菜单栏展开状态
collapsed.collapsed = !themeObj.isUnfoldMenusSider;
</script>
<template>
  <a-layout-sider
    v-if="!themeObj.isTopMenu"
    breakpoint="lg"
    :collapsed="collapsed.collapsed"
    :trigger="null"
    collapsible
    collapsedWidth="60"
    :theme="themeObj.themeChecked ? 'dark' : 'light'"
    :style="{ overflow: 'auto'}"
  >
    <div class="logo">
      <i
        class="iconfont icon-dingzhikaifa-zhihuiguanlixitong"
        :class="{ iconsj: collapsed.collapsed }"
      ></i>
      <span
        :style="{color:themeObj.themeChecked?'#fff':'#000'}"
        :class="{ sj: collapsed.collapsed }"
        >{{$t('title.doc_title')}}</span
      >
    </div>
    <Menu :theme="themeObj.themeChecked ? 'dark' : 'light'" />
  </a-layout-sider>
</template>

<style scoped lang="less">
.logo {
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0);
  margin: 16px 12px;
  .iconfont {
    color: #409eff;
    font-size: 32px;
    transition: all 0.3s;
  }
  .iconsj {
    font-size: 35px;
    transition: all 0.3s;
  }
  span {
    display: inline-block;
    width: 100%;
    height: 100%;
    font-size: 16px;
    text-align: center;
    line-height: 32px;
    transition: all 0.3s;
    overflow: hidden;
    opacity: 1;
    word-break:break-all;
  }
  .sj {
    overflow: hidden;
    width: 0;
    transition: all 0.3s;
    margin-left: 0;
    opacity: 0;
  }
}
</style>
