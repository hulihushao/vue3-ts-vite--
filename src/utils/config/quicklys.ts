import {useAllMenus} from "@/composables/useGetRoute"
let allMenus=useAllMenus()

let a=allMenus.filter(item=>item.quickly)
console.log(a)
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
  "#00BFFF"
];
export let quicks =a
