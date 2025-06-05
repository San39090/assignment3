function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
var errormessage="";
var missing="";
$("#button").click(function(){
    if($('#Email').val()==""){
        missing += "<p>Email is empty</p>"
    }
    if($('#phone').val()==""){
        missing += "<p>Phone Number is empty</p>"
    }
    if($('#password').val()==""){
        missing += "<p>Password is empty</p>"
    }
    if($('#repassword').val()==""){
        missing += "<p>Reenter the password</p>"
    }
    if(isEmail($("#Email").val())==false){
        errormessage += "<p>Invalid Email</p>";
    }
    if($.isNumeric($("#phone").val())==false){
        errormessage += "<p>Invalid Number</p>";
    }
    if($("#password").val()!=$("#repassword").val()){
        errormessage += "<p>Password does not match</p>"
    }
    if(errormessage==""){
        $("#error").html("<p>You are registered</p>").css('color','green').fadeOut(4000);
    }
    else{
        $("#error").html(errormessage+missing).css('color','red').fadeOut(4000);
    }
})