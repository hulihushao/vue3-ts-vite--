<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import Menu from "@/components/menu/Menu.vue"
import SubMenu from "@/components/menu/MenuItem.vue";
import useLayout from "../../store/layout";
import { menuList } from "@/utils/config/menus";
import useTabsData from "@/store/tabs";
import { storeToRefs } from "pinia";
import { menus } from "@/types/menus";
import { useGetRoute, useAllMenus } from "@/composables/useGetRoute";
import useTheme from "@/store/theme";

let themeObj= useTheme();
const tabsData = useTabsData();
const router = useRouter();
let collapsed = useLayout();
//设置菜单栏展开状态
collapsed.collapsed=!themeObj.isUnfoldMenusSider
//保持响应性获取数据
let { selectKeys } = storeToRefs(collapsed);
const list = ref([...menuList]);
console.log(list);

let allMenus = useAllMenus();
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
  selectKeys = [];
}

//设置子菜单全部展开
if(themeObj.isMenuOpen){
  openKeys.value=[]
  allMenus.forEach(item=>{
    openKeys.value.push(...item.openKeys)
  })
}


</script>

<template>
  <a-layout-sider
    breakpoint="lg"
    :collapsed="collapsed.collapsed"
    :trigger="null"
    collapsible
  >
    <div class="logo">
      <i
        class="iconfont icon-dingzhikaifa-zhihuiguanlixitong"
        :class="{ iconsj: collapsed.collapsed }"
      ></i>
      <span :class="{ sj: collapsed.collapsed }">诺依管理系统</span>
    </div>
    <!--<a-menu
      theme="dark"
      mode="inline"
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
    </a-menu>-->
    <Menu/>
  </a-layout-sider>
</template>

<style scoped lang="less">
.logo {
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0);
  margin: 16px 25px;
  .iconfont {
    color: #409eff;
    font-size: 32px;
    transition: all 0.3s;
  }
  .iconsj {
    font-size: 35px;
    transition: all 0.3s;
  }
  span {
    display: inline-block;
    width: 100%;
    height: 100%;
    font-size: 16px;
    color: #fff;
    text-align: center;
    line-height: 32px;
    transition: all 0.3s;
    overflow: hidden;
    opacity: 1;
  }
  .sj {
    overflow: hidden;
    width: 0;
    transition: all 0.3s;
    margin-left: 0;
    opacity: 0;
  }
}
</style>
