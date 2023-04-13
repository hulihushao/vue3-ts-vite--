<script setup lang="ts">
import { Codemirror } from "vue-codemirror";
import { vue } from "@codemirror/lang-vue";
import { oneDark } from "@codemirror/theme-one-dark";
import { basicSetup } from "codemirror";
import { ref, shallowRef } from "vue";
const code = ref(`console.log('Hello, world!')
<template>
  <div class="sass">I'm a {{mustache-like}} template</div>
  </template>
  <style lang="sass">
        .sass
          font-size: 18px
  </style>
`);
const extensions = [vue(), basicSetup, oneDark];
let log = console.log;
const view = shallowRef();
const handleReady = (payload) => {
  view.value = payload.view;
  log(view.value);
};
</script>

<template>
  <codemirror
    v-model="code"
    placeholder="Code gose here..."
    :style="{ height: '400px', width: '100%' }"
    :autofocus="true"
    :indent-with-tab="true"
    disabled
    :tabSize="2"
    :extensions="extensions"
    @ready="handleReady"
    @change="log('change', $event)"
    @focus="log('focus', $event)"
    @blur="log('blur', code)"
  />
</template>

<style scoped></style>
