
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


//*************************************24hours***************************************** */

$.ajax({

    url: "https://api.coinranking.com/v1/public/coin/1335/history/24h?base=USD",
    global: true,
    method: "GET"
}).then(function (response) {

    var coinName1 = "Bitcoin";

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

    cRtimeLTC = (response.data.history[280].timestamp);
    ltcMoment = moment(cRtimeLTC);
    cRpriceLTC = response.data.history[280].price;
    change24 = response.data.change;


    let newRow = $("<tr>").append(
        $("<td>").text("Litecoin"),
        $("<td>").text(ltcMoment),
        $("<td>").html("CoinRanking"),
        $("<td>").html(cRpriceLTC).attr("id", "litecoinPriceCR"),
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
    //console.log(response.data.history[290]);
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


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function mean(nums) {
    var sum = 0;
    for (i = 0; i < nums.length; i += 1) {
        sum += parseFloat(nums[i]);
    }
    var average = sum / nums.length;
    console.log(average);
    return average;
}



//function bitcoin() {
$(document).ready(function () {
    historyARR = [];
    console.log(historyARR);
    // Querying the our 1st api coinmarketcap
    var queryURL = "https://api.coinmarketcap.com/v2/ticker/";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // Printing the entire object to console
        // console.log(response.data, 'RESPONSE.DATA.');
        //printing our info console
        console.log(JSON.stringify(response.data["1"]["name"], null, 2), 'RESPONSE');
        console.log(JSON.stringify(response.data["1"]["quotes"]["USD"]["price"], null, 2), 'RESPONSE');
        console.log(JSON.stringify(response.data["1027"]["name"], null, 2), 'RESPONSE');
        console.log(JSON.stringify(response.data["1027"]["quotes"]["USD"]["price"], null, 2), 'RESPONSE');
        console.log(JSON.stringify(response.data["2"]["name"], null, 2), 'RESPONSE');
        console.log(JSON.stringify(response.data["2"]["quotes"]["USD"]["price"], null, 2), 'RESPONSE');


        //bitoin();
        var btcOne = response.data["1"]["quotes"]["USD"]["price"];


        console.log(btcOne);
        var btcPxOne = response.data["1"]["quotes"]["USD"]["price"];
        console.log(btcPxOne);
        var ethOne = response.data["1027"]["name"];
        var ethPxOne = response.data["1027"]["quotes"]["USD"]["price"];
        var ltcOne = response.data["2"]["name"];
        var ltcPxOne = response.data["2"]["quotes"]["USD"]["price"]
        console.log(ltcPxOne);

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


        //});

        $.ajax({
            //url: queryURL,
            url: "https://api.coinranking.com/v1/public/coins",
            method: "GET"
        }).then(function (response) {

console.log(response.data);

            var btcHistory = response.data.coins["0"]["history"]
            var combined = btcHistory.concat(btcPxOne);
            console.log(combined);

            var sample = combined;

            console.log(sample);

            mean(sample);



            var btcTwo = response.data.coins["0"]["symbol"]
            console.log(btcTwo);
            var btcPxTwo = response.data.coins["0"]["price"];
            console.log(btcPxTwo);
            var ethTwo = response.data.coins["1"]["symbol"];
            console.log(ethTwo);
            var ethPxTwo = response.data.coins["1"]["price"];
            console.log(ethPxTwo);
            var ltcTwo = response.data.coins["5"]["symbol"];
            console.log(ltcTwo);
            var ltcPxTwo = response.data.coins["5"]["price"];
            console.log(ltcPxTwo);

            var btcDiff = Math.abs(btcPxOne - btcPxTwo);
            var nBTC = btcDiff.toFixed(4);
            console.log(nBTC);

            var ethDiff = Math.abs(ethPxOne - ethPxTwo);
            var nETH = ethDiff.toFixed(4);
            console.log(nETH);

            var ltcDiff = Math.abs(ltcPxOne - ltcPxTwo);
            var nLTC = ltcDiff.toFixed(4);
            console.log(nLTC);

            let newRowBTC = $("<tr>").append(
                $("<td>").text("Bitcoin"),
                $("<td>").text(btcMoment),
                $("<td>").text("CoinMarketCap"),
                $("<td>").html(btcPxOne).attr("id", "bitcoinPriceCMC"),
                $("<td>").text(" ").attr("id", "bitcoinDiff"),
            );
            //cMcpriceBTC
            // Append the new row to the table
            $("#valuesFrom2APIs > tbody").append(newRowBTC);


            let newRowETH = $("<tr>").append(
                $("<td>").text("Ethereum"),
                $("<td>").text(ethMoment),
                $("<td>").text("CoinMarketCap"),
                $("<td>").html(ethPxOne).attr("id", "ethereumPriceCMC"),
                $("<td>").text(" ").attr("id", "ethereumDiff"),
            )
            $("#valuesFrom2APIs > tbody").append(newRowETH);
            //cMcpriceETH

            let newRowLTC = $("<tr>").append(
                $("<td>").text("Litecoin"),
                $("<td>").text(ltcMoment),
                $("<td>").text("CoinMarketCap"),
                $("<td>").html(ltcPxOne).attr("id", "litecoinPriceCMC"),
                $("<td>").text(" ").attr("id", "litecoinDiff"),
            )
            $("#valuesFrom2APIs > tbody").append(newRowLTC);

            $("#bitcoinDiff").text(nBTC);

            $("#ethereumDiff").text(nETH);

            $("#litecoinDiff").text(nLTC);

        

    });
});
});
