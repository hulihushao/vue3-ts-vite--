//动态使用antd图标，方式二
import { createVNode } from "vue";
import * as $Icon from "@ant-design/icons-vue";
let Icons:any=$Icon
export const Icon = (props: { icon: string }) => {
  const { icon } = props;
  return createVNode(Icons[icon]);
};
