$(document).ready(function () {
  var errormessage = "";
  var missing = "";
  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  //email
  $("#Password").attr("maxlength", 15);
  $("#Con_Password").attr("maxlength", 15);
  $("#Phone").attr("maxLength", 10);
  $("#btn").click(function () {
    var win = "<p>You are registered!</p>";
    if ($("#Email").val() == "") {
      missing += "<p>Email is required</p>";
    } else if (isEmail($("#Email").val()) == false) {
      errormessage += "<p>Email id is invalid</p>";
    }

    //phone number
    var value = $("#Phone").val();
    if ($("#Phone").val() == "") {
      missing += "<p>Phone Number is required</p>";
    } else if (value.length != 10) {
      errormessage += "<p>Invalid Phone Number</p>";
    } else if ($.isNumeric($("#Phone").val()) == false) {
      errormessage += "<p>Phone number is invalid";
    }

    //password
    var passvalue = $("#Password").val();
    var big=0,small=0,special=0;
    for(var i=0;i<passvalue.length;i++){
      if(passvalue[i]>='a' && passvalue[i]<='z'){
        big++;
      }
      else if(passvalue[i]>='A' && passvalue[i]<='Z'){
        small++;
      }
      else if(passvalue[i]=='@' || passvalue[i]=='#' || passvalue[i]=='$' || passvalue[i]=='%' || passvalue[i]=='&' || passvalue[i]=='+'
        || passvalue[i]=='-' || passvalue[i]=='=' || passvalue[i]=='?' || passvalue[i]=='/' || passvalue[i]=='^'
      ){
        special++;
      }
    }
    if (passvalue.length < 8) {
      errormessage += "<p>Password is Weak</p>";
    } else if ($("#Password").val() == "") {
      missing += "<p>Password is required</p>";
    }
    if(special==0 && big==0 && small==0){
      errormessage += "<p>Need atleast one special,upper and lower characters</p>"
    }
    else if(special==0 && big==0){
      errormessage += "<p>Need atleast one special and upper characters</p>"
    }
    else if(big==0 && small==0){
      errormessage += "<p>Need atleast one upper and lower characters</p>"
    }
    else if(special==0 && small==0){
      errormessage += "<p>Need atleast one special and lower characters</p>"
    }
    else if(special==0){
      errormessage += "<p>Need at least one special character</p>";
    }
    else if(big==0){
      errormessage += "<p>Need atleast one upper characters</p>"
    }
    else if(small==0){
      errormessage += "<p>Need atleast one lower characters</p>"
    }
    else if ($("#Password").val() != $("#Con_Password").val()) {
      errormessage += "<p>Password does not Match</p>";
    }
    if (errormessage == "" && missing == "") {
      $("#error").css("color", "green");
      $("#error").html(win);
      win = "";
    } else {
      $("#error").css("color", "red");
      $("#error").html(errormessage + missing);
      errormessage = "";
      missing = "";
    }
  });
  $("#show").click(function () {
    if ($("#show").text() == "Show Password") {
      $("#Password").attr("type", "text");
      $("#Con_Password").attr("type", "text");
      $("#show").html("Hide Password");
    } else {
      $("#Password").attr("type", "password");
      $("#Con_Password").attr("type", "password");
      $("#show").html("Show Password");
    }
  });
  $("#Phone").keydown(function (e) {
    if (e.which === 8 || (e.which >= 48 && e.which <= 57)) {
      return;
    } else {
      e.preventDefault();
    }
  });
});
