<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
let loading = ref<boolean>(false);

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

const formState = reactive<FormState>({
  username: "",
  password: "",
  remember: true,
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

let login = () => {
  loading.value = true;
  router.push({ path: "/index" });
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
        :model="formState"
        name="normal_login"
        class="login-form"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label="Username"
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="formState.username">
            <template #prefix>
              <Icon icon="UserOutlined" class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          label="Password"
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
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
        <a-button
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
  background: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  .main-body {
    width: 400px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 2px 2px 10px #06c;
    .title {
      text-align: center;
      line-height: 50px;
      margin: 0;
    }
    .form-con{
      padding: 15px 10px;
    }
    .login-btn {
      width: 50%;
      margin: 15px auto;
    }
  }
}
</style>
