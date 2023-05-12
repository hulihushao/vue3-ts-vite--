<script setup lang="ts">
import { ref } from "vue";
import useTabsData from "@/store/tabs";
import { useRouter } from "vue-router";
import useLayout from "@/store/layout";
import { menus } from "@/types/menus";
import { actions as tabActions } from "@/utils/config/tabActions";
import Breadcrumb from "@/components/tabs/Breadcrumb.vue";
import { Action } from "@/types/tabs-view";

const router = useRouter();
const tabsData = useTabsData();
let layout = useLayout();
let tabs=ref()
//点击tab页
let paneClick = (pane: string | number) => {
  console.log(tabs)
  let one = tabsData.tabs.filter((item: menus) => item.key == pane);
  layout.selectKeys = [pane as string];
  console.log(one,pane, 111111);
  router.push({ path: one[0].path });
};
let paneChange=(active:string)=>{
//  paneClick(active)
}
//关闭tab的方法
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
//关闭单个tab页
const onEdit = (targetKey: string | MouseEvent, action: string) => {
  if (action === "add") {
  } else {
    remove(targetKey as string);
  }
};
//关闭所有tab页
let closeAll = () => {
  router.push({ path: "home" });
  tabsData.$reset();
  layout.resetSelectKeys();
};
let clickBtn = (item:Action) => {
  item.click(() => {
    closeAll();
  });
};
</script>

<template>
  <div id="tabs">
    <a-tabs
    ref="tabs"
      style="background: #fff"
      v-model:activeKey="tabsData.activeKey"
      hide-add
      size="small"
      type="editable-card"
      @tabClick="paneClick"
      @change="paneChange"
      @edit="onEdit"
    >
      <!--tab标签页-->
      <a-tab-pane
        v-for="pane in tabsData.tabs"
        :key="pane.key"
        :closable="pane.closable"
      >
        <template #tab>
          <span>
            {{ pane.title }}
            <Icon
              v-if="pane.key == tabsData.activeKey"
              :iconfont="pane.iconfont"
              :icon="pane.icon"
            />
          </span>
        </template>
        <Breadcrumb :list="pane"/>
      </a-tab-pane>

      <!--右侧按钮-->
      <template #rightExtra>
        <a-popover
          :overlayStyle="{
            width: '120px',
            overflow: 'hidden',
            marginTop: '-40px',
          }"
          title="更多操作"
          trigger="hover"
          placement="bottomRight"
        >
          <template #content>
            <a-button 
              v-for="item in tabActions"
              danger
              size="small"
              type="text"
              @click="clickBtn(item)"
              >{{ item.title }}</a-button
            >
          </template>
          <a-button ghost style="color:var(--ant-primary-color);margin-left: 5px" type="dashed">┋</a-button>
        </a-popover>
      </template>
    </a-tabs>
  </div>
</template>

<style scoped></style>

<style lang="less">
#tabs {
  .ant-tabs,.custom-dark-tabs {
    padding: 2px 5px 2px 2px;
    height: 60px;
    border-bottom: 1px solid #eee;
  }
  .ant-tabs-card .ant-tabs-content,  .custom-dark-tabs-card .custom-dark-tabs-content {

    margin-top: -16px;
  }
  .ant-tabs-tab-btn,  .custom-dark-tabs-tab-btn {
    height: 22px;
    line-height:22px;
  }
}
</style>
