<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
let loading=ref<boolean>(false)
let login = () => {
    loading.value=true
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
      biaodan
      <div class="login-btn">
        <a-button :loading="loading" shape="round" block type="primary" @click="login"
          >登录</a-button
        >
      </div>
    </main>
  </div>
</template>

<style scoped lang="less">
#login {
  position:relative;
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
    .login-btn {
      width: 50%;
      margin: 15px auto;
    }
  }
}
</style>
