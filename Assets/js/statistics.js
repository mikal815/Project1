function mean(nums) {
    var sum = 0;
    for (i = 0; i < nums.length; i += 1) {
        sum += parseFloat(nums[i]);
    }
    var average = sum / nums.length;
    //**ZACH* */
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
        console.log(response.data, 'RESPONSE.DATA.');
        //printing our info console



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



        //});

        $.ajax({
            //url: queryURL,
            url: "https://api.coinranking.com/v1/public/coins",
            method: "GET"
        }).then(function (response) {

            // Printing the entire object to console
            console.log(response);
            // console.log(response.data.coins["0"]["history"].length);
            console.log(response.data.coins["0"]["symbol"]);
            console.log(response.data.coins["0"]["price"]);
            console.log(response.data.coins["1"]["symbol"]);
            console.log(response.data.coins["1"]["price"]);
            console.log(response.data.coins["5"]["symbol"]);
            console.log(response.data.coins["5"]["price"]);


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

            //**ZACH */
            var btcDiff = Math.abs(btcPxOne - btcPxTwo);
            var n = btcDiff.toFixed(4);
            console.log(n);

            //**ZACH */
            var ethDiff = Math.abs(ethPxOne - ethPxTwo);
            var n = ethDiff.toFixed(4);
            console.log(n);

            //**ZACH */
            var ltcDiff = Math.abs(ltcPxOne - ltcPxTwo);
            var n = ltcDiff.toFixed(4);
            console.log(n);


        }


        );

    });
});