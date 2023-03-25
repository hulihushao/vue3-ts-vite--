import { defineStore } from "pinia";

const useLoading = defineStore("setloading", {
  state: () => {
    return {
      loading:false
    };
  },
});
export default useLoading