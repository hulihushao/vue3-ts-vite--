<script lang="ts" setup>
import { ref } from "vue";

const time = ref("");
const date = ref("");
let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
let timerID = setInterval(updateTime, 1000);
updateTime();

function updateTime() {
  let cd = new Date();
  time.value =
    zeroPadding(cd.getHours(), 2) +
    ":" +
    zeroPadding(cd.getMinutes(), 2) +
    ":" +
    zeroPadding(cd.getSeconds(), 2);
  date.value =
    zeroPadding(cd.getFullYear(), 4) +
    "-" +
    zeroPadding(cd.getMonth() + 1, 2) +
    "-" +
    zeroPadding(cd.getDate(), 2) +
    " " +
    week[cd.getDay()];

}

function zeroPadding(num, digit) {
  var zero = "";
  for (let i = 0; i < digit; i++) {
    zero += "0";
  }
  return (zero + num).slice(-digit);
}
</script>

<template>
  <div id="clock-con">
    <p>{{date}}</p>
    <p>{{time}}</p>
  </div>
</template>

<style scoped lang="less">
#clock-con {
  height: 50px;
  display: flex;
  flex-direction: column;
  
  p {
    width:100%;
    height:50%;
    line-height:25px;
    display:inline-block;
    margin:0;
    padding:0;
    text-align:center;
  }
}
</style>
