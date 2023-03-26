import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import { getRouters } from "@/utils/routers";
import { menuList } from "@/utils/config/menus";
let routerList = getRouters(menuList);
const routes: Array<RouteRecordRaw> = [
  {
    path: "/index",
    name: "index",
    redirect: "index/home",
    component: () => import("@/views/Layout.vue"),
    children: routerList,
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
console.log(routes, 111);
const router = createRouter({
  history: createWebHistory(),
  //history:createWebHashHistory(),
  routes,
});

import useLoading from "@/store/loading";
import { storeToRefs } from "pinia";

router.beforeEach((to, from, next) => {
  if (!to.fullPath.includes("/index")) {
    let load = useLoading();

    let { loading } = storeToRefs(load);
    loading.value = true;
  }
  next();
});
router.afterEach((to, from) => {
  //设置跳转路由后页面的标题
  //document.title = to.meta.title as string;
  let load = useLoading();
  let { loading } = storeToRefs(load);
  loading.value = false;
});
export default router;
