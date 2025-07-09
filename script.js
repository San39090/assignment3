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
    if (passvalue.length < 8) {
      errormessage += "<p>Password is Weak</p>";
    } else if ($("#Password").val() == "") {
      missing += "<p>Password is required</p>";
    }
    if ($("#Password").val() != $("#Con_Password").val()) {
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
    console.log(e.which);
    if (e.which === 8 || (e.which >= 48 && e.which <= 57)) {
      return;
    } else {
      e.preventDefault();
    }
  });
});
