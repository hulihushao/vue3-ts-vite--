import { createI18n } from "vue-i18n";
import zh from "./zh";
import en from "./en";

const i18n = createI18n({
  // 默认语言
  locale: "zh",
  messages: {
    zh,
    en,
  },
});
export default i18n;
