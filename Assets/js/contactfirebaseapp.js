$("#sendMessageButton").on("click", function (event) {
  event.preventDefault();

  var custName = $("#name").val().trim();
  var custPhone = $("#phone").val().trim();
  var custEmail = $("#email").val().trim();
  var custMessage = $("#message").val().trim();

  var newCust = {
    name: custName,
    phone: custPhone,
    email: custEmail,
    message: custMessage,
  };

  var errors=[];
  if (!validateName(custName)) {
    errors.push("Name is required")
  }
  
  if (!validatePhone(custPhone)) {
    errors.push("Phone Number is invalid")
  }
  if (!validateEmail(custEmail)) {
    errors.push("Email is invalid")
  }

  if (custMessage.length ===0) {
    errors.push("Message is required")
  }

  if (errors.length > 0) {
    console.log("error messageing")
    alert(errors);
   
  $("#errormessage").append("string")
} else {
  alert("Your Information has been received and Coin Compare will contact you shortly");
}
 

  database.ref().push(newCust);

  $("#name").val("");
  $("#phone").val("");
  $("#email").val("");
  $("#message").val("");
});

function validateName(name) {
  
  var nameformat = name.length
  if (nameformat == 0 || nameformat >= 100 || nameformat < 1){

return false;
}
return true;
}


function validateEmail(email) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(mailformat)) {
    return true;
  }
  else {
    return false;
  }
}


function validatePhone(phone) {
  var phoneformat = /^\d{10}$/;
  if (phone.match(phoneformat)) {
    return true;
  }
  else {
    return false;
  }
}




