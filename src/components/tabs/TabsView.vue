<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@/utils/ICON";
import useTabsData from "@/store/tabs";
import { useRouter } from "vue-router";

const router = useRouter();
const tabsData = useTabsData();

let paneClick = (pane) => {
  let one=tabsData.tabs.filter(item=>item.key==pane)
  router.push({ path: one[0].path });
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
