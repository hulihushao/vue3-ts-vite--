<script setup lang="ts">
import { Codemirror } from "vue-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { vue } from "@codemirror/lang-vue";
import { oneDark } from "@codemirror/theme-one-dark";
import { basicSetup } from 'codemirror'
import { ref } from "vue";
const code = ref(`console.log('Hello, world!')
<template>
  <div class="sass">I'm a {{mustache-like}} template</div>
  </template>
  <style lang="sass">
        .sass
          font-size: 18px
  </style>
`);
const extensions = [vue(),basicSetup, oneDark];
let log = console.log;
</script>

<template>
  <codemirror
    v-model="code"
    placeholder="Code gose here..."
    :style="{ height: '400px',width:'60%' }"
    :autofocus="true"
    :indent-with-tab="true"
    disabled
    :tabSize="2"
    :extensions="extensions"
    @ready="log('ready', $event)"
    @change="log('change', $event)"
    @focus="log('focus', $event)"
    @blur="log('blur', $event)"
  />
</template>

<style scoped></style>
