<script setup lang="ts">
import { ref, computed } from "vue";
import type { List_tree } from "@/types/md";

let props = defineProps<{
  data: List_tree[];
}>();

let emits = defineEmits(["pointerenter", "pointerleave", "select"]);
let searchValue = ref("");
let list_tree = computed(() => {
  return props.data.filter((item: List_tree) =>
    item.title.includes(searchValue.value)
  );
});
console.log(list_tree);

let selectedKeys = ref();
let handleSelect = (selected: string | number[]) => {
  console.log(selected);
  if (selected.length) selectedKeys.value = selected;
  let getone = props.data.filter(
    (item: List_tree) => item.key == selectedKeys.value[0]
  );
  emits("select", getone);
};
</script>

<template>
  <a-input-search
    v-model:value="searchValue"
    style="margin-bottom: 8px"
    placeholder="Search"
  />
  <a-tree
    class="searchtree"
    blockNode
    :tree-data="list_tree"
    :selectedKeys="selectedKeys"
    @select="handleSelect"
  >
    <template #title="{ title }">
      <span style="paddingleft: 10px">
        <span v-if="title.indexOf(searchValue) > -1">
          {{ title.substr(0, title.indexOf(searchValue)) }}
          <span style="color: #f50">{{ searchValue }}</span>
          {{ title.substr(title.indexOf(searchValue) + searchValue.length) }}
        </span>
        <span v-else>{{ title }}</span>
      </span>
    </template>
  </a-tree>
</template>

<style>
.searchtree .ant-tree-switcher,
.searchtree .custom-dark-tree-switcher {
  width: 0 !important;
}
.searchtree .ant-tree-list,
.searchtree .custom-dark-tree-list {
  padding-top: 4px;
}
</style>
