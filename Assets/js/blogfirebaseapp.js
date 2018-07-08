$("#blogbutton").on("click", function(event) {
event.preventDefault();

var blogText = $("#blogtext").val().trim();

var newBlog = {
    message: blogText,

};

var errors=[];

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

//log everything to console
console.log(newBlog.blog);


// alert("Your Information has been received and Coin Compare will contact you shortly");

// Clears all of the text-boxes
$("#blogtext").val("");

});