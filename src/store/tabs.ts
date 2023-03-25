import { defineStore } from "pinia";

const useTabsData = defineStore("tabsdata", {
  state: () => {
    return {
      tabs: [
        { title: "首页", icon: "HomeOutlined", key: "1", closable: false },
      ],
    };
  },
});
export default useTabsData;
