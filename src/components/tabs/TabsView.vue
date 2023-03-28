<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@/utils/ICON";
import useTabsData from "@/store/tabs";
import { useRouter } from "vue-router";
import useLayout from "@/store/layout";
import { menus } from "@/types/menus";
const router = useRouter();
const tabsData = useTabsData();
let layout = useLayout();

let paneClick = (pane: string | number) => {
  let one = tabsData.tabs.filter((item: menus) => item.key == pane);
  layout.selectKeys = [pane];
  router.push({ path: one[0].path });
};
const remove = (targetKey: string) => {
  let index = tabsData.tabs.findIndex((item: menus) => item.key == targetKey);
  tabsData.tabs.splice(index, 1);
  if (index <= 0) {
    index = 0;
  } else {
    index = index - 1;
  }
  let pre = tabsData.tabs[index];
  router.push({ path: pre.path });
  tabsData.setActiveKey(pre.key);
  layout.selectKeys = [pre.key];
};
const onEdit = (targetKey: string | MouseEvent, action: string) => {
  if (action === "add") {
  } else {
    remove(targetKey as string);
  }
};
//关闭所有tab页
let closeAll=()=>{
  router.push({path:"home"})
  tabsData.$reset()
  layout.resetSelectKeys()
}
</script>

<template>
  <div id="tabs">
    <a-tabs
      style="background: #fff"
      v-model:activeKey="tabsData.activeKey"
      hide-add
      type="editable-card"
      @tabClick="paneClick"
      @edit="onEdit"
    >
      <a-tab-pane
        v-for="pane in tabsData.tabs"
        :key="pane.key"
        :closable="pane.closable"
      >
        <template #tab>
          <span>
            {{ pane.title }}
            <Icon :icon="pane.icon" />
          </span>
        </template>
      </a-tab-pane>

      <template #rightExtra>
        <a-popover :overlayStyle="{width:'100px',overflow:'hidden',marginTop:'-10px'}" title="更多操作" trigger="hover" placement="bottomRight">
          <template #content>
            <a-button type="text" @click="closeAll">关闭全部</a-button>
          </template>
          <a-button type="link">┋</a-button>
        </a-popover>
      </template>
    </a-tabs>
  </div>
</template>

<style scoped></style>

<style lang="less">
#tabs {
  .ant-tabs {
    padding-top: 2px;
    padding-left: 2px;
    height: 45px;
    border-bottom: 1px solid #eee;
  }
}
</style>
