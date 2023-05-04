export default function isMobile() {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  if (isMobile) {
    console.log("设备为移动端");
    return true;
  } else {
    console.log("设备为桌面端");
    return false;
  }
}
// get brower
export function GetCurrentBrowser() {
  let ua = navigator.userAgent.toLocaleLowerCase();
  let browserType = null;

  if (ua.match(/msie/) != null || ua.match(/trident/) != null) {
    browserType = "IE" + getVer("browser", "ie");
  } else if (ua.match(/edge/) != null) {
    browserType = "Edge" + getVer("browser", "edge");
  } else if (ua.match(/firefox/) != null) {
    browserType = "firefox" + getVer("browser", "firefox");
  } else if (ua.match(/ucbrowser/) != null) {
    browserType = "UC" + getVer("browser", "uc");
  } else if (ua.match(/opera/) != null || ua.match(/opr/) != null) {
    browserType = "Opera" + getVer("browser", "opera");
  } else if (ua.match(/bidubrowser/) != null) {
    browserType = "Baidu" + getVer("browser", "baidu");
  } else if (ua.match(/metasr/) != null) {
    browserType = "Sougou" + getVer("browser", "sougou");
  } else if (
    ua.match(/tencenttraveler/) != null ||
    ua.match(/qqbrowser/) != null
  ) {
    browserType = "QQ" + getVer("browser", "qq");
  } else if (ua.match(/micromessenger/) != null) {
    browserType = "Weixin" + getVer("browser", "micromessenger");
  } else if (ua.match(/maxthon/) != null) {
    browserType = "Maxthon" + getVer("browser", "maxthon");
  } else if (ua.match(/safari/) != null && ua.indexOf("chrome") == -1) {
    browserType = "Safari" + getVer("browser", "safari");
  } else if (ua.match(/huawei/) != null) {
    browserType = "Huawei" + getVer("browser", "huawei");
  } else if (ua.match(/chrome/) != null) {
    var is360 = _mime("type", "application/vnd.chromium.remoting-viewer");
    if (is360 && is360ByUserActivationProperty()) {
      browserType = "360浏览器";
    } else if (ua.indexOf("safari") > -1 && ua.indexOf("edge") == -1) {
      browserType = "Chrome" + getVer("browser", "chrome");
    } else {
      browserType = "Others";
    }
  } else {
    browserType = "Others";
  }
  return browserType;
}

function _mime(option: string, value: string) {
  var mimeTypes: any = navigator.mimeTypes;
  for (var mt in mimeTypes) {
    if (mimeTypes[mt][option] === value) {
      return true;
    }
  }
  return false;
}
//根据userActivation属性来判断360极速
function is360ByUserActivationProperty() {
  //debugger;
  let navigator = window.navigator as any;
  if (navigator.userActivation) {
    return false; //chrome
  } else {
    return true; //360极速
  }
}
//获取版本号
let sUserAgent = navigator.userAgent.toLocaleLowerCase();
function getVer(type: string, sys: string) {
  if (type == "browser") {
    if (sys == "ie") {
      return sUserAgent
        .split(" ")
        .filter((item) => item.includes("msie"))[0]
        .split(" ");
    }
    return (
      "/" +
      sUserAgent
        .split(" ")
        .filter((item) => item.includes(sys))[0]
        .split("/")[1]
    );
  } else if (type == "system") {
    return sUserAgent
      .split(";")
      .filter((item) => item.includes(sys))[0]
      .split(" ")[2];
  } else {
    return "";
  }
}

// get os
export function GetOs() {
  let isWin =
    navigator.platform.toLowerCase() === "win32" ||
    navigator.platform.toLowerCase() === "windows";
  let isMac =
    navigator.platform.toLowerCase() === "mac68k" ||
    navigator.platform.toLowerCase() === "macppc" ||
    navigator.platform.toLowerCase() === "macintosh" ||
    navigator.platform.toLowerCase() === "macintel";
  if (isMac) return "Mac";
  var isUnix = navigator.platform.toLowerCase() === "x11" && !isWin && !isMac;
  if (isUnix) return "Unix";
  var isLinux = String(navigator.platform).indexOf("linux") > -1;
  if (isLinux) return "Linux";
  if (isWin) {
    var isWin2K =
      sUserAgent.indexOf("windows nt 5.0") > -1 ||
      sUserAgent.indexOf("windows 2000") > -1;
    if (isWin2K) return "Win2000";
    var isWinXP =
      sUserAgent.indexOf("windows nt 5.1") > -1 ||
      sUserAgent.indexOf("windows xp") > -1;
    if (isWinXP) return "WinXP";
    var isWin2003 =
      sUserAgent.indexOf("windows nt 5.2") > -1 ||
      sUserAgent.indexOf("windows 2003") > -1;
    if (isWin2003) return "Win2003";
    var isWinVista =
      sUserAgent.indexOf("windows nt 6.0") > -1 ||
      sUserAgent.indexOf("windows vista") > -1;
    if (isWinVista) return "WinVista";
    var isWin7 =
      sUserAgent.indexOf("windows nt 6.1") > -1 ||
      sUserAgent.indexOf("windows 7") > -1;
    if (isWin7) return "Win7";
    var isWin10 =
      sUserAgent.indexOf("windows nt 10.0") > -1 ||
      sUserAgent.indexOf("windows 10") > -1;
    if (isWin10) return "Win10";
  }

  console.log(navigator);
  if (sUserAgent.indexOf("harmonyos") > -1) return "HarmonyOS";
  if (sUserAgent.indexOf("android") > -1) {
    return "Android " + getVer("system", "android");
  }
  if (sUserAgent.indexOf("iphone") > -1) return "iPhone";
  if (sUserAgent.indexOf("symbianos") > -1) return "SymbianOS";
  if (sUserAgent.indexOf("windows phone") > -1) return "Windows Phone";
  if (sUserAgent.indexOf("ipad") > -1) return "iPad";
  if (sUserAgent.indexOf("ipod") > -1) return "iPod";
  if (sUserAgent.indexOf("windows") > -1) return "Android Windows";
  return "Others";
}

// getAddress
// {/*<script src="http://pv.sohu.com/cityjson?ie=utf-8"></script>*/}
// {/*export function GetAddress () {*/}
//   {/*return returnCitySN*/}
// {/*}*/}
