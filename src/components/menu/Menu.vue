<script setup lang="ts">
import { ref, onMounted ,onUnmounted} from "vue";
import { useRouter } from "vue-router";
import SubMenu from "@/components/menu/MenuItem.vue";
import useLayout from "../../store/layout";
import { menuList } from "@/utils/config/menus";
import { storeToRefs } from "pinia";
import { menus } from "@/types/menus";
import { useGetRoute, useAllMenus } from "@/composables/useGetRoute";
import { useMenuClick } from "@/composables/useMenuClick";
import useTheme from "@/store/theme";
import useTabsData from "@/store/tabs";

let menuOption = defineProps({
  theme: {
    type: String,
    default() {
      return "dark";
    },
  },
  mode: {
    type: String,
    default: () => "inline",
  },
  style: {
    type: Object,
    default: () => {},
  },
});
//console.log(menuOption)
const list = ref([...menuList]);
let allMenus = useAllMenus();
const router = useRouter();
let collapsed = useLayout();
let themeObj = useTheme();
//保持响应性获取数据
const { selectKeys } = storeToRefs(collapsed);
//菜单点击
const menuClick = (item: menus) => {
  useMenuClick(item, router);
};

//根据url设置菜单选中
let path: string = useGetRoute();
let tabsData = useTabsData();
let openKeys = ref();

let popStateHandle = () => {
  path = useGetRoute();
  let currentMenu = allMenus.filter(
    (item: menus) => path.split("/").indexOf(item.path) > -1
  );
//console.log(currentMenu,1111,path,)
  if (currentMenu.length) {
    selectKeys.value = [currentMenu[0].key as string];
    openKeys.value = currentMenu[0].openKeys;
    tabsData.setActiveKey(selectKeys.value[0]);
  } else {
    selectKeys.value = [];
  }
};
popStateHandle();

onMounted(() => {
  window.addEventListener("popstate", popStateHandle, false);
});
onUnmounted(() => {
  //销毁
  window.removeEventListener("popstate", popStateHandle);
});
//设置子菜单全部展开
if (themeObj.isMenuOpen) {
  openKeys.value = [];
  allMenus.forEach((item: menus) => {
    openKeys.value.push(...item.openKeys as string[]);
  });
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
          {{
            $te(`menu.${item.enKey}`) ? $t(`menu.${item.enKey}`) : item.title
          }}
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
