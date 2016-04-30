$(function() {

    $("form").submit(function(e) {
        e.preventDefault();

        $.ajax({

            url: "../backEnd/getData.php",
            type: "POST",
            data: {veg: $("#vegetable").val(),
                range: $("#range").val()},
            dataType: "json",

            success: function(msg) {
                console.log(msg);
                draw(msg.month);
            },

            error: function(msg) {
                console.log(msg);
                alert("error");
            }
        });
    });

    function draw(month) {
    var barChartData = {
        labels: month,
        datasets: [{
        type: 'bar',
              label: "Visitor",
                data: [100, 185, 590, 621, 250, 400, 95],
                fill: false,
                backgroundColor: '#71B37C',
                borderColor: '#71B37C',
                hoverBackgroundColor: '#71B37C',
                hoverBorderColor: '#71B37C',
                yAxisID: 'y-axis-1'
        }, {
            type:'line',
                label: "Sales",
                data: [51, 65, 40, 49, 60, 37, 40],
                fill: false,
                tension:0,
                borderColor: '#EC932F',
                backgroundColor: '#EC932F',
                pointBorderColor: '#EC932F',
                pointBackgroundColor: '#EC932F',
                pointHoverBackgroundColor: '#EC932F',
                pointHoverBorderColor: '#EC932F',
                yAxisID: 'y-axis-2'
        }]
    };

    var ctx = document.getElementById("canvas").getContext("2d");
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            responsive: true,
            tooltips: {
                mode: 'label'
            },
            elements: {
                line: {
                    fill: false
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    gridLines: {
                        display: false
                    },
                    labels: {
                        show: true,
                    }
                }],
                yAxes: [{
                    type: "linear",
                    display: true,
                    position: "left",
                    id: "y-axis-1",
                    gridLines:{
                        display: false
                    },
                    labels: {
                        show:true,
                    }
                }, {
                    type: "linear",
                    display: true,
                    position: "right",
                    id: "y-axis-2",
                    gridLines:{
                        display: false
                    },
                    labels: {
                        show:true,
                    }
                }]
            }
        }
    });
}
});
