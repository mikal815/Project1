//***For Future Use: All math and etc live here *///

function mean(nums) {
    var sum = 0;
    for (i = 0; i < nums.length; i += 1) {
        sum += parseFloat(nums[i]);
    }
    var average = sum / nums.length;
   
    return average;
}


$(document).ready(function () {
    historyARR = [];
  
    var queryURL = "https://api.coinmarketcap.com/v2/ticker/";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var btcOne = response.data["1"]["quotes"]["USD"]["price"];

        var btcPxOne = response.data["1"]["quotes"]["USD"]["price"];
        var ethOne = response.data["1027"]["name"];
        var ethPxOne = response.data["1027"]["quotes"]["USD"]["price"];
        var ltcOne = response.data["2"]["name"];
        var ltcPxOne = response.data["2"]["quotes"]["USD"]["price"]
      
        $.ajax({
            url: "https://api.coinranking.com/v1/public/coins",
            method: "GET"
        }).then(function (response) {

            var btcHistory = response.data.coins["0"]["history"]
            var combined = btcHistory.concat(btcPxOne);

            var sample = combined;

            mean(sample);

            var btcTwo = response.data.coins["0"]["symbol"]
            var btcPxTwo = response.data.coins["0"]["price"];
            var ethTwo = response.data.coins["1"]["symbol"];
            var ethPxTwo = response.data.coins["1"]["price"];
            var ltcTwo = response.data.coins["5"]["symbol"];
            var ltcPxTwo = response.data.coins["5"]["price"];

            var btcDiff = Math.abs(btcPxOne - btcPxTwo);
            var n = btcDiff.toFixed(4);

            var ethDiff = Math.abs(ethPxOne - ethPxTwo);
            var n = ethDiff.toFixed(4);
            
            var ltcDiff = Math.abs(ltcPxOne - ltcPxTwo);
            var n = ltcDiff.toFixed(4);
            console.log(n);


        }


        );

    });
});