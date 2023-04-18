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

import { useI18n } from "vue-i18n";
export function useSetLanguage(isZh: boolean) {
  const { locale } = useI18n();
  locale.value = isZh ? "zh" : "en";
}
