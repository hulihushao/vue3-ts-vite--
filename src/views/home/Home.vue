<script setup lang="ts">
import { ref } from "vue";
import useTheme from "@/store/theme";
import axios from "axios";
let themeObj = useTheme();
let ip = ref("");
axios.post("https://localhost:5173/queryip").then((res) => {
  ip.value = res.data;
});
</script>

<template>
  <div id="home">
    <div class="header">
      <p class="title">早安，{{ "admin" }}，没好的一天从工作开始！</p>
      <p class="weather">
        <span>山东省-烟台市 天气：</span>
        <span>多云 温度：12摄氏度 风向：北 风力：≤3级 空气湿度：76</span>
      </p>
      <p class="count">
        <Icon icon="UserOutlined"/>
          <span class="users">用户数 1245</span>
      </p>
      <p class="git">
        <span>Github仓库地址：</span>
        <a href="" target="_blank">https://github.com/hulihushao/vue3-ts-vite--</a>
      </p>
    </div>
    <div class="quickly"></div>
    <main class="content"></main>
  </div>
</template>

<style scoped lang="less">
#home {
  color: v-bind("themeObj.setColor");

  p {
    padding: 0;
    margin: 0;
  }
  .header {
    border: 1px solid #ccc;
    border-radius:5px;
      padding:10px;
    width: 100%;
    height: auto;
    .title {
      font-size: 18px;
      font-weight: 500;
    }
    .weather{
        padding:10px 0;
    }
    .count{
      .users{
        margin-left:10px;
      }
    }
    .git{
      padding-top:10px;
    }
  }
  .quickly {
    border: 1px solid red;
    width: 100%;
    height: 120px;
    display: flex;
    margin: 10px 0px;
    justify-content: space-between;
  }
  .content {
    border: 1px solid red;
    height: 200px;
    width: 100%;
  }
}
</style>
