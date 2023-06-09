import { defineStore } from "pinia";

const useTabsData = defineStore("tabsdata",{
  state: () => {
    return {
      tabs: [
        {
          title: "首页",
          icon: "HomeOutlined",
          key: "1",
          closable: false,
          path: "home",
          openKeys:[],
          preList:[],
          iconfont:"" as string|undefined,
        },
      ],
      activeKey: "1",
    };
  },
  actions: {
    setActiveKey(value: string | number) {
      this.activeKey = value as string;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
        //paths: ["tabs"], //指定要长久化的字段
      },
    ],
  }
});
export default useTabsData;
