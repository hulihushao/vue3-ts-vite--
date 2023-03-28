//导航菜单配置
export let menuList = [
  {
    key: "1",
    title: "首页",
    component: () => import(`@/views/Login.vue`),
    path: "home",
    name: "home",
    icon: "HomeOutlined",
  },
  {
    key: "2",
    title: "Navigation 2",
    icon: "HomeOutlined",
    children: [
      {
        key: "2.1",
        title: "Navigation 3",
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
        ],
      },
    ],
  },
];
