import { menuList } from "@/utils/config/menus";
export function useGetRoute() {
  let path = location.pathname;
  return path;
}
export function useAllMenus() {
  let allMenus = [];
  //获取指定子菜单的所有父级
  function getParentMenus(menuArray, menuName, parents = [], openKeys = []) {
    for (let i = 0; i < menuArray.length; i++) {
      const menu = menuArray[i];
      if (menu.key === menuName) {
        return { preList: [...parents], openKeys: [...openKeys] };
      } else if (menu.children && menu.children.length > 0) {
        const result = getParentMenus(
          menu.children,
          menuName,
          [...parents,menu.title],
          [...openKeys,menu.key]
        );
        if (result) {
          return result;
        }
      }
    }
    return null;
  }
//获取所有子菜单
  let get = (list) => {
    list.forEach((item) => {
      if (!item.children) {
        let pre = getParentMenus(menuList, item.key);
        allMenus.push({
          ...item,
          openKeys: pre.openKeys,
          preList: pre.preList,
        });
      } else {
        get(item.children);
      }
    });
  };
  get(menuList);
  console.log(allMenus);
  return allMenus;
}
