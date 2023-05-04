export interface Action {
    title: string,
    click: (fn:()=>void)=>void
}