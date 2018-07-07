//button for adding employees
$("#sendMessageButton").on("click", function (event) {
  console.log("hey");
  event.preventDefault();

  //grab user input
  var custName = $("#name").val().trim();
  var custPhone = $("#phone").val().trim();
  var custEmail = $("#email").val().trim();
  var custMessage = $("#message").val().trim();


  //creates local "temp" object for holding empoee data
  var newCust = {
    name: custName,
    phone: custPhone,
    email: custEmail,
    message: custMessage,
  };

  //==was setting a codnition/predicate
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
console.log("errors", errors)
  if (errors.length > 0) {
    console.log("error messageing")
    alert(errors);
   
  $("#errormessage").append("string")
} else {
  alert("Your Information has been received and Coin Compare will contact you shortly");
}
 
  //dont want any of this to run unless user has valid EMAIL
  //upload customer data to the database
  database.ref().push(newCust);

  //log everything to console
  console.log(newCust.nam);
  console.log(newCust.pho);
  console.log(newCust.ema);
  console.log(newCust.nam);

 // alert("Your Information has been received and Coin Compare will contact you shortly");
  //alert("Your Information has been received and Coin Compare will contact you shortly");

  // Clears all of the text-boxes
  $("#name").val("");
  $("#phone").val("");
  $("#email").val("");
  $("#message").val("");
});


//Function to validate EMAIL
//Function parameters are listed inside the parentheses () in the function definition.
//Function arguments are the values received by the function when it is invoked.
//Inside the function, the arguments (the parameters) behave as local variables.
//
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
//function to validate phone #
function validatePhone(phone) {
  var phoneformat = /^\d{10}$/;
  if (phone.match(phoneformat)) {
    return true;
  }
  else {
    return false;
  }
}




