import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import { message } from "ant-design-vue";
import type { RouteRecordRaw } from "vue-router";
import { getRouters } from "@/utils/routers";
import { menuList } from "@/utils/config/menus";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; //引入样式
import {menus} from "@/types/menus"
//全局进度条的配置
NProgress.configure({
  easing: "ease", // 动画方式
  speed: 1000, // 递增进度条的速度
  showSpinner: true, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3, // 初始化时的最小百分比
});

let routerList = getRouters(menuList as menus[]);

const routes = [
  {
    path: "/",
    redirect: "/index",
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
    component: () => import("../views/error/404.vue"),
  },
  {
    path: "/index",
    name: "index",
    redirect: "index/home",
    component: () => import("@/views/Layout.vue"),
    children: [
      ...routerList,
      {
        path: "personCenter",
        name: "personCenter",
        component: () => import("@/views/user-center/index.vue"),
      },
    ],
  },
  
];
console.log(routes, 111);
const router = createRouter({
  //history: createWebHistory("/vue3-ts-vite--"),
  history:createWebHashHistory(),
  routes:routes as Array<RouteRecordRaw>,
});

import useLoading from "@/store/loading";
import { storeToRefs } from "pinia";
//前置守卫
router.beforeEach((to, from, next) => {
  if (!to.fullPath.includes("/index")) {
    let load = useLoading();

    let { loading } = storeToRefs(load);
    loading.value = true;
  } else {
    NProgress.start();
  }
//登录
  if (to.meta.isAuth) {
    let user = localStorage.getItem("userInfo");
    if (!user) {
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  }
});
//后置守卫
router.afterEach((to, from) => {
  //设置message提示
  if (from.fullPath.includes("login"))
    message.success({ content: "初始化完成！", key: "chushihua" });
  //设置跳转路由后页面的标题
  if (to.meta.title) document.title = to.meta.title as string;
  let load = useLoading();
  let { loading } = storeToRefs(load);
  loading.value = false;
  NProgress.done();
});

export default router;
