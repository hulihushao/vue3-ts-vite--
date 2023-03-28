<script setup lang="ts">
import { Icon } from "@/utils/ICON";
let icon=defineProps<{
    icon:{
        type:string,
    },
    iconfont:{
        type:string
    }
}>()
</script>

<template>
 <Icon v-if=icon.icon :icon="icon.icon" />
 <i v-else :class="'iconfont icon-'+icon.iconfont"></i>
</template>

<style scoped></style>
