const allModules=import.meta.glob('@/views/*/*.vue')
const allPages=import.meta.glob('@/views/*.vue')
console.log(allModules)
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
            let componentUrl=item.component.replace("@","/src")
            let component=allModules[componentUrl]
            if(!component){
                component=allPages[componentUrl]
            }
            router.push({
                path:item.path,
                name:item.name,
                meta:item.meta||{},
                component:component
            })
        }
    })
}