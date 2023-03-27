<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@/utils/ICON";
import useTabsData from "@/store/tabs";
import { useRouter } from "vue-router";
import useLayout from "@/store/layout";

const router = useRouter();
const tabsData = useTabsData();
let layout = useLayout();

let paneClick = (pane) => {
  let one = tabsData.tabs.filter((item) => item.key == pane);
  layout.selectKeys = [pane];
  router.push({ path: one[0].path });
};
const remove = (targetKey: string) => {
  let index = tabsData.tabs.findIndex((item) => item.key == targetKey);
  tabsData.tabs.splice(index, 1);
  if (index <= 0) {
    index = 0;
  } else {
    index = index - 1;
  }
  let pre = tabsData.tabs[index];
  router.push({path:pre.path})
  tabsData.setActiveKey(pre.key);
  layout.selectKeys = [pre.key];
};
const onEdit = (targetKey: string | MouseEvent, action: string) => {
  if (action === "add") {
  } else {
    remove(targetKey as string);
  }
};
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
