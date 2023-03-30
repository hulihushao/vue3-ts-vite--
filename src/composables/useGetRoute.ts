import { menuList } from "@/utils/config/menus";
export function useGetRoute(){
    let path=location.pathname
    return path
}
export function useAllMenus(){
    let allMenus=[]
    let openKeys=[]
    let preList=[]
    let get=(list)=>{
        list.forEach(item=>{
            if(!item.children){
                allMenus.push({...item,openKeys,preList})
                openKeys=[]
                preList=[]
            }else{
                openKeys.push(item.key)
                preList.push(item.title)
                get(item.children)
            }
        })
    }
    get(menuList)
    console.log(allMenus)
    return allMenus
}