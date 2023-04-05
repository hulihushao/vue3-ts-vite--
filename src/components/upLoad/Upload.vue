<script setup lang="ts"></script>

<template>
  <a-upload
    v-model:file-list="fileList"
    name="avatar"
    list-type="picture-card"
    class="avatar-uploader"
    :show-upload-list="false"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    :before-upload="beforeUpload"
    @change="handleChange"
  >
    <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
    <div v-else>
      <Icon icon="LoadingOutlined" v-if="loading" />
      <Icon icon="PlusOutlined" v-else />
      <div class="ant-upload-text">Upload</div>
    </div>
  </a-upload>
</template>

<style scoped></style>
