// 封装到一个js文件里面，避免使用时代码累赘
import { message } from "ant-design-vue";
import { h } from "vue";
import { CloseOutlined } from "@ant-design/icons-vue";

/*
	h: 是content自带的参数，表示createElement
    	content：文本内容
        */
const createElementVNode = (
  content: string | { content: string },
  hide: any
) => {
  // 定义文本内容及样式（这里的样式延用的官方的）
  const innerText = h("span", { style: { fontSize: "14px" } }, content);
  // 自定义关闭图标
  const innerIcon = h(CloseOutlined, {
    style: {
      marginLeft: "10px",
      marginRight: "0",
      cursor: "pointer",
      fontSize: "14px",
    },
    attrs: { type: "close" },
    onClick: () => hide(),
  });
  console.log(innerIcon, innerText);
  // 合到一个 VNode 节点中
  const container = h("span", {}, [innerText, innerIcon]);
  // 最终返回
  return container;
};
// 由于 message 有多种状态，这里需要额外处理
const dtMessage = { error: {}, success: {}, info: {}, warning: {}, warn: {} };
// 给 dtMessage 循环赋值不同类型的 message函数
["error", "success", "info", "warning", "warn"].forEach((type) => {
  dtMessage[type] = (
    content: string | { content: string },
    duration: number,
    onClose: () => void
  ) => {
    let hide: any;
    // 处理 message[type](config) 参数为对象类型
    if (typeof content === "object") {
      hide = message[type]({
        ...content,
        content: () => createElementVNode(content?.content, hide),
      });
      return hide;
    }
    hide = message[type](
      () => createElementVNode(content, hide),
      duration,
      onClose
    );
    return hide;
  };
});

export default dtMessage;
