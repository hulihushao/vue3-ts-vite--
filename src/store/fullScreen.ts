import { defineStore } from "pinia";

const useFullScreen = defineStore("fullScreen", {
  state: () => {
    return {
      fullScreen:false
    };
  },
});
export default useFullScreen