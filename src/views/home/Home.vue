<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import useTheme from "@/store/theme";
import { GetWeather, Github } from "@/api/api";
import axios from "axios";
import { bgColors, colors, quicks, overviews } from "@/utils/config/quicklys";
import { getLightenDarkenColor } from "@/utils/utils";
import { menus } from "@/types/menus";
import { useMenuClick } from "@/composables/useMenuClick";
import { GetOs, GetCurrentBrowser } from "@/utils/deviceType";
import { formatDate } from "xijs";
let themeObj = useTheme();
let ip = ref("");

//点击快捷方式
let router = useRouter();
let handleQuick = (quick: menus) => {
  useMenuClick(quick, router);
};

const columns = [
  {
    dataIndex: "name",
    width: "38%",
  },
  {
    dataIndex: "content",
  },
];

const data = ref([
  {
    key: "1",
    name: "IP",
    content: sessionStorage.getItem("ip"),
  },
  {
    key: "2",
    name: "登录地",
    content: sessionStorage.getItem("area"),
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

axios.get("https://api.ipify.org/?format=json").then((res) => {
  data.value[0].content = res.data.ip;
});
//获取天气
let addr = ref("");
let weatherInfo = ref("");
let weatherTip = ref("");
GetWeather.weather().then((res) => {
  addr.value = res.data.city;
  weatherInfo.value = `${res.data.info.type} 温度：${res.data.info.low} ～${res.data.info.high} 风向：${res.data.info.fengxiang} 风力：${res.data.info.fengli}`;
  weatherTip.value = res.data.info.tip;
});
//获取github提交记录

let commits = ref<object[]>();
Github.getCommits().then((res) => {
  let commit: object[] = [];
  res.data.forEach((item, index: number) => {
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
</script>

<template>
  <div id="home">
    <div class="header">
      <div class="con">
        <p class="title">早上坏，{{ "admin" }}，没好的一天从工作开始！</p>
        <p class="weather">
          <span>{{ addr }} 天气：</span>
          <span>{{ weatherInfo }}</span>
          <br />
          <span>Tip：{{ weatherTip }}</span>
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
      <div class="right">
        <p class="title">概览 <span class="wei">(单位:个)</span></p>
        <div class="items-con">
          <div class="item" v-for="item in overviews" :key="item.name">
            <p class="name">{{ item.name }}</p>
            <p class="counter">{{ item.counter }}</p>
          </div>
        </div>
      </div>
      <div class="center">
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
                <span>{{ text }}</span>
              </template>
            </template>
          </a-table>
        </div>
      </div>
    </div>
    <main class="content">
      <div class="left"></div>
      <div class="right">
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
    height: 222px;
    display: flex;
    margin: 10px 0px;
    justify-content: space-between;
    .left,
    .right,
    .center {
      overflow: auto;
      border: 1px solid var(--ant-primary-color);
      width: 32.5%;
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
    .left,
    .right {
      max-height: 500px;
      overflow: auto;
      border-radius: 5px;
    }
    .left {
      width: 66.25%;
      border: 1px solid red;
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
          .avatar-con {
          }
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
