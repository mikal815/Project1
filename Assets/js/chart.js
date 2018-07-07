console.log("working");


// Querying our 1st api coinmarketcap
var queryURL = "https://api.coinmarketcap.com/v2/ticker/";
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {

    console.log(response.data, 'RESPONSE.DATA.');
    console.log(JSON.stringify(response.data["1"]["name"], null, 2), 'RESPONSE');
    console.log(JSON.stringify(response.data["1"]["quotes"]["USD"]["price"], null, 2), 'RESPONSE');
    console.log(JSON.stringify(response.data["1027"]["name"], null, 2), 'RESPONSE');
    console.log(JSON.stringify(response.data["1027"]["quotes"]["USD"]["price"], null, 2), 'RESPONSE');
    console.log(JSON.stringify(response.data["2"]["name"], null, 2), 'RESPONSE');
    console.log(JSON.stringify(response.data["2"]["quotes"]["USD"]["price"], null, 2), 'RESPONSE');
    console.log(response.data["1"]["name"], 'RESPONSE');
    //bitoin();
    console.log(response.data["1"]["name"]);

    var myChart = document.getElementById('myChart').getContext('2d');
    var coinCompareChart = new Chart(myChart, {
        type: 'bar',
        data: {
            labels: ["Bitcoin", "Bitcoin Cash", "Mixin", "Maker", "Ethereum"],
            datasets: [{
                label: "Current Price USD",
                data: [response.data["1"]["quotes"]["USD"]["price"], response.data["1831"]["quotes"]["USD"]["price"], response.data["2349"]["quotes"]["USD"]["price"], response.data["1518"]["quotes"]["USD"]["price"], response.data["1027"]["quotes"]["USD"]["price"]],
                backgroundColor: ["rgb(95, 150, 79)", "rgb(251, 255, 211)", "rgb(201, 229, 192)", "rgb(221, 219, 106)", "rgb(118, 170, 117)"]
            }]
        },
        options: {}
    });


    var myChart2 = document.getElementById('myChart2').getContext('2d');
    var coinCompareChart2 = new Chart(myChart2, {
        type: 'pie',
        data: {
            labels: ["Bitcoin", "Bitcoin Cash", "Mixin", "Maker", "Ethereum"],
            datasets: [{
                label: "Current Price USD",
                data: [response.data["1"]["quotes"]["USD"]["price"], response.data["1831"]["quotes"]["USD"]["price"], response.data["2349"]["quotes"]["USD"]["price"], response.data["1518"]["quotes"]["USD"]["price"], response.data["1027"]["quotes"]["USD"]["price"]],
                backgroundColor: ["rgb(95, 150, 79)", "rgb(251, 255, 211)", "rgb(201, 229, 192)", "rgb(221, 219, 106)", "rgb(118, 170, 117)"]
            }]
        },
        options: {}
    });





});


// 2nd api

$.ajax({
    url:"https://api.coinranking.com/v1/public/coins?sort=price&limit=10",
    method: "GET"
  }).then(function(response) {
    console.log(response.data, 'RESPONSE.DATA.');
    console.log(JSON.stringify(response.data["coins"]["0"]["allTimeHigh"].price));
    

    var myChart3 = document.getElementById('myChart3').getContext('2d');
    var coinCompareChart = new Chart(myChart3, {
        type: 'bar',
        data: {
            labels: ["Bitcoin", "Bitcoin Cash", "Maker", "Ethereum"],
            datasets: [{
                label: "All Time High Price USD",
                data: [response.data["coins"]["0"]["allTimeHigh"].price, response.data["coins"]["2"]["allTimeHigh"].price, response.data["coins"]["3"]["allTimeHigh"].price, response.data["coins"]["4"]["allTimeHigh"].price],
                backgroundColor: ["rgb(95, 150, 79)", "rgb(251, 255, 211)", "rgb(221, 219, 106)", "rgb(118, 170, 117)"]
            }]
        },
        options: {}
    });
  });

  

$.ajax({
    //url: queryURL,
    url: "https://api.coinranking.com/v1/public/coin/1335/history/7d?base=USD",
    method: "GET"
 }).then(function (response) {
    var coinName1 = "Bitcoin";

    console.log(response.data, 'RESPONSE.DATA.');
    console.log(coinName1);
    console.log(response.data.change);
    console.log(response.data.history[290]);
 
 });


