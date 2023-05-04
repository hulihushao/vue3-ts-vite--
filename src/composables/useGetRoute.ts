import { menuList } from "@/utils/config/menus";
import {menus} from "@/types/menus"
interface preObj{
  openKeys?:string[],
  preList?:string[]
}
export function useGetRoute() {
  let path = location.pathname;
  if(path=="/")path=location.hash.replace("#","")
  return path;
}
export function useAllMenus():menus[] {
  let allMenus:menus[] = [];
  //获取指定子菜单的所有父级
  function getParentMenus(menuArray:menus[], menuName:string, parents:string[] = [], openKeys:string[] = []):object|null {
    for (let i = 0; i < menuArray.length; i++) {
      const menu = menuArray[i];
      if (menu.key === menuName) {
        return { preList: [...parents], openKeys: [...openKeys] };
      } else if (menu.children && menu.children.length > 0) {
        const result = getParentMenus(
          menu.children as menus[],
          menuName,
          [...parents,menu.title],
          [...openKeys as string[],menu.key as string]
        );
        if (result) {
          return result;
        }
      }
    }
    return null;
  }
//获取所有子菜单
  let get = (list:menus[]) => {
    list.forEach((item:menus) => {
      if (!item.children) {
        let pre = getParentMenus(menuList as menus[], item.key as string) as preObj;
        allMenus.push({
          ...item,
          openKeys: pre.openKeys,
          preList: pre.preList,
        });
      } else {
        get(item.children as menus[]);
      }
    });
  };
  get(menuList as menus[]);
  console.log(allMenus);
  return allMenus;
}
