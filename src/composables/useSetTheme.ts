import { ConfigProvider } from "ant-design-vue";
export function useSetTheme(color: string) {
  ConfigProvider.config({
    prefixCls: "ant",
    theme: {
      primaryColor: color,
    },
  });
}
