import { defineStore } from "pinia";

const useLayout = defineStore("storeId", {
  // 推荐使用 完整类型推断的箭头函数
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      collapsed:false
    };
  },
});
export default useLayout