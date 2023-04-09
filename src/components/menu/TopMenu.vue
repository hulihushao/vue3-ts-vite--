<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import Menu from "@/components/menu/Menu.vue";
import useLayout from "../../store/layout";
import useTabsData from "@/store/tabs";
import useTheme from "@/store/theme";
</script>

<template>
  <Menu theme="light" mode="horizontal" :style="{border:'1px solid red',width:'40vw'}"/>
</template>

<style scoped></style>
