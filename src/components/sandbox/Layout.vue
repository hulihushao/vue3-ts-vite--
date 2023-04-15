<template>
  <div class="my-vuelive">
    <div class="my-vuelive-editor">
      <slot name="editor"></slot>
    </div>
    <div class="my-vuelive-preview">
      <slot name="preview"></slot>
    </div>
  </div>
</template>
<style>
.my-vuelive {
  border: 1px solid #000;
  border-radius: 10px;
  display:flex;
}

.my-vuelive-editor {
  margin: 8px;
  display:none;
}

.my-vuelive-preview {
  margin: 8px;
  width:100%;
}
</style>
