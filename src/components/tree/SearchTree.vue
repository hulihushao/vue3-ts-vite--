<script setup lang="ts">
import { ref, computed } from "vue";
import type { List_tree } from "@/types/md";

let props = defineProps<{
  data: List_tree[];
}>();

defineEmits(["pointerenter", "pointerleave"]);
let searchValue = ref("");
let list_tree = computed(() => {
  return props.data.filter((item:List_tree) => item.title.includes(searchValue.value));
});
console.log(list_tree)
</script>

<template>
  <a-input-search
    v-model:value="searchValue"
    style="margin-bottom: 8px"
    placeholder="Search"
  />
  <a-tree blockNode :tree-data="list_tree">
    <template #title="{ title }">
      <span v-if="title.indexOf(searchValue) > -1">
        {{ title.substr(0, title.indexOf(searchValue)) }}
        <span style="color: #f50">{{ searchValue }}</span>
        {{ title.substr(title.indexOf(searchValue) + searchValue.length) }}
      </span>
      <span v-else>{{ title }}</span>
    </template>
  </a-tree>
</template>

<style scoped></style>
