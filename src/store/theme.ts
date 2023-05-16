import { defineStore } from "pinia";
import isMobile from "@/utils/deviceType";
const useTheme = defineStore("theme", {
  state: () => {
    return {
      themeChecked: true,
      isDark: false,
      isZHCN:true,
      color: "#1890ff",
      bgImg:
        "https://img-blog.csdnimg.cn/8050d3a2340141a69cf586c08ea7b77b.jpg",
      isTopMenu: isMobile(),
      isShowTabs: true,
      isShowTime: true,
      isUnfoldMenusSider: false,
      isMenuOpen: false,
    };
  },
  getters: {
    //根据主题设置字体颜色
    setColor: (state) =>{
      if(state.isDark){
        return '#ffffff'
      }else{
        return '#000000'
      }
    }
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
