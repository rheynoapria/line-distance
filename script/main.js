
        let myChart = document.getElementById('myChart').getContext('2d');
        
        // Global Options
        Chart.defaults.global.defaultFontFamily = 'Lato';
        Chart.defaults.global.defaultFontSize = 12;
        Chart.defaults.global.defaultFontColor = '#777';
        let x1,x2,y1,y2,xySquare,distance,degree,xyDegree;
        var dfs = [];


         var data = {
             datasets: [{
                 label: 'Distance Line',
                 backgroundColor: [
                     'rgba(255, 99, 132, 0.2)',
                     'rgba(54, 162, 235, 0.2)',
                     'rgba(255, 206, 86, 0.2)',
                     'rgba(75, 192, 192, 0.2)',
                     'rgba(153, 102, 255, 0.2)',
                     'rgba(255, 159, 64, 0.2)'
                 ],
                 fill: false,
                 borderColor: [
                     'rgba(255,99,132,1)',
                     'rgba(54, 162, 235, 1)',
                     'rgba(255, 206, 86, 1)',
                     'rgba(75, 192, 192, 1)',
                     'rgba(153, 102, 255, 1)',
                     'rgba(255, 159, 64, 1)'
                 ],
                 pointStyle: 'circle',
                 steppedLine: false,
                 pointBorderWidth: 5,
                 borderWidth:2,
                 beginAtZero: true,
                 data: [{
                         x: 4,
                         y: 4
                     },
                     {
                         x: 4,
                         y: 4
                     }
                 ]
             }]
        };

        


     function updateData() {

         x1 = parseFloat(document.getElementById('x1Node').value);
         y1 = parseFloat(document.getElementById('y1Node').value);
         x2 = parseFloat(document.getElementById('x2Node').value);
         y2 = parseFloat(document.getElementById('y2Node').value);
        
         dfs = [{
             x: x1,
             y: y1},
             {
                 x: x2,
                 y: y2
             }
         ];

        massPopChart.data.datasets.forEach((dataset) => {
            dataset.data = dfs;
        });
        massPopChart.update();

        xySquare = Math.sqrt((x1-x2)**2+(y1-y2)**2);
        distance = xySquare.toFixed(2);
        document.getElementById("jarak").innerHTML = distance+"cm";

        xyDegree = Math.atan2(y2-y1, x2 - x1)* 180/Math.PI;
        degree = xyDegree.toFixed(3);
        document.getElementById("sudut").innerHTML = degree + "°";

     }

        let massPopChart = new Chart(myChart, {
            type: 'line',
            data:data,
            options: {
                beginAtZero:true,
                scales: {
                    xAxes: [{
                        type: 'linear',
                        position: 'bottom',
                        ticks:{
                            beginAtZero:true,
                            stepSize:0.5,
                            suggestedMax:8
                            
                        }
                    }],
                    yAxes:[{
                        type:'linear',
                        ticks: {
                            beginAtZero:true,
                            stepSize:0.5,
                            suggestedMax:8
                        }
                    }]
                }
            }
        });