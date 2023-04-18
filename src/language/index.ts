import { createI18n } from "vue-i18n";
import zh from "./zh";
import en from "./en";

const i18n = createI18n({
  // 默认语言
  locale: "en",
  globalInjection: true, // 全局注入 $t 函数
  silentTranslationWarn: true, // 去掉警告
  missingWarn: false,
  silentFallbackWarn: true, //抑制警告
  legacy: false, // 修复组件引入i18n时vite脚手架报错的问题

  messages: {
    zh,
    en,
  },
});
export default i18n;
