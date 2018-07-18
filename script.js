/*$(function(){
    $(".heading-compose").click(function() {
      $(".side-two").css({
        "left": "0"
      });
    });

    $(".newMessage-back").click(function() {
      $(".side-two").css({
        "left": "-100%"
      });
    });
});*/
$(document).on('click', '#datapesan', function () {
    $('.gr-top-z-index').html('');
});

$('#btnkeluar').on('click',function(){
  Cookies.remove('token');
  Cookies.remove('currKepada');
  window.location.href = 'http://localhost/simplechatclient/login.html';
});
$('.namalogin').append(Cookies.get('username'));
