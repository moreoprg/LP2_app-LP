// 最初の部分でwidth/heightを取得するためのコードを記述しています。

window.onunload = function () {};
function sizecheck() {
  w = window.innerWidth ? window.innerWidth : $(window).width();
  h = window.innerHeight ? window.innerHeight : $(window).height();
}

sizecheck();
$(function () {
  if (w > 768) {
  } else {
    $("header .drawer").click(function () {
      $("body").toggleClass("nav-open");
      $("header .header-nav").fadeToggle(200);
    });
    $("header li a").click(function () {
      $("body").toggleClass("nav-open");
      $("header .header-nav").fadeToggle(200);
    });
  }
});
