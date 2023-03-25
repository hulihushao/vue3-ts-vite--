import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import { getRouters } from "@/utils/routers";
import { menuList} from "@/utils/config/menus";
let routerList=getRouters(menuList)
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    redirect:"home",
    component: () => import("@/views/Layout.vue"),
    children: routerList
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
  },
  // 所有不存在的路由都走404
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/Login.vue"),
  },
];
console.log(routes,111)
const router = createRouter({
  history: createWebHistory(),
  //history:createWebHashHistory(),
  routes,
});

export default router;
