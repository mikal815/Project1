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
                label: "Price USD",
                data: [response.data["1"]["quotes"]["USD"]["price"], response.data["1831"]["quotes"]["USD"]["price"], response.data["2349"]["quotes"]["USD"]["price"], response.data["1518"]["quotes"]["USD"]["price"], response.data["1027"]["quotes"]["USD"]["price"]]
            }]
        },
        options: {}
    });




});


