$(document).ready(function () {

  $('.layerPopup').click(function () {
    // $('.layer').show();
    // $('.layer-bg').show();
    $('.layer').css('display','block');
    $('.layer-bg').css('display','block');
  });
  $('.close-btn').click(function () {
    $('.layer').hide();
    $('.layer-bg').hide();
  });
});