<script setup lang="ts">
import { message } from "ant-design-vue";
import { ref } from "vue";
import type { UploadChangeParam, UploadProps } from "ant-design-vue";
function getBase64(img: File | Blob, callback: (base64Url: string) => void) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);

}

let emits = defineEmits<{
  (e: "saveImg", base64Url: string): void
}>()
const fileList = ref([]);
const loading = ref<boolean>(false);
const imageUrl = ref<string>("");

const handleChange = (info: UploadChangeParam) => {
  return
  if (info.file.status === "uploading") {
    loading.value = true;
    getBase64(info.file.originFileObj as File, (base64Url: string) => {
      imageUrl.value = base64Url;
      loading.value = false;
    });
    return;
  }
  if (info.file.status === "done") {
    // Get this url from response in real world.
    getBase64(info.file.originFileObj as File, (base64Url: string) => {
      imageUrl.value = base64Url;
      loading.value = false;
    });
  }
  if (info.file.status === "error") {
    loading.value = false;
    message.error("upload error");
  }
};

const beforeUpload = (file: File): boolean => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("仅支持上传静态图片!");
  }
  const isLt2M = file.size / 1024 / 1024 < 5;
  if (!isLt2M) {
    message.error("上传图片不能大于5M");
  }
  if (isJpgOrPng && isLt2M) {
    console.log(file);
    getBase64(file, (base64Url: string) => {
      imageUrl.value = base64Url;
      loading.value = false;

      emits("saveImg", base64Url);
    });

  }
  return isJpgOrPng && isLt2M;
};

</script>

<template>
  <a-upload v-model:file-list="fileList" name="avatar" list-type="picture-card"
    accept="image/apng,image/bmp,image/gif,image/jpeg,image/pjpeg,image/png" class="avatar-uploader"
    :show-upload-list="false" action="" :before-upload="beforeUpload" @change="handleChange">
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
    max-height: 100%;
  }
}

.avatar-uploader>.ant-upload,
.avatar-uploader>.custom-dark-upload {
  width: 128px;
  height: 128px;
}

.ant-upload-select-picture-card i,
.custom-dark-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text,
.custom-dark-upload-select-picture-card .custom-dark-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
