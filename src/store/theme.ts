import { defineStore } from "pinia";
import isMobile from "@/utils/deviceType"
const useTheme = defineStore("theme", {
  state: () => {
    return {
      themeChecked:true,
      isDark:false,
      color: "#1890ff",
      bgImg: "https://img.mp.itc.cn/upload/20161119/1a99a2d9eab34a588f05aaad00ad9883_th.jpg",
      isTopMenu:isMobile(),
      isShowTabs:true,
      isShowTime:true,
      isUnfoldMenusSider:false,
      isMenuOpen:false,
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
