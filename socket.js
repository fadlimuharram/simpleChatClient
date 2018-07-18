


socket.on('error',function(error){
    if (error.type == "UnauthorizedError" || error.code == "invalid_token") {
        window.location.href = 'http://localhost/simplechatclient/login.html';
        console.log("User's token has expired");
      }
});

socket.on('Selamat Datang',function(data){
  console.log(data);
});

socket.on('loadPesanLama',function(data){

  $('.loadpesan').html('');
  var tmpHtml = '';
  if(data.data.length>0){
    $.each(data.data,function(key,val){
      if(val.kepada!=Cookies.get('currKepada')){
        tmpHtml += '<div class="row message-body">'+
                      '<div class="col-sm-12 message-main-receiver">'+
                        '<div class="receiver">'+
                          '<div class="message-text">'+
                           val.pesan +
                          '</div>'+
                          '<span class="message-time pull-right">sun'+
                          '</span>'+
                        '</div>'+
                      '</div>'+
                    '</div>';
      }else{
        tmpHtml += '<div class="row message-body">'+
                      '<div class="col-sm-12  message-main-sender">'+
                        '<div class="sender">'+
                          '<div class="message-text">'+
                           val.pesan +
                          '</div>'+
                          '<span class="message-time pull-right">sun'+
                          '</span>'+
                        '</div>'+
                      '</div>'+
                    '</div>';
      }

    });
    $('.loadpesan').html(tmpHtml);
    $(".message").css("overflow","auto");
    $('.message').scrollTop($('.loadpesan').height());
  }
});

socket.on('updatePesan',function(data){

  var tmpHtml = '';

  if(data.data.kepada!=Cookies.get('currKepada')){
    tmpHtml += '<div class="row message-body">'+
                  '<div class="col-sm-12 message-main-receiver">'+
                    '<div class="receiver">'+
                      '<div class="message-text">'+
                       data.data.pesan +
                      '</div>'+
                      '<span class="message-time pull-right">sun'+
                      '</span>'+
                    '</div>'+
                  '</div>'+
                '</div>';
  }else{
    tmpHtml += '<div class="row message-body">'+
                  '<div class="col-sm-12  message-main-sender">'+
                    '<div class="sender">'+
                      '<div class="message-text">'+
                       data.data.pesan +
                      '</div>'+
                      '<span class="message-time pull-right">sun'+
                      '</span>'+
                    '</div>'+
                  '</div>'+
                '</div>';
  }

  $('.loadpesan').append(tmpHtml);
  $(".message").css("overflow","auto");
  $('.message').scrollTop($('.loadpesan').height());
});

socket.on('connect',function(){
  $(document).on('click', '.pesan', function () {
      //alert('pesan di klik : ' + Cookies.get('currKepada'));
      socket.emit('join',{
        kepada:Cookies.get('currKepada')
      });
  });


  $('#kirim').on('click',function(){
    socket.emit('buatPesan',{
      kepada:Cookies.get('currKepada'),
      pesan:$('#comment').val()
    });
    $('#comment').val('');
  });


});

function onPesanClick(username,id){
  $('#ubahnama').html(username);
  Cookies.set('currKepada',id);
}
