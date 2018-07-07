
//variables
let cMcpriceBTC = "";
let cMcpriceLTC = "";
let cMcpriceETH = "";
let cRpriceBTC = "";

let cRpriceETH = "";
let bitCoin = "";
let etherium = "";
let liteCoin = "";

let cRtimeBTC = "";
let change24 = "";
let cRtimeETH = "";

let cRtimeLTC = "";

// Querying  our 1st API, CoinMarketCap
var queryURL = "https://api.coinmarketcap.com/v2/ticker/?limit=15&sort=rank";

$.ajax({
    url: queryURL,
    global: true,
    method: "GET"
}).then(function (response) {

    // Printing the entire object to console
    console.log(response.data, 'RESPONSE.DATA.');

    let cMcpriceETH = "";

    bitCoin = JSON.stringify(response.data["1"]["name"], 'RESPONSE');
    cMcpriceBTC = response.data[1].quotes.USD.price;

    cMcTimeBTC = JSON.stringify(response.data["1"]["last_updated"], 'RESPONSE');
    btcMoment = moment.unix(cMcTimeBTC);



    ethereum = JSON.stringify(response.data["1027"]["name"], 'RESPONSE');

    cMcpriceETH = response.data[1027].quotes.USD.price
    cMcTimeETH = JSON.stringify(response.data["1027"]["last_updated"], 'RESPONSE');
    ethMoment = moment.unix(cMcTimeETH);


    litecoin = JSON.stringify(response.data["2"]["name"], 'RESPONSE');
    cMcpriceLTC = response.data[2].quotes.USD.price;
    cMcTimeLTC = JSON.stringify(response.data["2"]["last_updated"], 'RESPONSE');
    ltcMoment = moment.unix(cMcTimeLTC);



    let newRowBTC = $("<tr>").append(
        $("<td>").text("Bitcoin"),
        $("<td>").text(btcMoment),
        $("<td>").text("CoinMarketCap"),
        $("<td>").html(cMcpriceBTC).attr("id", "bitcoinPriceCMC"),
        $("<td>").text(" "),
    );
    // Append the new row to the table
    $("#valuesFrom2APIs > tbody").append(newRowBTC);


    let newRowETH = $("<tr>").append(
        $("<td>").text("Ethereum"),
        $("<td>").text(ethMoment),
        $("<td>").text("CoinMarketCap"),
        $("<td>").html(cMcpriceETH).attr("id", "ethereumPriceCMC"),
        $("<td>").text(" "),
    )
    $("#valuesFrom2APIs > tbody").append(newRowETH);

    let newRowLTC = $("<tr>").append(
        $("<td>").text("Litecoin"),
        $("<td>").text(ltcMoment),
        $("<td>").text("CoinMarketCap"),
        $("<td>").html(cMcpriceLTC).attr("id", "litecoinPriceCMC"),
        $("<td>").text(" "),
    )
    $("#valuesFrom2APIs > tbody").append(newRowLTC);

});


//getting prices and times (last24hours) 3 currencies from CoinRanking.com
// also gives 	Percentage of change over the given time period

//*************************************24hours***************************************** */

$.ajax({

    url: "https://api.coinranking.com/v1/public/coin/1335/history/24h?base=USD",
    global: true,
    method: "GET"
}).then(function (response) {
    // console.log(response.data, 'RESPONSE.DATA.');
    //     console.log(response);
    var coinName1 = "Bitcoin";
    console.log(response.data.history);

    cRtimeBTC = response.data.history[280].timestamp;
    btcMoment = moment(cRtimeBTC);
    cRpriceBTC = response.data.history[280].price;
    change24 = response.data.change;

    let newRow = $("<tr>").append(
        $("<td>").text("Bitcoin"),
        $("<td>").text(btcMoment),
        $("<td>").text("CoinRanking"),
        $("<td>").html(cRpriceBTC).attr("id", "bitcoinPriceCR"),
        $("<td>").text(" "),
    );
    // Append the new row to the table
    $("#valuesFrom2APIs> tbody").append(newRow);

    //for second table
    $("#currentBTC").html(cRpriceBTC);
    $("#change24BTC").html(change24);

});



$.ajax({

    url: "https://api.coinranking.com/v1/public/coin/1211/history/24h?base=USD",
    global: true,
    method: "GET"
}).then(function (response) {
    console.log(response.data, 'RESPONSE.DATA.');
    var coinName2 = "Ethereum";

    console.log(coinName2);
    console.log(response.data.change);
    console.log(response.data.history[280]);
    //Ethereum time stamp for coinranking.com and the percent change during last 24hr.
    //Ethereum id= "1211"
    cRtimeETH = (response.data.history[280].timestamp);
    ethMoment = moment(cRtimeETH);
    cRpriceETH = response.data.history[280].price;
    change24 = response.data.change;


    let newRow = $("<tr>").append(
        $("<td>").text("Ethereum"),
        $("<td>").text(ethMoment),
        $("<td>").text("CoinRanking"),
        $("<td>").html(cRpriceETH).attr("id", "ethereumPriceCR"),
        $("<td>").text(" "),
    );
    // Append the new row to the table
    $("#valuesFrom2APIs> tbody").append(newRow);

    //for second table
    $("#currentETH").html(cRpriceETH);
    $("#change24ETH").html(change24);

});

$.ajax({

    url: "https://api.coinranking.com/v1/public/coin/527/history/24h?base=USD",
    global: true,
    method: "GET"
}).then(function (response) {
    var coinName3 = "Litecoin";
    console.log(response.data, 'RESPONSE.DATA.');
    console.log(coinName3);
    console.log(response.data.change);
    console.log(response.data.history[280]);

    //Litecoin time stamp for coinranking.com and the percent change during last 24hr.
    //Litecoin  id= "1211"
    cRtimeLTC = (response.data.history[280].timestamp);
    ltcMoment = moment(cRtimeLTC);
    cRpriceLTC = response.data.history[280].price;
    change24 = response.data.change;


    let newRow = $("<tr>").append(
        $("<td>").text("Litecoin"),
        $("<td>").text(ltcMoment),
        $("<td>").html("CoinRanking"),
        $("<td>").html(cRpriceLTC).attr("id", "ethereumPriceCR"),
        $("<td>").html(" "),
    );
    // Append the new row to the table
    $("#valuesFrom2APIs> tbody").append(newRow);

    //for second table
    $("#currentLTC").html(cRpriceLTC);
    $("#change24LTC").html(change24);

});

//*************************************7days**************************************** */

$.ajax({

    url: "https://api.coinranking.com/v1/public/coin/1335/history/7d?base=USD",
    global: true,
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
    global: true,
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
    global: true,
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
    global: true,
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
    global: true,
    method: "GET"
}).then(function (response) {
    var coinName2 = "Ethereum 30 days";
    console.log(coinName2);
    console.log(response.data.change);
    console.log(response);
    
    //Ethereum time stamp for coinranking.com and the percent change during last 24hr.
    //Ethereum id= "1211"
    let change30d = response.data.change;
    $("#change30ETH").text(change30d);
});

$.ajax({

    url: "https://api.coinranking.com/v1/public/coin/527/history/30d?base=USD",
    global: true,
    method: "GET"
}).then(function (response) {
    var coinName3 = "Litecoin 30 days";
    console.log(coinName3);
    console.log(response.data.change);
    console.log(response);

    let change30d = response.data.change;
    $("#change30LTC").text(change30d);

});

$(document).ajaxStop(function () {


    function FindDiffernce() {
        let numCRbitcoin1 = ($("#currentBTC").text());
        let numCMCbitcoin2 = ($("#bitcoinPriceCMC").text());

        let bitCoinDiff;
         bitCoinDiff = (numCRbitcoin1 - numCMCbitcoin2);
         console.log(numCRbitcoin1);
         console.log(numCMCbitcoin2);

        console.log("This is the difference"  + bitCoinDiff)
    };

    FindDiffernce();

});





