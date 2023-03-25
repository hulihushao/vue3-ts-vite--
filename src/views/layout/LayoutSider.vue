<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import SubMenu from "@/components/menu/MenuItem.vue";
import useLayout from "../../store/layout";
import {
  PieChartOutlined,
} from "@ant-design/icons-vue";
import {menuList} from "@/utils/config/menus";
import useTabsData from "@/store/tabs"

const tabsData=useTabsData()
const router=useRouter();
let collapsed = useLayout();
let selectedKeys = ref<string[]>(["1"]);
const list = ref([...menuList]);
console.log(list)

//菜单点击
const menuClick=(item)=>{
  if(!tabsData.tabs.some(itm=>itm.key==item.key)){
    tabsData.tabs.push({
      title:item.title,
      key:item.key,
      icon:item.icon,
      closable:true
    })
    
  }
  router.push({
    path:item.path
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
    <div class="logo"></div>
    <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
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
          <sub-menu @menuItemClick="menuClick" :menu-info="item" :key="item.key" />
        </template>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<style scoped>
.logo {
  height: 32px;

  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}
</style>
