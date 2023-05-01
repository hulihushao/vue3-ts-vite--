# 本文件仅记录问题解决方案
1. env.d.ts文件解决axios.ts中import.meta.env报错问题
2. .env.development为环境变量配置
3. WebSocket在谷歌浏览器必须通过代理才可以连上
4.  旧版:   "ant-design-vue": "^3.2.17",4.x版本没有样式文件，无法自定义动态主题
5. github token 不能提交，否则会失效
6. .env.local文件任何情况下都会加载，用于保存github token
7. 打包时去除vue-tsc --noEmit && ，避免ts报错
8. 打包时路由使用hash路由，否则会打不开页面，vite.config.ts中的base为./
9. history路由时这样配置createWebHistory("/vue3-ts-vite--")，同时base为"/vue3-ts-vite--/",但此时刷新页面会404
