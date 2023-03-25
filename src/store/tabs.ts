import { defineStore } from "pinia";

const useTabsData = defineStore("tabsdata", {
  state: () => {
    return {
      tabs: [
        { title: "首页", icon: "HomeOutlined", key: "1", closable: false },
      ],
      activeKey:"1",
    };
  },
  actions:{
    setActiveKey(value:string|number){
      this.activeKey=value
    }
  }
});
export default useTabsData;
