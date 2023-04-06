import { ConfigProvider } from "ant-design-vue";
export function useSetTheme(color){
    ConfigProvider.config({

    theme: {
      primaryColor: color,
    },
  });
}