// 计算反色, ilighten - 减弱对比度(-1 ~ -15)
// 示例: oppositeColor("#000000", -4); 返回: #bbbbbb
export function oppositeColor(a: string, ilighten: number): string {
  a = a.replace("#", "");
  //var max16 = 15;
  let max16: number = Math.floor(15 + (ilighten || 0));
  if (max16 < 0 || max16 > 15) max16 = 15;

  let c16: number;
  let c10: number;
  let b = [];

  for (var i = 0; i < a.length; i++) {
    c16 = parseInt(a.charAt(i), 16); // to 16进制
    let n:any = max16 - c16;
    c10 = parseInt(n as string, 10); // 10进制计算
    if (c10 < 0) c10 = Math.abs(c10);
    b.push(c10.toString(16)); // to 16进制
  }
  return "#" + b.join("");
}
export function getLightenDarkenColor(color: string, range: number) {
  let newColor = "#";
  range = -125;
  for (let i = 0; i < 3; i++) {
    const hxStr = color.substr(i * 2 + 1, 2);
    let val = parseInt(hxStr, 16);
    val += range;
    if (val < 0) val = 0;
    else if (val > 255) val = 255;
    newColor += val.toString(16).padStart(2, "0");
  }
  return newColor;
}
