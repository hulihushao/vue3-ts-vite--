//导航菜单配置
export let menuList = [
  {
    key: "1",
    title: "首页",
    component: () => import(`@/views/home/Welcome.vue`),
    path: "home",
    name: "home",
    icon: "HomeOutlined",
  },
  {
    key: "2",
    title: "组件demo",
    icon: "HomeOutlined",
    children: [
      {
        key: "2.1",
        title: "vue3",
        icon: "HomeOutlined",
        children: [
          {
            key: "2.1.1",
            title: "测试",
            icon: "HomeOutlined",
            component: () => import("@/views/Layout.vue"),
            path: "cs",
            name: "cs",
          },
          {
            key: "2.1.2",
            title: "WebSocket",
            icon: "HomeOutlined",
            component: () => import("@/views/Layout.vue"),
            path: "webSocket",
            name: "webSocket",
          },
        ],
      },
    ],
  },
  {

    key: "3",
    title: "页面demo",
    icon: "HomeOutlined",
    children: [
      {
        key: "3.1",
        title: "vue3",
        icon: "HomeOutlined",
        children: [
          {
            key: "3.1.1",
            title: "测试",
            icon: "HomeOutlined",
            component: () => import("@/views/Layout.vue"),
            path: "cs",
            name: "cs",
          },
          {
            key: "3.1.2",
            title: "WebSocket",
            icon: "HomeOutlined",
            component: () => import("@/views/Layout.vue"),
            path: "webSocket",
            name: "webSocket",
          },
        ],
      },
    ],
  },
  {
    key: "0",
    title: "关于",
    component: () => import(`@/views/home/Welcome.vue`),
    path: "home",
    name: "home",
    icon: "InfoCircleOutlined",
  },
];
