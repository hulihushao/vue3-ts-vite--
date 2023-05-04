<script lang="ts" setup>
import { ref, reactive } from "vue";
import useTheme from "@/store/theme";
import isMobile from "@/utils/deviceType";

const themeObj = useTheme();
const formData = reactive({
  url: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
  mail: "shuxiangxuebiancheng@test.com",
  username: "书香学编程",
  userInfo: "软件开发者，编程爱好者",
  country: "China",
  province: "shandong",
  city: "jinan",
  address: "山东省济南市历下区趵突泉南路1号",
  phoneSuff: "0531",
  phoneNum: "88812345",
});
</script>
<template>
  <div id="user-center">
    <!-- 标头 -->
    <div class="settingsStyleTitle">基本设置</div>
    <!-- 用户内容 -->
    <div class="avatar" :style="{ display: isMobile() ? '' : 'flex' }">
      <div class="userImageStyle" :style="{ margin: isMobile() ? 'auto' : '' }">
        <div class="userImageSpan">用户头像</div>
        <div style="height: 160px; margin-bottom: 12px">
          <a-image
            style="width: 160px; height: 160px; border-radius: 8px"
            :src="formData.url"
            fit="fill"
          ></a-image>
        </div>
        <a-upload action="" style="line-height: 34px; height: 34px">
          <a-button
            ><template #icon>
              <Icon icon="CloudUploadOutlined" /> </template
            >更换头像</a-button
          >
        </a-upload>
      </div>
      <!-- 用户设置表单 -->
      <a-form
        :style="{ margin: isMobile() ? 'auto' : '' }"
        class="userSettingForm"
        :model="formData"
        label-width="80px"
      >
        <a-form-item label="邮箱">
          <a-input v-model:value="formData.mail"></a-input>
        </a-form-item>
        <a-form-item label="昵称">
          <a-input v-model:value="formData.username"></a-input>
        </a-form-item>
        <a-form-item label="个人简介">
          <a-input
            v-model:value="formData.userInfo"
            type="textarea"
            :rows="2"
          ></a-input>
        </a-form-item>
        <a-form-item label="国家/地区">
          <a-select
            v-model:value="formData.country"
            :options="country"
            placeholder="请选择"
          >
          </a-select>
        </a-form-item>
        <a-form-item label="所在省市" class="proviceStyle">
          <a-select
            v-model:value="formData.province"
            style="margin-right: 16px"
            :options="province"
          >
          </a-select>
          <a-select v-model:value="formData.city" :options="city"> </a-select>
        </a-form-item>
        <a-form-item label="街道地址"
          ><a-input v-model:value="formData.address"></a-input>
        </a-form-item>
        <a-form-item label="联系电话" class="proviceStyle">
          <a-input
            v-model:value="formData.phoneSuff"
            style="width: 100px; margin-right: 16px"
          ></a-input>
          <a-input v-model:value="formData.phoneNum"></a-input>
        </a-form-item>
        <a-form-item>
          <a-button>
            <template #icon>
                    <Icon icon='CheckOutlined' />
                        </template>
            提交</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      country: [
        {
          value: "China",
          label: "中国",
        },
      ],
      province: [
        {
          value: "shandong",
          label: "山东省",
        },
      ],
      city: [
        {
          value: "jinan",
          label: "济南市",
        },
        {
          value: "qingdao",
          label: "青岛市",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
#user-center {
  color: v-bind("themeObj.setColor");
  .avatar {
    justify-content: space-between;
  }
}
.settingsStyleTitle {
  margin-bottom: 12px;
  font-weight: 540;
  font-size: 20px;
  line-height: 28px;
  text-align: left;
}
.userSettingForm {
  text-align: left;
  margin-left: 10px;
  border: 1px solid #ebeef5;
  padding: 16px;
  border-radius: 8px;
  width: 100%;
  .el-form-item {
    line-height: 50px;
    max-width: 460px;
  }
}
.userImageStyle {
  width: 300px;
  text-align: center;
  border: 1px solid #ebeef5;
  padding: 16px;
  border-radius: 8px;
}
:deep(.proviceStyle .el-form-item__content) {
  display: flex;
}
.userImageSpan {
  line-height: 32px;
  margin-bottom: 12px;
  font-weight: 500;
}
</style>
