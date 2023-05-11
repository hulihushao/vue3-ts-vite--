<script setup lang="ts">
import { ref } from "vue";
import actions from "@/utils/config/userActions";
import { useRouter } from "vue-router";
import type { MenuProps } from "ant-design-vue";
import useTabsData from "@/store/tabs";
import useLayout from "@/store/layout";
import Drawer from "../drawer/Drawer.vue";
import {userCenter} from "@/utils/config/other-menu"
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
let drawerVisible = ref<boolean>(false);
let drawerVisibleIf = ref(false);
//设置抽屉隐藏
let setVisible = () => {
  drawerVisible.value = false;
  setTimeout(() => {
    drawerVisibleIf.value = drawerVisible.value;
  }, 300);
};
//事件集合
const clicks = {
  //用户中心
  personCenter:(user: action) =>{
    let find = tabsData.tabs.filter((item) => item.key == user.id);
    if (!find.length) {
      tabsData.tabs.push({
        title: userCenter.title,
        key: user.id as string,
        icon: userCenter.icon,
        closable: true,
        path: userCenter.path,
        openKeys: [],
        preList: [],
        iconfont: "",
      });
    }
    router.push({ path: "personCenter" });
    tabsData.setActiveKey(user.id);
    layout.selectKeys = [];
  },
  //系统设置
  setting:()=> {
    drawerVisibleIf.value = true;
    drawerVisible.value = true;
  },
  //退出
  logOut:()=> {
    router.push({ path: "/login" });
    localStorage.removeItem("userInfo")
  },
};

let onMenuClick = (item: action) => {
  let click=item.click
  clicks[click as keyof typeof clicks](item);
};

defineExpose({
  setting:clicks.setting
})
</script>

<template>
  <div>
    <a-dropdown placement="bottom" overlayClassName="dropDownmenus">
      <span style="height: 50px; display: flex; align-items: center;cursor:pointer;">
        <a-avatar
          @click.prevent
          src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
          style="background-color: #87d068"
        >
          <template #icon>
            <Icon :icon="'UserOutlined'" />
          </template>
        </a-avatar>
        <span style="margin: 0 5px">admin</span>
        <span style="font-size: 10px;color:var(--ant-primary-color)">
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
    <Drawer
      v-if="drawerVisibleIf"
      :visible="drawerVisible"
      @setVisible="setVisible"
    />
  </div>
</template>

<style lang="less">
.dropDownmenus {
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
