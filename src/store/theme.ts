import { defineStore } from "pinia";

const useTheme = defineStore("theme", {
  state: () => {
    return {
      defaultColor: "#1890ff",
      color: "#1890ff",
      bgImg: "",
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
