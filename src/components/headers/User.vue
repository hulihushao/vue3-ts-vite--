<script setup lang="ts">
import actions from "@/utils/config/userActions";
import {useRouter} from "vue-router"
import type { MenuProps } from 'ant-design-vue';

interface action{
  id:number|string,
  title:string,
  disabled?:boolean,
  divider?:boolean,
  click:string,
}

const router =useRouter()
//事件集合
const clicks={
  //用户中心
  personCenter(){
    router.push({path:"/personCenter"})
  },
  //系统设置
  setting(){},
  //退出
  logOut(){
    router.push({path:"/login"})
  }
}

let onMenuClick:MenuProps['onClick']=(item:action)=>{
clicks[item.click]()
}
</script>

<template>
  <a-dropdown placement="bottom" overlayClassName="dropDownmenus">
    <a-avatar @click.prevent
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      style="background-color: #87d068"
    >
      <template #icon>
        <Icon :icon="'UserOutlined'" />
      </template>
    </a-avatar>
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
</template>

<style lang="less">
.dropDownmenus {
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
