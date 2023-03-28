export interface menus{
  title:string,
  key:string|number,
  path:string,
  icon?:string,
  closable?:boolean,
  component?,
  openKeys:string|number[]
}