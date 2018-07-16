if(Cookies.get('token')==undefined){
    window.location.href = 'http://localhost/simplechatclient/login.html';
}
var socket = io.connect(socketServer,{
    'query':'token='+Cookies.get('token')
});

socket.on('error',function(error){
    if (error.type == "UnauthorizedError" || error.code == "invalid_token") {
        window.location.href = 'http://localhost/simplechatclient/login.html';
        console.log("User's token has expired");
      }
});