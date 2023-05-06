<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from "vue";
import VTypical from "vue-typical";
import { useRouter } from "vue-router";
import useTheme from "@/store/theme";
import { GetWeather, Github } from "@/api/api";
import axios from "axios";
import { bgColors, colors, quicks, overviews } from "@/utils/config/quicklys";
import { getLightenDarkenColor } from "@/utils/utils";
import { menus } from "@/types/menus";
import { useMenuClick } from "@/composables/useMenuClick";
import isMobile, { GetOs, GetCurrentBrowser } from "@/utils/deviceType";
import { formatDate } from "xijs";
import * as echarts from "echarts";
import { echartsInit } from "@/utils/echarts";
//import { ECOption } from "@/types/echart";
import type { EChartsOption } from "echarts";
import { commitsType } from "@/types/home";

let themeObj = useTheme();

//设置文字颜色
let echart: echarts.ECharts;
let chartOpt: EChartsOption | any;
let unwatch: any;
let resizeObserver: any = ref(null);
onMounted(() => {
  
  let opt = echartsInit(echarts, themeObj);
  echart = opt.myChart;
  chartOpt = opt.option;
  setTimeout(() => {
    echart.setOption(chartOpt);
  }, 500);
  //设置文字颜色
  unwatch = watch(
    () => themeObj.setColor,
    () => {
      chartOpt.title.textStyle.color = themeObj.setColor;
      chartOpt.xAxis.axisLabel.color = themeObj.setColor;
      console.log(chartOpt);
      echart.setOption(chartOpt);
    },
    {
      flush: "post",
    }
  );
  console.log(opt);
  //监听dom尺寸变化
  resizeObserver.value = new ResizeObserver((entries) => {
    window.requestAnimationFrame(() => {
      if (!Array.isArray(entries) || !entries.length) {
        return;
      }
      nextTick(() => {
        echart.resize();
      });
    });
  });
  resizeObserver.value.observe(document.getElementById("echarts-container"));
});

let ip = ref("");

//点击快捷方式
let router = useRouter();
let handleQuick = (quick: menus) => {
  useMenuClick(quick, router);
};

//系统信息
const columns = [
  {
    dataIndex: "name",
    width: "37%",
  },
  {
    dataIndex: "content",
  },
];
const data = ref([
  {
    key: "1",
    name: "IP",
    content: sessionStorage.getItem("ip") || "未知",
  },
  {
    key: "2",
    name: "登录地",
    content: sessionStorage.getItem("area") || "未知",
  },
  {
    key: "3",
    name: "浏览器",
    content: GetCurrentBrowser(),
  },
  {
    key: "4",
    name: "操作系统",
    content: GetOs(),
  },
]);
//获取IP
axios.get("https://api.ipify.org/?format=json").then((res) => {
  if (data.value[0].content != res.data.ip) {
    if (data.value[0].content != "未知") {
      data.value[0].content += "/" + res.data.ip;
      data.value[0].name += "（local/vpn）";
    } else {
      data.value[0].content = res.data.ip;
    }
  } else {
    data.value[0].content = res.data.ip;
  }
});
//获取地址
axios.get("https://api.vvhan.com/api/getIpInfo").then((res) => {
  let datas = res.data.info;
  if (data.value[1].content != "未知") {
    data.value[1].content = datas.prov + datas.city;
  }
});

//获取天气
let addr = ref("");
let weatherInfo = ref("");
let weatherTip = ref("");
GetWeather.weather().then((res: any) => {
  addr.value = res.data.city;
  weatherInfo.value = `${res.data.info.type} 温度：${res.data.info.low} ～${res.data.info.high} 风向：${res.data.info.fengxiang} 风力：${res.data.info.fengli}`;
  weatherTip.value = res.data.info.tip;
});
//获取github提交记录

let commits = ref();
Github.getCommits().then((res: any) => {
  let commit: Array<commitsType> = [];
  res.data.forEach((item: any, index: number) => {
    commit.push({
      avatar: item.committer.avatar_url,
      date: formatDate(new Date(item.commit.committer.date).getTime()),
      committer: item.commit.committer.name,
      message: item.commit.message,
      id: index,
    });
  });
  commits.value = commit;
  console.log(commits.value, new Date("2023-04-28T05:35:21Z").getDate());
});

let blink = ref("blink");
onBeforeUnmount(() => {
  resizeObserver.value.disconnect();
  unwatch();
});
</script>

<template>
  <div id="home">
    <div class="header">
      <div class="con">
        <v-typical
          class="title"
          :class="blink"
          :steps="[
            1000,
            '早上坏，admin，没好的一天从工作开始！',
            1000,
            () => {
              blink = ``;
            },
          ]"
          :loop="1"
          :wrapper="'p'"
        ></v-typical>
        <!--
        <p class="title">早上坏，{{ "admin" }}，没好的一天从工作开始！</p>
        -->
        <p class="weather">
          <span>{{ addr }} 天气：</span>
          <span>{{ weatherInfo }}</span>
          <br />
          <span>Tip：{{ weatherTip }}</span>
        </p>
        <p class="count">
          <Icon style="color: #1890ff" icon="UserOutlined" />
          <span class="users">用户数 1245</span>
          <span id="busuanzi_container_site_pv"
            >本站总访问量<span id="busuanzi_value_site_pv"></span>次</span
          >
        </p>
        <p class="git">
          <span>Github仓库地址：</span>
          <a href="https://github.com/hulihushao/vue3-ts-vite--" target="_blank"
            >https://github.com/hulihushao/vue3-ts-vite--</a
          >
        </p>
      </div>
      <div class="img">
        <img src="/static/imgs/dashboard.png" />
      </div>
    </div>
    <div class="quickly">
      <div class="left" :style="{ width: isMobile() ? '100%' : '' }">
        <p class="title">快捷方式</p>
        <div class="items-con">
          <div
            class="item"
            @click="handleQuick(item)"
            v-for="(item, index) in quicks"
            :key="item.name"
          >
            <div
              class="icon-con"
              :style="{
                background: bgColors[index],
                color: getLightenDarkenColor(bgColors[index], -110),
              }"
            >
              <Icon class="icon" :icon="item.icon" :iconfont="item.iconfont" />
            </div>
            <span class="name">{{ item.title }}</span>
          </div>
          <!--4*Math.ceil(quicks.length/4)-quicks.length,此公式没有最多8个的限制-->
          <div
            style="width: 24%"
            v-for="item in 8 % quicks.length"
            :key="item"
          ></div>
        </div>
      </div>
      <div class="right" :style="{ width: isMobile() ? '100%' : '' }">
        <p class="title">概览 <span class="wei">(单位:个)</span></p>
        <div class="items-con">
          <div class="item" v-for="item in overviews" :key="item.name">
            <p class="name">{{ item.name }}</p>
            <p class="counter">{{ item.counter }}</p>
          </div>
        </div>
      </div>
      <div class="center" :style="{ width: isMobile() ? '100%' : '' }">
        <p class="title">系统信息</p>
        <div class="items-con">
          <a-table
            style="width: 100%"
            size="small"
            :pagination="false"
            :columns="columns"
            :data-source="data"
            bordered
            :showHeader="false"
          >
            <template #bodyCell="{ column, text }">
              <template v-if="column.dataIndex === 'name'">
                <span style="display: inline-block; word-break: break-all">{{
                  text
                }}</span>
              </template>
              <template v-if="column.dataIndex === 'content'">
                <span style="display: inline-block; word-break: break-all">{{
                  text
                }}</span>
              </template>
            </template>
          </a-table>
        </div>
      </div>
    </div>
    <main class="content">
      <div class="left" :style="{ width: isMobile() ? '100%' : '' }">
        <div id="echarts-container"></div>
      </div>
      <div class="right" :style="{ width: isMobile() ? '100%' : '' }">
        <span class="title">更新日志</span>
        <div class="commit-con">
          <a-timeline>
            <a-timeline-item v-for="item in commits" :key="item.id">
              <p class="msg">{{ item.message }}</p>
              <p class="committer">
                <span class="avatar-con">
                  <a-avatar size="small" :src="item.avatar">
                    <template #icon>
                      <Icon icon="UserOutlined" />
                    </template>
                  </a-avatar>
                </span>
                <span class="name">{{ item.committer }} </span>
                <span> {{ item.date }}</span>
              </p>
            </a-timeline-item>
          </a-timeline>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped lang="less">
.blink::after {
  content: "|";
  animation: blink 1s infinite step-start;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
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
    backdrop-filter: blur(10px);
    align-items: center;
    transition: all 5s;
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
      height: 165px;
      width: 270px;
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
    height: auto; //222px;
    display: flex;
    margin: 10px 0px;
    justify-content: space-between;
    flex-wrap: wrap;
    .left,
    .right,
    .center {
      overflow: auto;
      border: 1px solid var(--ant-primary-color);
      width: 32.5%;
      height: 222px;
      border-radius: 5px;
      padding: 10px;
      backdrop-filter: blur(10px);
      .title {
        font-size: 16px;
      }
      .items-con {
        padding: 5px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .item {
          margin-top: 5px;
        }
      }
    }
    .left {
      .items-con {
        .item {
          width: 24%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          &:hover .icon-con {
            border: 1px solid var(--ant-primary-color);
            transform: scale(1.1);
            box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
          }
          &:hover {
            cursor: pointer;
          }
          .icon-con {
            border-radius: 3px;
            width: 100%;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.3s;
            .icon {
              font-size: 25px;
              display: flex;
              align-items: center;
            }
          }
          .name {
            margin-top: 5px;
          }
        }
      }
    }
    .right {
      .wei {
        font-size: 12px;
        color: #999;
      }
      .items-con {
        .item {
          width: 49%;
          padding: 10px;
          background: #f8f8f8;
          border-radius: 3px;
          .name {
            color: #333;
          }
          .counter {
            font-size: 28px;
            font-weight: 500;
            color: #00cc66;
            line-height: 28px;
            margin-top: 5px;
          }
        }
      }
    }
    .center {
      .items-con {
        padding-bottom: 5px;
      }
    }
  }
  .content {
    height: auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .left,
    .right {
      max-height: 500px;
      overflow: auto;
      border-radius: 5px;
    }
    .left {
      width: 66.25%;
      height: 500px;
      border: 1px solid red;
      position: relative;
      #echarts-container {
        width: 99%;
        height: 490px;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        border: 1px solid skyblue;
      }
    }
    .right {
      width: 32.5%;
      padding: 10px;
      border: 1px solid red;
      .title {
        font-size: 16px;
      }
      .commit-con {
        padding: 5px;
        margin-top: 5px;
        .committer {
          display: flex;
          align-items: center;
          .name {
            margin: 0 5px;
          }
        }
        .msg {
          font-size: 15px;
          font-weight: 550;
        }
      }
    }
  }
}
</style>
