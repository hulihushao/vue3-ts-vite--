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
import useTheme from "@/store/theme";

let menuOption=defineProps({
    theme:{
        type:String,
        default:()=>"dark"
    },
    mode:{
        type:String,
        default:()=>"inline"
    },
    style:{
        type:Object
    }
    
})

const list = ref([...menuList]);
</script>

<template>
  <a-menu :style="menuOption.style"
    :theme="menuOption"
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
