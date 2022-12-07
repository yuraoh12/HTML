$(document).ready(function () {
  function slider() {
    var num = 0;
    // var result;

    setInterval(function () {
      // console.log(num);
      // result = num * -300;
      // num++;
      // console.log(num);
      // console.log(result);

      if (num == 3) {
        num = 0;
      }
      $('.slider p').hide();
      $('.slider p').eq(-num).stop().fadeOut();
      $('.slider p').eq(num).stop().fadeIn();
      console.log(num);
      num++;

      // console.log("num : ", num);
      // $('.slider').stop().animate({
      //   top: result + 'px'
      // });
    }, 1000);

  }
  slider();
});