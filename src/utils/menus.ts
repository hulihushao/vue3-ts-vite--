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
            title: "Option 2.1.1",
            component: "aa",
            path: "/bb",
            name: "aa",
          },
        ],
      },
    ],
  },
]