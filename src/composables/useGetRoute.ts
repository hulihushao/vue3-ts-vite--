import { menuList } from "@/utils/config/menus";
export function useGetRoute(){
    let path=location.pathname
    return path
}
export function useAllMenus(){
    let allMenus=[]
    let openKeys=[]
    let get=(list)=>{
        list.forEach(item=>{
            if(!item.children){
                allMenus.push({...item,openKeys})
                openKeys=[]
            }else{
                openKeys.push(item.key)
                get(item.children)
            }
        })
    }
    get(menuList)
    console.log(allMenus)
    return allMenus
}