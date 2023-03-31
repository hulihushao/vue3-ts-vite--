export interface menus{
  title:string,
  key:string|number,
  path:string,
  icon?:string,
  iconfont?:string,
  closable?:boolean,
  component?,
  openKeys?:string[],
  preList?:string[]
}