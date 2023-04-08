import { defineStore } from "pinia";

const useTheme = defineStore("theme", {
  state: () => {
    return {
      defaultColor: "#1890ff",
      color: "#1890ff",
      bgImg: "https://img.mp.itc.cn/upload/20161119/1a99a2d9eab34a588f05aaad00ad9883_th.jpg",
      isTopMenu:false,
      isShowTime:true,
      isUnfoldMenusSider:true,
    };
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
      },
    ],
  },
});
export default useTheme;
