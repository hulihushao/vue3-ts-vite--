<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const props=defineProps<{
  show:boolean
}>()
let msgBox = ref();
let scrollMsg = ref();
let msg = ref("系统持续完善中...");
let timer: any;
//横向播放通知公告
function handleScrollMsg() {
  let speed = 30; //字体的整体滚动速度
  let box = msgBox.value;
  let msgDiv = scrollMsg.value;

  let scroll = () => {
    if (msgDiv.offsetLeft <= -msgDiv.offsetWidth) {
      msgDiv.style.left = box.offsetWidth + "px";
    } else {
      msgDiv.style.left = msgDiv.offsetLeft - 1 + "px";
    }
  };

  timer = setInterval(scroll, speed);
  //鼠标移动到通知内容上暂停
  msgDiv.onmouseover = () => {
    clearInterval(timer);
  };
  //移开继续滚动
  msgDiv.onmouseout = () => {
    timer = setInterval(scroll, speed);
  };
}
onMounted(() => {
  console.log();
  handleScrollMsg();
});

onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>

<template>
  <div id="notice" v-if="props.show">
    <Icon iconfont="icon-a-gonggaotongzhi" :color="true" />
    <div class="msg-box" ref="msgBox">
      <span class="msg" ref="scrollMsg">{{ msg }}</span>
    </div>
  </div>
</template>

<style scoped lang="less">
#notice {
  width: 100%;
  height: 23px;
  border: 1px solid #faad14;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fffbe7;
  z-index: 99;
  .msg-box {
    width: 80%;
    height: 100%;
    overflow: hidden;
    position: relative;
    margin-left: 5px;
    .msg {
      position: absolute;
      line-height: 23px;
      font-size: 14px;
      white-space: nowrap;
      transition: all 0.0001s;
    }
  }
}
</style>
