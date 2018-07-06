console.log('test');
//blogfirebase.app  //button for adding employees
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

if (blogText.length ===0) {
  errors.push("Message is required")
  console.log("errors", errors)
}
//console.log("errors", errors)
if (errors.length > 0) {
  console.log("error messageing")
  alert(errors);
 
$("#errormessage").append("string")
} else {
  alert("Your Information has been received and Coin Compare will contact you shortly");
}
   




//upload customer data to the database
database.ref().push(newBlog);

//log everything to console
console.log(newBlog.blog);


// alert("Your Information has been received and Coin Compare will contact you shortly");

// Clears all of the text-boxes
$("#blogtext").val("");

});