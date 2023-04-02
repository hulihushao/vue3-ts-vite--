<script setup lang="ts">
import actions from "@/utils/config/userActions";
import { useRouter } from "vue-router";
import type { MenuProps } from "ant-design-vue";
import useTabsData from "@/store/tabs";
import useLayout from "@/store/layout";
interface action {
  id: number | string;
  title: string;
  disabled?: boolean;
  divider?: boolean;
  click: string;
}

const router = useRouter();
let tabsData = useTabsData();
let layout = useLayout();
//事件集合
const clicks = {
  //用户中心
  personCenter(user: action) {
    tabsData.tabs.push({
      title: user.title,
      key: user.id,
      icon: "",
      closable: true,
      path: "personCenter",
      openKeys: [],
      preList: [],
      iconfont: "",
    });
    tabsData.setActiveKey(user.id);
    layout.selectKeys = [];
    router.push({ path: "personCenter" });
  },
  //系统设置
  setting() {},
  //退出
  logOut() {
    router.push({ path: "/login" });
  },
};

let onMenuClick: MenuProps["onClick"] = (item: action) => {
  clicks[item.click](item);
};
</script>

<template>
  <div>
    <a-dropdown placement="bottom" overlayClassName="dropDownmenus">
      <span style="border:1px solid red;height:50px;display:flex;align-items:center;">
        <a-avatar
          @click.prevent
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          style="background-color: #87d068"
        >
          <template #icon>
            <Icon :icon="'UserOutlined'" />
          </template>
        </a-avatar>
        <span style="margin: 0 5px">admin</span>
        <span style="font-size: 10px;">
          <Icon icon="DownOutlined" />
        </span>
      </span>
      <template #overlay>
        <a-menu>
          <span v-for="item in actions" :key="item.id">
            <a-menu-divider v-if="item.divider" />
            <a-menu-item @click="onMenuClick(item)" :key="item.id">
              {{ item.title }}
            </a-menu-item>
          </span>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<style lang="less">
.dropDownmenus {
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
