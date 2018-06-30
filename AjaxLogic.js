    //function bitcoin() {

    // Querying the our 1st api coinmarketcap
   var queryURL = "https://api.coinmarketcap.com/v2/ticker/?limit=15&sort=rank";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // Printing the entire object to console
        console.log(response.data, 'RESPONSE.DATA.');
        //printing our info console
        console.log(JSON.stringify(response.data["1"]["name"], null, 2), 'RESPONSE');
        console.log(JSON.stringify(response.data["1"]["quotes"]["USD"]["price"], null, 2), 'RESPONSE');
        console.log(JSON.stringify(response.data["1027"]["name"], null, 2), 'RESPONSE');
        console.log(JSON.stringify(response.data["1027"]["quotes"]["USD"]["price"], null, 2), 'RESPONSE');
        console.log(JSON.stringify(response.data["2"]["name"], null, 2), 'RESPONSE');
        console.log(JSON.stringify(response.data["2"]["quotes"]["USD"]["price"], null, 2), 'RESPONSE');
    });


        var queryURL = "https://api.coinmarketcap.com/v2/ticker/?limit=15&sort=rank";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
    
            // Printing the entire object to console
            console.log(response.data, 'RESPONSE.DATA.');
            //printing our info console
            console.log(response.data["1"]["name"], 'RESPONSE');
            console.log(JSON.stringify(response.data["1"]["quotes"]["USD"]["percent_change_7d"], null, 2), 'RESPONSE');
            console.log(response.data["1027"]["name"], 'RESPONSE');
            console.log(JSON.stringify(response.data["1027"]["quotes"]["USD"]["percent_change_7d"], null, 2), 'RESPONSE');
            console.log(response.data["2"]["name"], 'RESPONSE');
            console.log(JSON.stringify(response.data["2"]["quotes"]["USD"]["percent_change_7d"], null, 2), 'RESPONSE');
        });
    //getting prices and times (last24hours) 3 currencies from CoinRanking.com
   // also gives 	Percentage of change over the given time period

   //*************************************24hours***************************************** */

    $.ajax({
        
        url: "https://api.coinranking.com/v1/public/coin/1335/history/24h?base=USD",
        method: "GET"
    }).then(function (response) {
        //   console.log(response.data, 'RESPONSE.DATA.');
        //     console.log(response);
        //   console.log(data.history.timestamp);
        //   console.log(data.history.price);
        var coinName1 = "Bitcoin";
        console.log(coinName1);
        console.log(response.data.change);
        console.log(response.data.history[290]);

    });

    $.ajax({
        
        url: "https://api.coinranking.com/v1/public/coin/1211/history/24h?base=USD",
        method: "GET"
    }).then(function (response) {
        var coinName2 = "Etherium";
        console.log(coinName2);
        console.log(response.data.change);
        console.log(response.data.history[290]);
        //Etherium time stamp for coinranking.com and the percent change during last 24hr.
        //Etherium id= "1211"
    });

    $.ajax({
        
        url: "https://api.coinranking.com/v1/public/coin/527/history/24h?base=USD",
        method: "GET"
    }).then(function (response) {
        var coinName3 = "Litecoin";
        console.log(coinName3);
        console.log(response.data.change);
        console.log(response.data.history[290]);

        //Litecoin time stamp for coinranking.com and the percent change during last 24hr.
        //Litecoin  id= "1211"
    });

   //*************************************7days**************************************** */

   $.ajax({
    
    url: "https://api.coinranking.com/v1/public/coin/1335/history/7d?base=USD",
    method: "GET"
}).then(function (response) {
    var coinName1 = "Bitcoin 7 days";
    console.log(coinName1);
    console.log(response.data.change);
    console.log(response);
   // console.log(response.data.history[290]);

});

$.ajax({
    
    url: "https://api.coinranking.com/v1/public/coin/1211/history/7d?base=USD",
    method: "GET"
}).then(function (response) {
    var coinName2 = "Etherium 7 days";
    console.log(coinName2);
    console.log(response.data.change);
    console.log(response);
   // console.log(response.data.history[290]);

    
});

$.ajax({
   
    url: "https://api.coinranking.com/v1/public/coin/527/history/7d?base=USD",
    method: "GET"
}).then(function (response) {
    var coinName3 = "Litecoin 7 days";
    console.log(coinName3);
    console.log(response.data.change);
    console.log(response);
   // console.log(response.data.history[290]);
});

  //*************************************30d**************************************** */

  $.ajax({
   
    url: "https://api.coinranking.com/v1/public/coin/1335/history/30d?base=USD",
    method: "GET"
}).then(function (response) {
    var coinName1 = "Bitcoin 30 days";
    console.log(coinName1);
    console.log(response.data.change);
    console.log(response);
    //console.log(response.data.history[290]);

});

$.ajax({
    
    url: "https://api.coinranking.com/v1/public/coin/1211/history/30d?base=USD",
    method: "GET"
}).then(function (response) {
    var coinName2 = "Etherium 30 days";
    console.log(coinName2);
    console.log(response.data.change);
    console.log(response);
   // console.log(response.data.history[290]);
    //Etherium time stamp for coinranking.com and the percent change during last 24hr.
    //Etherium id= "1211"
});

$.ajax({
  
    url: "https://api.coinranking.com/v1/public/coin/527/history/30d?base=USD",
    method: "GET"
}).then(function (response) {
    var coinName3 = "Litecoin 30 days";
    console.log(coinName3);
    console.log(response.data.change);
    console.log(response);
    //console.log(response.data.history[290]);

      // Math.abs
});
   

