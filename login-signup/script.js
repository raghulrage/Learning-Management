$('.tabs .tab').click(function(){
    if ($(this).hasClass('signin')) {
        $('.tabs .tab').removeClass('active');
        $(this).addClass('active');
        $('.cont').hide();
        $('.signin-cont').show();
    } 
    if ($(this).hasClass('signup')) {
        $('.tabs .tab').removeClass('active');
        $(this).addClass('active');
        $('.cont').hide();
        $('.signup-cont').show();
    }
});
$('.container .bg').mousemove(function(e){
    var amountMovedX = (e.pageX * -1 / 30);
    var amountMovedY = (e.pageY * -1 / 9);
    $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
});

//To verify password re-typed correctly
function validate_login(){
    var pass=document.getElementById('password_login').value;
    var conf_pass=document.getElementById('conf_password').value;
    console.log(pass,conf_password)
    if(pass!=conf_pass){
        swal("OOPS!", "Password does not match!", "warning");
        
    }
    else{
        swal("good Job!", "Login successful!", "success").then(function() {
            window.location = "../index.html";
        });
    }
}
function change(event){
    if (document.getElementById(event).type=='password') {
        document.getElementById(event).type='text'
    }
    else{
        document.getElementById(event).type='password'
    }
}