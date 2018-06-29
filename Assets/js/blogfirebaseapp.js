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

  //upload customer data to the database
  database.ref().push(newBlog);

  //log everything to console
  console.log(newBlog.blog);
 

  alert("Your Information has been received and Coin Compare will contact you shortly");

// Clears all of the text-boxes
$("#blogtext").val("");

});
  