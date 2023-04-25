// 计算反色, ilighten - 减弱对比度(-1 ~ -15)
// 示例: oppositeColor("#000000", -4); 返回: #bbbbbb
export function oppositeColor(a: string, ilighten: number):string {
  a = a.replace("#", "");
  //var max16 = 15;
  let max16: number = Math.floor(15 + (ilighten || 0));
  if (max16 < 0 || max16 > 15) max16 = 15;

  let c16: number;
  let c10: number;
  let b = [];

  for (var i = 0; i < a.length; i++) {
    c16 = parseInt(a.charAt(i), 16); // to 16进制
    c10 = parseInt(max16 - c16, 10); // 10进制计算
    if (c10 < 0) c10 = Math.abs(c10);
    b.push(c10.toString(16)); // to 16进制
  }
  return "#" + b.join("");
}