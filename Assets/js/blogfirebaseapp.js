  //button for adding employees
  $("#blogbutton").on("click", function(event) {
    console.log("hey");
  event.preventDefault();

  //grab user input
  var blogText = $("#blogtext").val().trim();

  //creates local "temp" object for holding empoee data
  var newBlog = {
      message: blogText,

  };

  var errors=[];
  var ok= "Your Information has been received and Coin Compare will contact you shortly";

  if (blogText.length ===0) {
    errors.push("Message is required")

  }

  if (errors.length > 0) {
  
    alert(errors);
   
  $("#errormessage").append("string")
  } else {
    alert("Your Information has been received and Coin Compare will contact you shortly");
  }
     
  //upload customer data to the database
  database.ref().push(newBlog);

// Clears all of the text-boxes
$("#blogtext").val("");

});
  