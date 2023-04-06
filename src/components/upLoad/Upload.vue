<script setup lang="ts">
import { message } from "ant-design-vue";
import { ConfigProvider } from 'ant-design-vue';
import { defineComponent, ref } from "vue";
import type { UploadChangeParam, UploadProps } from "ant-design-vue";

const fileList = ref([]);
const loading = ref<boolean>(false);
const imageUrl = ref<string>("");

const handleChange = (info: UploadChangeParam) => {
  if (info.file.status === "uploading") {
    loading.value = true;
    getBase64(info.file.originFileObj, (base64Url: string) => {
      imageUrl.value = base64Url;
      loading.value = false;
    });
    return;
  }
  if (info.file.status === "done") {
    // Get this url from response in real world.
    getBase64(info.file.originFileObj, (base64Url: string) => {
      imageUrl.value = base64Url;
      loading.value = false;
    });
  }
  if (info.file.status === "error") {
    loading.value = false;
    message.error("upload error");
  }
};

const beforeUpload = (file: UploadProps["fileList"][number]) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 12;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};
</script>

<template>
  <a-upload
    v-model:file-list="fileList"
    name="avatar"
    list-type="picture-card"
    accept="image/apng,image/bmp,image/gif,image/jpeg,image/pjpeg,image/png"
    class="avatar-uploader"
    :show-upload-list="false"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    :before-upload="beforeUpload"
    @change="handleChange"
  >
    <img class="imgPreview" v-if="imageUrl" :src="imageUrl" alt="avatar" />
    <div v-else>
      <Icon icon="LoadingOutlined" v-if="loading" />
      <Icon icon="PlusOutlined" v-else />
      <div class="ant-upload-text">Upload</div>
    </div>
  </a-upload>
</template>

<style scoped lang="less">
.avatar-uploader {
  .imgPreview {
    width: 100%;
    max-height:100%;
  }
}
.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
