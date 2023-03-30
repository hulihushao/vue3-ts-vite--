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
