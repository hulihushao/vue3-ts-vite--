<script setup lang="ts">
import { ref } from "vue";
import useTheme from "@/store/theme";
import { GetWeather } from "@/api/api";
import { bgColors, colors, quicks } from "@/utils/config/quicklys";
import { getLightenDarkenColor } from "@/utils/utils";
let themeObj = useTheme();
let ip = ref("");

GetWeather.getIP().then((res) => {
  ip.value = res.data;
});
</script>

<template>
  <div id="home">
    <div class="header">
      <div class="con">
        <p class="title">早安，{{ "admin" }}，没好的一天从工作开始！</p>
        <p class="weather">
          <span>山东省-烟台市 天气：</span>
          <span>多云 温度：12摄氏度 风向：北 风力：≤3级 空气湿度：76</span>
        </p>
        <p class="count">
          <Icon style="color: #1890ff" icon="UserOutlined" />
          <span class="users">用户数 1245</span>
        </p>
        <p class="git">
          <span>Github仓库地址：</span>
          <a href="" target="_blank"
            >https://github.com/hulihushao/vue3-ts-vite--</a
          >
          {{ ip }}
        </p>
      </div>
      <div class="img">
        <img src="/static/imgs/dashboard.png" />
      </div>
    </div>
    <div class="quickly">
      <div class="left">
        <p class="title">快捷方式</p>
        <div class="items-con">
          <div class="item" v-for="(item, index) in quicks" :key="item.name">
            <div
              class="icon-con"
              :style="{
                background: bgColors[index],
                color: getLightenDarkenColor(bgColors[index], -110),
              }"
            >
              <Icon :icon="item.icon" :iconfont="item.iconfont" />
            </div>
            <span class="name">首页</span>
          </div>
          <div style="width:24%;" v-for="item in 8 - quicks.length" :key="item"></div>
        </div>
      </div>
      <div class="right">汇总</div>
    </div>
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
    border-radius: 5px;
    border-image: -webkit-linear-gradient(to bottom, red, yellow) 30 30;
    border-image: -moz-linear-gradient(to bottom, red, yellow) 30 30;
    border-image: linear-gradient(to bottom, red, yellow) 30 30;
    clip-path: inset(0 round 3px); //裁剪
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    overflow: auto;
    .con {
      width: 60%;
      padding: 10px;
      .title {
        font-size: 18px;
        font-weight: 500;
      }
      .weather {
        padding: 10px 0;
      }
      .count {
        .users {
          margin-left: 10px;
        }
      }
      .git {
        padding-top: 10px;
      }
    }
    .img {
      //background: url("/static/imgs/dashboard.png") center/cover no-repeat;
      height: 145px;
      width: 260px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
      }
    }
  }
  .quickly {
    width: 100%;
    height: auto;
    display: flex;
    margin: 10px 0px;
    justify-content: space-between;
    .left,
    .right {
      border: 1px solid red;
      width: 49%;
    }
    .left {
      padding: 10px;
      .title {
        font-size: 16px;
      }
      .items-con {
        padding: 5px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .item {
          width: 24%;
          margin-top: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          .icon-con {
            border-radius: 5px;
            width: 100%;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 25px;
          }
          .name {
            margin-top: 5px;
          }
        }
      }
    }
  }
  .content {
    border: 1px solid red;
    height: 200px;
    width: 100%;
  }
}
</style>
