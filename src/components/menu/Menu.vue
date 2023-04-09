<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import SubMenu from "@/components/menu/MenuItem.vue";
import useLayout from "../../store/layout";
import { menuList } from "@/utils/config/menus";
import useTabsData from "@/store/tabs";
import { storeToRefs } from "pinia";
import { menus } from "@/types/menus";
import { useGetRoute, useAllMenus } from "@/composables/useGetRoute";

let menuOption = defineProps({
  theme: {
    type: String,
    default(){
      return "dark"
    },
  },
  mode: {
    type: String,
    default: () => "inline",
  },
  style: {
    type: Object,
    default:()=>{}
  },
});
console.log(menuOption)
const list = ref([...menuList]);
let tabsData = useTabsData();
let allMenus = useAllMenus();
const router = useRouter();
let collapsed = useLayout();
//保持响应性获取数据

const { selectKeys } = storeToRefs(collapsed);
//菜单点击
const menuClick = (item: menus) => {
  //console.log(openKeys.value)
  if (!tabsData.tabs.some((itm: menus) => itm.key == item.key)) {
    let cur = allMenus.filter((itm) => itm.key == item.key);
    let opens = cur[0].openKeys;
    let data: menus = {
      title: item.title,
      key: item.key,
      icon: item.icon,
      closable: true,
      path: item.path,
      openKeys: opens,
      preList: cur[0].preList,
      iconfont: item.iconfont,
    };
    tabsData.tabs.push(data);
  }
  //设置tab的选中状态
  tabsData.setActiveKey(item.key);
  router.push({
    path: item.path,
  });
};

//根据url设置菜单选中
let path: string = useGetRoute();
let currentMenu = allMenus.filter(
  (item) => path.split("/").indexOf(item.path) > -1
);
let openKeys = ref([""]);

if (currentMenu.length) {
  selectKeys.value = [currentMenu[0].key];
  openKeys.value = currentMenu[0].openKeys;
} else {
  selectKeys.value = [];
}
</script>

<template>
  <a-menu
    :style="menuOption.style"
    :theme="menuOption.theme"
    :mode="menuOption.mode"
    v-model:selectedKeys="selectKeys"
    :openKeys="openKeys"
  >
    <template v-for="item in list" :key="item.key">
      <template v-if="!item.children">
        <a-menu-item :key="item.key" @click="menuClick(item)">
          <template #icon>
            <Icon :iconfont="item.iconfont" :icon="item.icon"></Icon>
          </template>
          {{ item.title }}
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu
          @menuItemClick="menuClick"
          :menu-info="item"
          :key="item.key"
        />
      </template>
    </template>
  </a-menu>
</template>

<style scoped></style>
