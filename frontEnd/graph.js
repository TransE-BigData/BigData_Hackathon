$(function() {

    $("form").submit(function(e) {
        e.preventDefault();

        $.ajax({

            url: "../backEnd/getData.php",
            type: "POST",
            data: {veg1: $("#vegetable1").val(),
                veg2: $("#vegetable2").val(),
                range: $('input[name=range]:checked').val(),
                month: $('select[name=month]').val()
            },
            dataType: "json",

            success: function(msg) {
                console.log(msg);
                if ($('input[name=range]:checked').val() == "year") {
                    draw("canvas", msg);
                }
                else {
                    draw("canvas", msg.byMonth);
                    draw("canvas2", msg);
                }
            },

            error: function(msg) {
                console.log(msg);
                alert("error");
            }
        });
    });

    function draw(place, alldata) {
        var barChartData = {
            labels: alldata.x_axis,
            datasets: [{
                type: 'bar',
                  label: "胡瓜平均量",
                    data: alldata.cucumber_trade,
                    fill: false,
                    backgroundColor: '#71B37C',
                    borderColor: '#71B37C',
                    hoverBackgroundColor: '#71B37C',
                    hoverBorderColor: '#71B37C',
                    yAxisID: 'y-axis-1'
                }, {
                type: 'bar',
                  label: "菜豆平均量",
                    data: alldata.bean_trade,
                    fill: false,
                    backgroundColor: '#71B37C',
                    borderColor: '#71B37C',
                    hoverBackgroundColor: '#71B37C',
                    hoverBorderColor: '#71B37C',
                    yAxisID: 'y-axis-1'
                }, {
                type:'line',
                    label: "胡瓜平均價",
                    data: alldata.cucumber_price,
                    fill: false,
                    tension:0,
                    borderColor: '#EC932F',
                    backgroundColor: '#EC932F',
                    pointBorderColor: '#EC932F',
                    pointBackgroundColor: '#EC932F',
                    pointHoverBackgroundColor: '#EC932F',
                    pointHoverBorderColor: '#EC932F',
                    yAxisID: 'y-axis-2'
                }, {
                type:'line',
                    label: "菜豆平均價",
                    data: alldata.bean_price,
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

        var ctx = document.getElementById(place).getContext("2d");
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