$(document).ready(function () {
  $(".submit").click(function () {
    //loads the script when user clicks the button
    console.log("Clicked button"); //logs the click to the console so can check script is working

    //local variables
    var name = $(".name").val();
    var email = $(".email").val();
    var subject = $(".subject").val();
    var message = $(".message").val();
    var statusElm = $(".status");
    statusElm.empty();

    //if statment to check the user enters the correct values
    if (name.length >= 2) {
      statusElm.append("<div>Name is valid</div>");
    } else {
      statusElm.append("<div>Name is invalid</div>");
    }
    if (email.length > 5 && email.includes("@") && email.includes(".")) {
      statusElm.append("<div>Email is valid</div>");
    } else {
      statusElm.append("<div>Email is invalid</div>");
    }
    if (subject.length >= 2) {
      statusElm.append("<div>subject is valid</div>");
    } else {
      statusElm.append("<div>subject is invalid</div>");
    }
    if (message.length >= 10) {
      statusElm.append("<div>Message is valid</div>");
    } else {
      statusElm.append("<div>Message is invalid</div>");
    }
  });
});
//function that clears the fields for ease of use for the user
function clear() {
  document.getElementById("email").innerHTML = "";
  document.getElementById("name").innerHTML = "";
  document.getElementById("phone").innerHTML = "";
  document.getElementById("message").innerHTML = "";
  document.getElementById("subject").innerHTML = "";
  document.getElementById("status").innerHTML = "";
}
