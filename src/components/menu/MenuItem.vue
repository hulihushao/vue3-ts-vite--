<script setup lang="ts">
import Icon  from "@/components/icon/Icon.vue";
import SubMenu from "@/components/menu/MenuItem.vue"
const{ menuInfo} = defineProps({
  menuInfo: {
    type: Object,
    default: () => ({}),
  },
});
const emits=defineEmits(["menuItemClick"])
let menuItemClick=(item)=>{
  emits("menuItemClick",item)
}
</script>
<template>
  <a-sub-menu :key="menuInfo.key">
    <template #icon> <Icon :iconfont="menuInfo.iconfont" :icon="menuInfo.icon" /></template>
    <template #title>{{ menuInfo.title}}</template>
    <template v-for="item in menuInfo.children" :key="item.key">
      <template v-if="!item.children">
        <a-menu-item :key="item.key" @click="menuItemClick(item)">
          <template #icon>
             <Icon :iconfont="item.iconfont" :icon="item.icon" />
          </template>
          {{ item.title }}
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu @menuItemClick="menuItemClick" :menu-info="item" :key="item.key" />
      </template>
    </template>
  </a-sub-menu>
</template>
<style scoped lang="less"></style>
