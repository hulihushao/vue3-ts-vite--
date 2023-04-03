<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { useRouter } from "vue-router";
import type { FormInstance } from "ant-design-vue";
import { message } from "ant-design-vue";
const router = useRouter();
let loading = ref<boolean>(false);

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

const formState = reactive<FormState>({
  username: "admin",
  password: "admin",
  remember: true,
});
const formRef = ref<FormInstance>();

const rules = reactive({
  username: [
    {
      required: true,
      message: "请输入用户名",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
    },
  ],
});
const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
const disabled = computed(() => {
  return !(formState.username && formState.password);
});
let login = async () => {
  try {
    const values = await formRef.value.validateFields();
    loading.value = true;

    message.loading({
      content: "登录成功，正在初始化...",
      key: "chushihua",
      duration: 0,
    });
    console.log("Success:", values);

    router.push({ path: "/index" });
  } catch (errorInfo) {
    console.log("Failed:", errorInfo);
  }
};
</script>

<template>
  <div id="login">
    <main class="main-body">
      <h2 class="title">中后台管理系统</h2>
      <div
        style="
          margin: 0px;
          width: 100%;
          height: 1px;
          background: #ccc;
          padding: 0;
        "
      />
      <div class="form-con">
        <a-form
          hideRequiredMark
          layout="vertical"
          ref="formRef"
          :model="formState"
          :rules="rules"
          name="normal_login"
          class="login-form"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
        >
          <a-form-item label="用户名" name="username">
            <a-input v-model:value="formState.username">
              <template #prefix>
                <Icon icon="UserOutlined" class="site-form-item-icon" />
              </template>
            </a-input>
          </a-form-item>

          <a-form-item label="密码" name="password">
            <a-input-password v-model:value="formState.password">
              <template #prefix>
                <Icon icon="LockOutlined" class="site-form-item-icon" />
              </template>
            </a-input-password>
          </a-form-item>

          <a-form-item>
            <a-form-item name="remember" no-style>
              <a-checkbox v-model:checked="formState.remember"
                >Remember me</a-checkbox
              >
            </a-form-item>
            <a class="login-form-forgot" href="">Forgot password</a>
          </a-form-item>
        </a-form>
      </div>
      <div class="login-btn">
        <a-button ghost
          :disabled="disabled"
          :loading="loading"
          shape="round"
          block
          type="primary"
          @click="login"
          >登录</a-button
        >
      </div>
    </main>
  </div>
</template>

<style scoped lang="less">
#login {
  position: relative;
  height: 100%;
  width: 100%;
  background: url("http://pic1.win4000.com/wallpaper/2/51397470cbba5.jpg")
    center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  .main-body {
    width: 400px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 2px 2px 10px #06c;
    backdrop-filter: blur(15px);
    background: rgba(255, 255, 255, 0.5);
    .title {
      text-align: center;
      line-height: 50px;
      margin: 0;
    }
    .form-con {
      padding: 20px;
      padding-bottom: 0;
    }
    .login-btn {
      width: 50%;
      margin: 15px auto;
    }
  }
}
</style>
<style>
#login .ant-input-affix-wrapper,
.ant-input {
  background-color: rgba(255, 255, 255, 0) !important;
}
</style>
