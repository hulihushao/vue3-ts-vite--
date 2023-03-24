import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from "./router";
import { createPinia } from 'pinia'

createApp(App).use(router).use(Antd).use(createPinia()).mount('#app')
