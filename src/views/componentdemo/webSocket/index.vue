<script setup lang="ts">
import { ref } from "vue";
let textarea = ref<string>("");
let inputValue = ref("Q");
let link = ref("");
let socket = null;
//WebSocket
let resetLink = () => {
  link.value = "正在重置...";
  if (socket) {
    socket.close();
    socket = null;
  } else {
    link.value = "正在连接...";
  }

  if (typeof WebSocket === "undefined") {
    link.value="您的浏览器不支持WebSocket";
    return
  }

  socket = new WebSocket("wss://localhost:5173/ws");

  socket.addEventListener("open", function () {
    link.value = "连接服务器成功";
  });
  socket.addEventListener("message", function (e: any) {
    textarea.value = e.data;
  });
  socket.onerror = (error: any) => {
    link.value = error.data;
  };
  socket.onclose = () => {
    link.value = "连接已关闭";
  };
};
resetLink();
let send = () => {
  socket.send(inputValue.value);
};
</script>
<template>
  <div class="webSocket">
    <a-input class="Input" v-model:value="inputValue" />
    <div>
      <a-button class="btn" type="primary" @click="send">发送</a-button>
      <a-button class="btn" type="primary" @click="resetLink"
        >重置连接</a-button
      >
    </div>
    <div>{{ link }}</div>
    <span v-html="textarea"></span>
  </div>
</template>

<style scoped lang="less">
.webSocket {
  width: 100%;
  height: 100% !important;
  display: flex;
  flex-direction: column;
  align-items: center;

  .btn {
    margin: 10px;
  }
  .Input {
    width: 40%;
  }
}
</style>
