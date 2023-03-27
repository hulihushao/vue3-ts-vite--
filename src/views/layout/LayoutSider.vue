<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import SubMenu from "@/components/menu/MenuItem.vue";
import useLayout from "../../store/layout";
import { PieChartOutlined } from "@ant-design/icons-vue";
import { menuList } from "@/utils/config/menus";
import useTabsData from "@/store/tabs";
import { storeToRefs } from "pinia";
import { menus } from "@/types/menus";
import {useGetRoute,useAllMenus} from"@/hooks/useGetRoute"

const tabsData = useTabsData();
const router = useRouter();
let collapsed = useLayout();

//保持响应性获取数据
let { selectKeys } = storeToRefs(collapsed);
const list = ref([...menuList]);
console.log(list);

//菜单点击
const menuClick = (item: menus) => {
  if (!tabsData.tabs.some((itm: menus) => itm.key == item.key)) {
    let data: menus = {
      title: item.title,
      key: item.key,
      icon: item.icon,
      closable: true,
      path: item.path,
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
let path:string=useGetRoute()
let allMenus=useAllMenus()
let currentMenu=allMenus.filter(item=>path.includes(item.path))
selectKeys=[currentMenu[0].key]
let openKeys=ref<string|number[]>(currentMenu[0].openKeys)
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
    <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectKeys" :openKeys="openKeys">
      <template v-for="item in list" :key="item.key">
        <template v-if="!item.children">
          <a-menu-item :key="item.key" @click="menuClick(item)">
            <template #icon>
              <PieChartOutlined />
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
  </a-layout-sider>
</template>

<style scoped lang="less">
.logo {
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0);
  margin: 16px;
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
    margin-left: 10px;
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
