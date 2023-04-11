export interface menus{
  title:string,
  name?:string,
  key:string|number,
  path:string,
  icon?:string,
  iconfont?:string,
  closable?:boolean,
  component?,
  openKeys?:string[],
  preList?:string[],
  meta?:object,
  children?:object[]
}