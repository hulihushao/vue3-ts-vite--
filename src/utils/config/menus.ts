//导航菜单配置
export let menuList = [
  {
    key: "1",
    title: "首页",
    enKey:"home",
    component: `@/views/home/Welcome.vue`,
    path: "home",
    name: "home",
    icon: "HomeOutlined",
    meta:{
      isAuth:true
    }
  },
  {
    key: "2",
    title: "组件demo",
    enKey:"componentDemo",
    //icon: "HomeOutlined",
    iconfont: "icon-zujian",
    children: [
      {
        key: "2.1",
        title: "vue3",
        enKey:"vue3",
        //icon: "HomeOutlined",
        iconfont: "icon-vuejs-alt",
        children: [
          {
            key: "2.1.1",
            title: "测试",
            enKey:"test",
            iconfont: "icon-ceshiliucheng",
            component: "@/views/404.vue",
            path: "cs",
            name: "cs",
          },
          {
            key: "2.1.2",
            title: "WebSocket",
            enKey:"webSocket",
            //icon: "HomeOutlined",
            iconfont: "icon-Websocketjiaohujiedian",
            component: "@/views/componentdemo/WebSocket.vue",
            path: "webSocket",
            name: "webSocket",
          },
        ],
      },
    ],
  },
  {
    key: "3",
    title: "各系统集成",
    enKey:"moreSys",
    //icon: "HomeOutlined",
    iconfont: "icon-xitong",
    children: [
      {
        key: "3.1",
        title: "vue2",
        enKey:"vue2",
        iconfont: "icon-vuejs-line",
        children: [
          {
            key: "3.1.1",
            title: "测试1",
            enKey:"test1",
            iconfont: "icon-ceshiliucheng",
            component:"@/views/404.vue",
            path: "cs-1",
            name: "cs1-1",
          },
          {
            key: "3.1.2",
            title: "旅位管理平台",
            enKey:"travelSys",
            iconfont: "icon-ditu",
            component: "@/views/system/MapMarker.vue",
            path: "mapmarker",
            name: "mapmarker",
          },
        ],
      },
      {
        key: "3.2",
        title: "vue3",
        enKey:"vue3",
        iconfont: "icon-vuejs-alt",
        children:[{
            key: "3.2.1",
            title: "聊天室",
            enKey:"chatRoom",
            icon: "CommentOutlined",
            component: "@/views/system/ChatRoom.vue",
            path: "chatroom",
            name: "chatroom",
          },]
        }
    ],
  },
  {
    key: "4",
    title: "学习资料",
    enKey:"study",
    path: "study",
    name: "study",
    icon: "ReadOutlined",
    children: [
      {
        key: "4.1",
        title: "有道云笔记",
        enKey:"youdaoyun",
        component: `@/views/study/YouDaoYun.vue`,
        path: "youdaoyun",
        name: "youdaoyun",
        iconfont: "icon-youdaoyunbiji",
      },
    ],
  },
  {
    key: "0",
    title: "关于",
    enKey:"about",
    component: `@/views/home/Welcome.vue`,
    path: "about",
    name: "about",
    icon: "InfoCircleOutlined",
  },
];
