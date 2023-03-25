import { resolveComponentType } from "@vue/compiler-core"

export function getRouters(menus){
    let router=[]
    getList(menus,router)
    return router
}
function getList(menus,router){
    menus.forEach(item=>{
        if(item.children&&item.children.length){
            getList(item.children,router)
        }else{
            let component=item.component
            router.push({
                path:item.path,
                name:item.name,
                meta:item.meta||{},
                component:component
            })
        }
    })
}