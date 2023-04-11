import {menus} from "@/types/menus"
const allModules=import.meta.glob('@/views/*/*.vue')
const allPages=import.meta.glob('@/views/*.vue')

export function getRouters(menus:menus[]){
    let router:object[]=[]
    getList(menus,router)
    return router
}
function getList(menus:menus[],router:object[]){
    menus.forEach((item:menus)=>{
        if(item.children&&item.children.length){
            getList(item.children as menus[],router)
        }else{
            let componentUrl=item.component.replace("@","/src")
            let component=allModules[componentUrl]
            if(!component){
                component=allPages[componentUrl]
            }
            router.push({
                path:item.path,
                name:item.name,
                meta:item.meta||{},
                component:component,
            })
        }
    })
}