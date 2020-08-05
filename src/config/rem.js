(function() {
  function a() {
    let b = document.documentElement.clientWidth;
    b = b > 750 ? 750 : b;
    const c = (b / 750) * 100;
    document.getElementsByTagName("html")[0].style.fontSize = c + "px";
  }
  a();
  window.onresize = a;
})();
