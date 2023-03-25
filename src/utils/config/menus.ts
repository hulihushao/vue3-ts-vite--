//导航菜单配置
export let menuList=[
  {
    key: "1",
    title: "首页",
    component: ()=>import(`@/views/Login.vue`),
    path: "/home",
    name: "home",
  },
  {
    key: "2",
    title: "Navigation 2",
    children: [
      {
        key: "2.1",
        title: "Navigation 3",
        children: [
          {
            key: "2.1.1",
            title: "测试",
            component: ()=>import("@/views/Layout.vue"),
            path: "/cs",
            name: "cs",
          },
        ],
      },
    ],
  },
]