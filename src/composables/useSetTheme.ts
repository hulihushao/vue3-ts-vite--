import { ConfigProvider } from "ant-design-vue";
import useTheme from "@/store/theme"
export function useSetTheme(color: string) {
  ConfigProvider.config({
    prefixCls: useTheme().isDark?'custom-dark':'ant',
    theme: {
      primaryColor: color,
    },
  });
};