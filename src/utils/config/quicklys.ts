import { useAllMenus } from "@/composables/useGetRoute";
import {userCenter} from "./other-menu"
import {menus} from "@/types/menus"
let allMenus = useAllMenus();

let a = allMenus.filter((item) => item.quickly);
let b=userCenter
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
export let quicks:Array<menus> = [b,...a.splice(0, 7)];

//概览数据
let demos=import.meta.glob('@/views/componentdemo/*/index.vue')
let systems=import.meta.glob('@/views/system/*.vue')
let uis=import.meta.glob('@/views/study/uiComponentLib/*.vue')
//console.log(demos,systems,uis)
export let overviews = [
  {
    name: "组件demo",
    counter: Object.keys(demos).length,
  },
  {
    name: "系统",
    counter: Object.keys(systems).length,
  },
  {
    name: "组件库",
    counter: Object.keys(uis).length,
  },
];
