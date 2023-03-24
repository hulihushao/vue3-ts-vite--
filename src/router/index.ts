import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import type { RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
    {
      path: "/index",
      name: "index",
      component: () => import("@/views/Layout.vue"),
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
  ]
const router = createRouter({
  history: createWebHistory(),
  //history:createWebHashHistory(),
  routes,
});

export default router;
