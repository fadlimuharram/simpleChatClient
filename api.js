var templateListFriend = '<div class="row sideBar-body" onclick="onPesanClick()">'+
                  '<div class="col-sm-3 col-xs-3 sideBar-avatar">'+
                    '<div class="avatar-icon">'+
                      '<img src="https://bootdey.com/img/Content/avatar/avatar8.png">'+
                    '</div>'+
                  '</div>'+
                  '<div class="col-sm-9 col-xs-9 sideBar-main">'+
                    '<div class="row">'+
                      '<div class="col-sm-8 col-xs-8 sideBar-name">'+
                        '<span class="name-meta">John Doe'+
                      '</span>'+
                      '</div>'+
                      '<div class="col-sm-4 col-xs-4 pull-right sideBar-time">'+
                        '<span class="time-meta pull-right">18:18'+
                      '</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                '</div>';

$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: socketServer + "/users",
        dataType: 'json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + Cookies.get('token'));
        },
        success: function (data){
            tmpHtml='';
            $.each(data,function(key,val){
                console.log(val);
                var pesanKlik = "onPesanClick('"+val.username+"','"+val._id+"')";
                tmpHtml += '<div class="row sideBar-body pesan" onclick="'+pesanKlik+'">'+
                '<div class="col-sm-3 col-xs-3 sideBar-avatar">'+
                  '<div class="avatar-icon">'+
                    '<img src="https://bootdey.com/img/Content/avatar/avatar8.png">'+
                    '<input type="hidden" name="id" value="'+val._id+'">'+
                  '</div>'+
                '</div>'+
                '<div class="col-sm-9 col-xs-9 sideBar-main">'+
                  '<div class="row">'+
                    '<div class="col-sm-8 col-xs-8 sideBar-name">'+
                      '<span class="name-meta">'+val.username+
                    '</span>'+
                    '</div>'+
                    '<div class="col-sm-4 col-xs-4 pull-right sideBar-time">'+
                      '<span class="time-meta pull-right">18:18'+
                    '</span>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>';
            });
            $('#daftarTeman').html(tmpHtml);
        }
    });
});
