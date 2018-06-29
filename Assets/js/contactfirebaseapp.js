  //button for adding employees
  $("#sendMessageButton").on("click", function(event) {
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

      //upload customer data to the database
      database.ref().push(newCust);

      //log everything to console
      console.log(newCust.nam);
      console.log(newCust.pho);
      console.log(newCust.ema);
      console.log(newCust.nam);

      alert("Your Information has been received and Coin Compare will contact you shortly");

    // Clears all of the text-boxes
    $("#name").val("");
    $("#phone").val("");
    $("#email").val("");
    $("#message").val("");
  });
      