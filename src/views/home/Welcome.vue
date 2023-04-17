<script setup lang="ts">
import { systemComposition } from "@/utils/config/systemComposition";
import useTheme from "@/store/theme"

let themeObj=useTheme()
</script>

<template>
  <div id="welcome">
    <p>
      <Icon iconfont="icon-dingzhikaifa-zhihuiguanlixitong" />
    </p>
    <h1>欢迎使用</h1>
    <h2>诺依中后台管理系统</h2>
    <p class="tip">系统完善中...</p>

    <p>
      系统采用<br />
      <span v-for="(item, index) in systemComposition">
        <a-button :href="item.url" type="link">{{ item.title }}</a-button>
        <span v-if="index < systemComposition.length - 1">+</span>
      </span>
      <br/>
      构建
    </p>
    <p class="version">version:1.0.0</p>
  </div>
</template>

<style scoped lang="less">
#welcome {
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  p,
  h1,
  h2 {
    text-align: center;
    transition:var(--transition);
    color:v-bind('themeObj.setColor');
  }
  p .iconfont {
    color: #409eff;
    font-size: 50px;
  }
  .tip {
    font-size: 16px;
  }
  .version {
    color: #999;
  }
}
</style>
