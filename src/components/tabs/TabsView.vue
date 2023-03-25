<script setup lang="ts">
import { ref } from "vue";
import { Icon } from '@/utils/ICON'
import useTabsData from "@/store/tabs"
const tabsData=useTabsData()
const activeKey = ref(tabsData.tabs[0].key);
</script>

<template>
  <div id="tabs">
    <a-tabs
      style="background: #fff"
      v-model:activeKey="activeKey"
      hide-add
      type="editable-card"
    >
      <a-tab-pane
        v-for="pane in tabsData.tabs"
        :key="pane.key"

        :closable="pane.closable"
      >
        <template #tab>
          <span>
            {{pane.title}}
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
