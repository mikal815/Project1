
//Global variables
let cMcpriceBTC = "";
let cMcpriceLTC = "";
let cMcpriceETH = "";
let cRpriceBTC = "";
let cRpriceLTC = "";
let cRpriceETH = "";
let bitCoin = "";
let etherium = "";
let liteCoin = "";
let btcMoment = "";

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
    console.log(JSON.stringify(response.data["1"]["last_updated"], 'RESPONSE'));
    console.log(JSON.stringify(response.data["1027"]["name"], null, 2), 'RESPONSE');
    console.log(JSON.stringify(response.data["1027"]["quotes"]["USD"]["price"], null, 2), 'RESPONSE');
    console.log(JSON.stringify(response.data["2"]["name"], null, 2), 'RESPONSE');
    console.log(JSON.stringify(response.data["2"]["quotes"]["USD"]["price"], null, 2), 'RESPONSE');

    bitCoin = JSON.stringify(response.data["1"]["name"], 'RESPONSE');
    cMcpriceBTC = JSON.stringify(response.data["1"]["quotes"]["USD"]["price"], null, 2), 'RESPONSE';
    cMcTimeBTC = JSON.stringify(response.data["1"]["last_updated"], 'RESPONSE');
    btcMoment = moment.unix(cMcTimeBTC);

    ethereum = JSON.stringify(response.data["1027"]["name"], 'RESPONSE');
    cMcpriceETH = JSON.stringify(response.data["1027"]["quotes"]["USD"]["price"], null, 2), 'RESPONSE';
    cMcTimeETH = JSON.stringify(response.data["1027"]["last_updated"], 'RESPONSE');
    ethMoment = moment.unix(cMcTimeETH);

    litecoin = JSON.stringify(response.data["2"]["name"], 'RESPONSE');
    cMcpriceLTC = JSON.stringify(response.data["2"]["quotes"]["USD"]["price"], null, 2), 'RESPONSE';
    cMcTimeLTC = JSON.stringify(response.data["2"]["last_updated"], 'RESPONSE');
    ltcMoment = moment.unix(cMcTimeLTC);


    let newRow = $("<tr>").append(
        $("<td>").text("Bitcoin"),
        $("<td>").text(btcMoment),
        $("<td>").text("CoinMarketCap"),
        $("<td>").text(cMcpriceBTC),
        $("<td>").text(" "),
    );
    // Append the new row to the table
    $("#valuesFrom2APIs > tbody").append(newRow);


    let newRow2 = $("<tr>").append(
        $("<td>").text("Ethereum"),
        $("<td>").text(ethMoment),
        $("<td>").text("CoinMarketCap"),
        $("<td>").text(cMcpriceETH),
        $("<td>").text(" "),
    )
    $("#valuesFrom2APIs > tbody").append(newRow2);

    let newRow3 = $("<tr>").append(
        $("<td>").text("Litecoin"),
        $("<td>").text(ltcMoment),
        $("<td>").text("CoinMarketCap"),
        $("<td>").text(cMcpriceLTC),
        $("<td>").text(" "),
    )
    $("#valuesFrom2APIs > tbody").append(newRow3);

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
    console.log(response.data.history[290].timestamp);
    console.log(response.data.history[290].price);

    cRtimeBTC = response.data.history[290].timestamp;
    btcMoment = moment(cRtimeBTC);
    cRpriceBTC = Math.round(response.data.history[290].price);
    change24 = response.data.change;

    let newRow = $("<tr>").append(
        $("<td>").text("Bitcoin"),
        $("<td>").text(btcMoment),
        $("<td>").text("CoinRanking"),
        $("<td>").text(cRpriceBTC),
        $("<td>").text(" "),
    );
    // Append the new row to the table
    $("#valuesFrom2APIs> tbody").append(newRow);

    //for second table
    $("#currentBTC").text(cRpriceBTC);
    $("#change24BTC").text(change24);
});



$.ajax({

    url: "https://api.coinranking.com/v1/public/coin/1211/history/24h?base=USD",
    method: "GET"
}).then(function (response) {
    var coinName2 = "Ethereum";
    console.log(coinName2);
    console.log(response.data.change);
    console.log(response.data.history[290]);
    //Ethereum time stamp for coinranking.com and the percent change during last 24hr.
    //Ethereum id= "1211"
    cRtimeETH = response.data.history[290].timestamp;
    ethMoment = moment(cRtimeETH);
    cRpriceETH = Math.round(response.data.history[290].price);
    change24 = response.data.change;

    let newRow = $("<tr>").append(
        $("<td>").text("Ethereum"),
        $("<td>").text(ethMoment),
        $("<td>").text("CoinRanking"),
        $("<td>").text(cRpriceETH),
        $("<td>").text(" "),
    );
    // Append the new row to the table
    $("#valuesFrom2APIs> tbody").append(newRow);

        //for second table
    $("#currentETH").text(cRpriceETH);
    $("#change24ETH").text(change24);
   
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
    cRtimeLTC = response.data.history[290].timestamp;
    ltcMoment = moment(cRtimeLTC);
    cRpriceLTC = Math.round(response.data.history[290].price);
    change24 = response.data.change;

    let newRow = $("<tr>").append(
        $("<td>").text("Litecoin"),
        $("<td>").text(ltcMoment),
        $("<td>").text("CoinRanking"),
        $("<td>").text(cRpriceLTC),
        $("<td>").text(" "),
    );
    // Append the new row to the table
    $("#valuesFrom2APIs> tbody").append(newRow);

    //for second table
    $("#currentLTC").text(cRpriceLTC);
    $("#change24LTC").text(change24);
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
    let change7 = response.data.change;

    $("#change7BTC").text(change7);
});

$.ajax({

    url: "https://api.coinranking.com/v1/public/coin/1211/history/7d?base=USD",
    method: "GET"
}).then(function (response) {
    var coinName2 = "Ethereum 7 days";
    console.log(coinName2);
    console.log(response.data.change);
    console.log(response);
    // console.log(response.data.history[290]);
    let change7 = response.data.change;
    $("#change7ETH").text(change7);
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
    let change7 = response.data.change;
    $("#change7LTC").text(change7);
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
    let change30d = response.data.change;
    $("#change30BTC").text(change30d);
});

$.ajax({

    url: "https://api.coinranking.com/v1/public/coin/1211/history/30d?base=USD",
    method: "GET"
}).then(function (response) {
    var coinName2 = "Ethereum 30 days";
    console.log(coinName2);
    console.log(response.data.change);
    console.log(response);
    // console.log(response.data.history[290]);
    //Ethereum time stamp for coinranking.com and the percent change during last 24hr.
    //Ethereum id= "1211"
    let change30d = response.data.change;
    $("#change30ETH").text(change30d);
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
    let change30d = response.data.change;
    $("#change30LTC").text(change30d);
    // Math.abs
});


