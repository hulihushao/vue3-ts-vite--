<script setup lang="ts"></script>

<template>
  <a-layout>
      <slot name="aside"></slot>
    <a-layout>
        <header>
            <slot name="header"></slot>
        </header>
            <slot name="main"></slot>
        <footer>
            <slot name="footer">
            </slot>
        </footer>
    </a-layout>
  </a-layout>
</template>

<style scoped></style>
