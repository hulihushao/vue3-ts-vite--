import { useAllMenus } from "@/composables/useGetRoute";
let allMenus = useAllMenus();

let a = allMenus.filter((item) => item.quickly);
console.log(a);
export let bgColors = [
  "#FFE1D3",
  "#D2ECFF",
  "#E8D8F9",
  "#FFF3D1",
  "#FFDAEC",
  "#CEF4F2",
  "#D8BFD8",
  "#ADD8E6",
];
export let colors = [
  "#FF9C6E",
  "#69C0FF",
  "#B37FEB",
  "#FFD666",
  "#FF85C0",
  "#79E1DB",
  "#FF00FF",
  "#00BFFF",
];
//快捷方式，最多支持8个
export let quicks = a.splice(0, 8);

//概览数据
export let overviews = [
  {
    name: "组件demo",
    counter: 6,
  },
  {
    name: "系统",
    counter: 4,
  },
  {
    name: "组件库",
    counter: 6,
  },
];
