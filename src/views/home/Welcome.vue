<script setup lang="ts">
import Icon from "@/components/icon/Icon.vue";
</script>

<template>
  <div id="welcome">
    <p>
      <Icon iconfont="dingzhikaifa-zhihuiguanlixitong" />
    </p>
    <h1>欢迎使用</h1>
    <h2>诺依中后台管理系统</h2>
    <p class="tip">系统完善中...</p>
    <br />
    <p>
      系统采用<br /><a-button type="link">vue3</a-button>+<a-button type="link"
        >vite</a-button
      >+<a-button type="link">ts</a-button> +<a-button type="link"
        >pinia</a-button
      >
      +<a-button type="link">Antd</a-button> <br />构建
    </p>
    <p class="version">version:0.1.0</p>
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
  }
  p .iconfont {
    color: #409eff;
    font-size: 40px;
  }
  .tip {
    font-size: 16px;
  }
  .version {
    color: #999;
  }
}
</style>
