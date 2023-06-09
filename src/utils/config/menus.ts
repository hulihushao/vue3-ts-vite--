//导航菜单配置
export let menuList = [
  {
    key: "1",
    title: "首页",
    enKey: "home",
    component: `@/views/home/Home.vue`,
    path: "home",
    name: "home",
    icon: "HomeOutlined",
    meta: {
      isAuth: true,
    },
  },
  {
    key: "2",
    title: "组件demo",
    enKey: "componentDemo",
    //icon: "HomeOutlined",
    iconfont: "icon-zujian",
    children: [
      {
        key: "2.1",
        title: "vue3",
        enKey: "vue3",
        //icon: "HomeOutlined",
        iconfont: "icon-vuejs-alt",
        children: [
          {
            key: "2.1.1",
            title: "Threejs",
            enKey: "threejs",
            iconfont: "icon-ceshiliucheng",
            component: "@/views/componentdemo/Threejs.vue",
            path: "threejs",
            name: "threejs",
            quickly: true,
          },
          {
            key: "2.1.2",
            title: "WebSocket",
            enKey: "webSocket",
            //icon: "HomeOutlined",
            iconfont: "icon-Websocketjiaohujiedian",
            component: "@/views/componentdemo/WebSocket.vue",
            path: "webSocket",
            name: "webSocket",
            quickly: true,
          },
          {
            key: "2.1.3",
            title: "Cesium",
            enKey: "Cesium",
            //icon: "HomeOutlined",
            iconfont: "icon-icon-tianqueCesium",
            component: "@/views/componentdemo/Cesium.vue",
            path: "cesium",
            name: "cesium",
          },
          {
            key: "2.1.4",
            title: "openLayers",
            enKey: "openLayers",
            //icon: "HomeOutlined",
            iconfont: "icon-erweiditu",
            component: "@/views/componentdemo/Openlayer.vue",
            path: "ol",
            name: "ol",
          },
        ],
      },
    ],
  },
  {
    key: "3",
    title: "各系统集成",
    enKey: "moreSys",
    //icon: "HomeOutlined",
    iconfont: "icon-xitong",
    children: [
      {
        key: "3.1",
        title: "vue2",
        enKey: "vue2",
        iconfont: "icon-vuejs-line",
        children: [
          {
            key: "3.1.1",
            title: "测试1",
            enKey: "test1",
            iconfont: "icon-ceshiliucheng",
            component: "@/views/404.vue",
            path: "cs-1",
            name: "cs1-1",
          },
          {
            key: "3.1.2",
            title: "旅位管理平台",
            enKey: "travelSys",
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
        enKey: "vue3",
        iconfont: "icon-vuejs-alt",
        children: [
          {
            key: "3.2.1",
            title: "聊天室",
            enKey: "chatRoom",
            icon: "CommentOutlined",
            component: "@/views/system/ChatRoom.vue",
            path: "chatroom",
            name: "chatroom",
            quickly: true,
          },
        ],
      },
    ],
  },
  {
    key: "4",
    title: "学习资料",
    enKey: "study",
    path: "study",
    name: "study",
    icon: "ReadOutlined",
    children: [
      {
        key: "4.1",
        title: "有道云笔记",
        enKey: "youdaoyun",
        component: `@/views/study/YouDaoYun.vue`,
        path: "youdaoyun",
        name: "youdaoyun",
        iconfont: "icon-youdaoyunbiji",
      },
      {
        key: "4.2",
        title: "组件库",
        enKey: "UIComponentLib",
        name: "UIComponentLib",
        iconfont: "icon-cangku",
        children: [
          {
            key: "4.2.1",
            title: "ve-plus-vue3",
            enKey: "veplus",
            component: `@/views/study/uiComponentLib/VePlus.vue`,
            path: "veplus",
            name: "veplus",
            iconfont: undefined,
          },
          {
            key: "4.2.2",
            title: "Element UI",
            enKey: "elementui",
            component: `@/views/study/uiComponentLib/ElementUI.vue`,
            path: "elementui",
            name: "elementui",
            iconfont: "icon-suyuan",
            quickly: true,
          },
        ],
      },
      {
        key: "4.3",
        title: "md文档",
        enKey: "Md",
        name: "Md",
        iconfont: "icon-markdown",
        component: `@/views/study/Md.vue`,
        path:"md",
        quickly:true
      },
    ],
  },
  {
    key: "0",
    title: "关于",
    enKey: "about",
    component: `@/views/home/Welcome.vue`,
    path: "about",
    name: "about",
    icon: "InfoCircleOutlined",
  },
];
