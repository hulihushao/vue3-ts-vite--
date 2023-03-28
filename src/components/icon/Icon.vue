<script setup lang="ts">
import { Icon } from "@/utils/ICON";
let icons=defineProps<{
    icon?:{
        type: String,
    },
    iconfont?:string
}>()
</script>

<template>
 <Icon v-if=icons.icon :icon="icons.icon" />
 <i v-else :class="'iconfont icon-'+icons.iconfont"></i>
</template>

<style scoped></style>
