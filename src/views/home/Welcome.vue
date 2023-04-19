<script setup lang="ts">
import { systemComposition } from "@/utils/config/systemComposition";
import useTheme from "@/store/theme";

let themeObj = useTheme();
</script>

<template>
  <div id="welcome">
    <a-time-picker />
    <p>
      <Icon iconfont="icon-dingzhikaifa-zhihuiguanlixitong" />
    </p>
    <h1>{{$t('welcome.wel')}}</h1>
    <h2>{{$t('welcome.sysTitle')}}</h2>
    <p class="tip">{{$t('welcome.tip')}}</p>

    <p>
      {{$t('welcome.use')}}<br />
      <span v-for="(item, index) in systemComposition">
        <a-button :href="item.url" type="link">{{ item.title }}</a-button>
        <span v-if="index < systemComposition.length - 1">+</span>
      </span>
      <br />
      {{$t('welcome.structure')}}
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
    transition: var(--transition);
    color: v-bind("themeObj.setColor");
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
