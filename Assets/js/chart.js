console.log("working");

var myChart = document.getElementById('myChart').getContext('2d');
var coinCompareChart = new Chart(myChart, {
    type: 'bar',
    data: {
        labels: ["Bitcoin", "alt", "alt", "alt", "alt"],
        datasets: [{
            label: "rate",
            data: [300, 400, 250, 300, 360]
        }]
    },
    options: {}
});