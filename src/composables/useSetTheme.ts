import { ConfigProvider } from "ant-design-vue";
import useTheme from "@/store/theme";
export function useSetTheme(color: string) {
  ConfigProvider.config({
    prefixCls: useTheme().isDark ? "custom-dark" : "ant",
    theme: {
      primaryColor: color,
    },
  });
}

//设置语言
import { useI18n } from "vue-i18n";
interface local{
  value:string,
  [propNames: string]:any
}
export function useSetLanguage(isZh: boolean, locale?:local) {
  if (locale) {
    locale.value = isZh ? "zh" : "en";
    return;
  }
  l1(isZh);
}
function l1(isZh: boolean) {
  useI18n().locale.value = isZh ? "zh" : "en";
}
