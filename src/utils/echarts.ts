export function echartsInit(echarts:any, themeObj:{setColor:string}) {
  var dom = document.getElementById("echarts-container");
  var myChart = echarts.init(dom);
  var option;
  // prettier-ignore
  let dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放']; // prettier-ignore
  let data = [
    220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133,
    334, 198, 123, 125, 220,
  ];
  let yMax = 500;
  let dataShadow = [];
  for (let i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
  }
  option = {
    animation: true,
    animationEasing: "cubicInOut",
    animationDuration:1000 ,
    title: {
      text: "特性示例：渐变色 阴影 点击缩放",
      subtext: "图表示例",
      textStyle: {
        color: themeObj.setColor,
      },
      subtextStyle:{
        color:"#888"
      }
    },
    xAxis: {
      data: dataAxis,
      axisLabel: { inside: false, color: themeObj.setColor },
      axisTick: { show: false },
      axisLine: { show: false },
      z: 10,
    },
    yAxis: {
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: "#888" },
    },
    grid:[{
      show: false,
      z: 0,
      left: "7%",
      top: "10%",
      right: "3%",
      bottom: "10%",
      containLabel: false,
      backgroundColor: "rgba(0,0,0,0)",
      borderWidth: 1,
      borderColor: "#ccc",
    }],
    dataZoom: [{ type: "inside" }],
    series: [
      {
        type: "bar",
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#83bff6" },
            { offset: 0.5, color: "#188df0" },
            { offset: 1, color: "#188df0" },
          ]),
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#2378f7" },
              { offset: 0.7, color: "#2378f7" },
              { offset: 1, color: "#83bff6" },
            ]),
          },
        },
        data: data,
      },
    ],
  }; // Enable data zoom when user click bar.
  const zoomSize = 6;
  myChart.on("click", function (params:any) {
    console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
    myChart.dispatchAction({
      type: "dataZoom",
      startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
      endValue:
        dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)],
    });
  });
  if (option && typeof option === "object") {
//      myChart.setOption(option);
  }

  window.addEventListener("resize", myChart.resize);
  return {myChart,option}
}
