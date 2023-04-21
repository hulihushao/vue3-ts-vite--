<script setup lang="ts">
import Three from "@/views/componentdemo/threejs/index.vue";
import DemoTab from "@/components/common/DemoTab.vue";
</script>

<template>
  <div class="demo-con">
    <h1>Threejs demo</h1>
    <demo-tab>
      <template #demo>
        <Three />
      </template>
      <template #code>
        <code-mirror src="@/views/componentdemo/threejs/index.vue" />
      </template>
    </demo-tab>
  </div>
</template>

<style scoped></style>
