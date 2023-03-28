import { createPinia } from "pinia";
import piniaPluginPersist from 'pinia-plugin-persist'

const store = createPinia();
// 状态持久化-插件配置
store.use(piniaPluginPersist);

export default store