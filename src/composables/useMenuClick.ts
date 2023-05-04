import useTabsData from "@/store/tabs";
import { menus } from "@/types/menus";
import {useAllMenus } from "@/composables/useGetRoute";

let tabsData = useTabsData();
let allMenus = useAllMenus();
//菜单点击
export const useMenuClick = (item: menus,router:any) => {
  //console.log(openKeys.value)
  if (!tabsData.tabs.some((itm: menus) => itm.key == item.key)) {
    let cur = allMenus.filter((itm) => itm.key == item.key);
    let opens = cur[0].openKeys;
    let data: menus = {
      title: item.title,
      key: item.key,
      icon: item.icon,
      closable: true,
      path: item.path,
      openKeys: opens as Array<string>,
      preList: cur[0].preList as Array<string>,
      iconfont: item.iconfont,
    };
    tabsData.tabs.push(data as any);
  }
  //设置tab的选中状态
  tabsData.setActiveKey(item.key);
  console.log(router)
  router.push({
    path: item.path,
  });
};
