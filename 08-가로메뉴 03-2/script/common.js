$(document).ready(function () {
  $(".menu > ul > li").mouseenter(function () {
    $(".menu > ul > li > ul.submenu").stop().slideDown(200);
    $(".menu .menu-bg").stop().slideDown(200);
  });

  $(".menu > ul > li").mouseout(function () {
    $(".menu > ul > li > ul.submenu").stop().slideUp(200);
    $(".menu .menu-bg").stop().slideUp(200);
  });
});