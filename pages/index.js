import React, { useState, useEffect } from 'react';
import pptxgen from "pptxgenjs"

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import solidGauge from 'highcharts/modules/solid-gauge';
import highchartsMore from 'highcharts/highcharts-more';
import AnnotationsFactory from "highcharts/modules/annotations"
import variablePie from "highcharts/modules/variable-pie"
import HC_exporting from 'highcharts/modules/exporting'
import networkGraphs from "highcharts/modules/networkgraph"
if (typeof Highcharts === 'object') {
    highchartsMore(Highcharts)
solidGauge(Highcharts);
AnnotationsFactory(Highcharts);
variablePie(Highcharts)
networkGraphs(Highcharts)
HC_exporting(Highcharts)


}
const days = []
const lastDay = 29
for(let i=0; i<=lastDay;i++){
  days.push(`${(i*2)+1} jun`)
}
const chart1 = {
      exporting: {
        chartOptions: { // specific options for the exported image
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true
                    }
                }
            }
        },
        fallbackToExportServer: false
    },
    exporting: {
        chartOptions: { // specific options for the exported image
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true
                    }
                }
            }
        },
        fallbackToExportServer: false
    },
    chart: {
        type: 'solidgauge'
    },

    title: null,

    pane: {
        // center: ['50%', '85%'],
        startAngle: 0,
        endAngle: 360,
        background: {
            backgroundColor: '#EEE',
            innerRadius: '99%',
            outerRadius: '100%',
            shape: 'arc'
        }
    },

    yAxis: {
        min: 0,
        max: 100,
        stops: [
            [0.01, '#c00000'], // green
            // [0.6, '#DDDF0D'], // yellow
            // [0.9, '#DF5353'] // red
        ],
        lineWidth: 0,
        minorTickInterval: null,
        tickAmount: 0,
        title: {
            y: -10
        },
        labels: {
            y: 6
        }
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                y: -50,
                borderWidth: 0,
                useHTML: true
            }
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Load',
        data: [{
            radius: '104%',
            innerRadius: '94%',
            y: 20.35
        }],
        dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:55px;color:' +
                ('#c00000') + '">{y}%</span><br/>' +
                   '<span style="font-size:32px;color:#c00000">negativas</span></div>'
        },
        tooltip: {
            valueSuffix: ' %'
        }
    }]
};
const chart2 = {
      exporting: {
        chartOptions: { // specific options for the exported image
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true
                    }
                }
            }
        },
        fallbackToExportServer: false
    },

    chart: {
        type: 'solidgauge'
    },

    title: null,

    pane: {
        // center: ['50%', '85%'],
        // size: '140%',
        startAngle: 0,
        endAngle: 360,
        background: {
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
            innerRadius: '99%',
            outerRadius: '100%',
            shape: 'arc'
        }
    },

    // tooltip: {
    //     enabled: false
    // },

    // the value axis
    yAxis: {
        min: 0,
        max: 100,
        stops: [
            [0.01, '#ffa300'], // green
            // [0.6, '#DDDF0D'], // yellow
            // [0.9, '#DF5353'] // red
        ],
        lineWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: {
            y: -10
        },
        labels: {
            y: 6
        }
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                y: -50,
                borderWidth: 0,
                useHTML: true
            }
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Load',
        data: [{
            radius: '104%',
            innerRadius: '94%',
            y: 48.35
        }],
        dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:55px;color:' +
                ('#ffa300') + '">{y}%</span><br/>' +
                   '<span style="font-size:32px;color:#ffa300">neutras</span></div>'
        },
        tooltip: {
            valueSuffix: ' %'
        }
    }]
};
const chart3 = {
      exporting: {
        chartOptions: { // specific options for the exported image
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true
                    }
                }
            }
        },
        fallbackToExportServer: false
    },

    chart: {
        type: 'solidgauge'
    },

    title: null,

    pane: {
        // center: ['50%', '85%'],
        // size: '140%',
        startAngle: 0,
        endAngle: 360,
        background: {
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
            innerRadius: '99%',
            outerRadius: '100%',
            shape: 'arc'
        }
    },

    // tooltip: {
    //     enabled: false
    // },

    // the value axis
    yAxis: {
        min: 0,
        max: 100,
        stops: [
            [0.01, '#76bf00'], // green
            // [0.6, '#DDDF0D'], // yellow
            // [0.9, '#DF5353'] // red
        ],
        lineWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: {
            y: -10
        },
        labels: {
            y: 6
        }
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                y: -50,
                borderWidth: 0,
                useHTML: true
            }
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Load',
        data: [{
            radius: '104%',
            innerRadius: '94%',
            y: 80.35
        }],
        dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:55px;color:' +
                ('#76bf00') + '">{y}%</span><br/>' +
                   '<span style="font-size:32px;color:#76bf00">positivas</span></div>'
        },
        tooltip: {
            valueSuffix: ' %'
        }
    }]
};
const chart4 = {
    
      exporting: {
        chartOptions: { // specific options for the exported image
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: false
                    }
                }
            }
        },
        fallbackToExportServer: false
    },
    annotations: [{
        labels: [
            {
            point: {
                x: 3,
                y: 9.2,
                xAxis: 0,
                yAxis: 0
            },
            text: "Destaque do monitoramento explicado brevemente. Lorem ipsum dolor sit amet."
        },
            {
            point: {
                x:800,
                y: 15,
                // xAxis: 0,
                yAxis: 0
            },
            text: "Destaque do monitoramento explicado brevemente. Lorem ipsum dolor sit amet."
        },
    ]
    }],
  chart: {
      type: 'line'
  },
  title: {
      text: ''
  },
  legend: {
    enabled: false
},
  xAxis: {
      categories: days,
      alternateGridColor: '#e7e7e7'
  },
  yAxis: {
    // alternateGridColors:"#00000017",

    startOnTick: true,
    endOnTick: false,
    maxPadding: 0.35,
    title: {
        text: null
    },
    labels: {
        format: '{value} k'
    },
   
  },
  
  series: [{
      data: [1, 0, 4, 10, 10 ,12, 12, 13, 14, 15, 13, 12, 9, 8, 9, 10]
  }]
}
const chart5 =  {
    title:{
        text:""
    },
    chart: {
        type: 'column'
    },
  colors: ["#737373","#737373",  "#adcb27"],
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
   yAxis:{
       title: ''
   },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [
        {
            name: "Browsers",
            colorByPoint: true,
            data: [
                {
                    name: "Mar",
                    y: 3.8,
                },
                {
                    name: "Abr",
                    y: 4.4,
                },
                {
                    name: "Média",
                    y: 4.1,
                }
            ]
        }
    ],

}
const chart6 = {
      exporting: {
        chartOptions: { // specific options for the exported image
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true
                    }
                }
            }
        },
        fallbackToExportServer: false
    },
    chart: {
        zoomType: 'xy',
        spacingTop : 40 , 
    },
    title: {
        text: 'COMPARATIVO MENSAL',
        align: 'left',
        y:-20
    },
    colors:["#378399", "#a4a8b9"],
    plotOptions: {
        column: {
            dataLabels: {
                enabled: true,
                color:"#378399"
            }
        },
        series: {
            pointPadding: 0,
            pointWidth:52
        }
    },
 
    xAxis: [{
        categories: ['Jan 2020', 'Feb 2020', 'Mar 2020', 'Apr 2020', 'May 2020', 'Jun 2020'],
        crosshair: true,

    }],
    yAxis: [{ // Primary yAxis
        title:"",

        labels: {
            format: '{value} MM',
           style:{
            color:"#a4a8b9",

           }
        },
        opposite: true

    }, { // Secondary yAxis
        // gridLineWidth: 0,
        title:"",
      
        labels: {
            format: '{value} K',
            style:{
                color:"#378399",
    
               }
        }

    }, ],
    tooltip: {
        shared: true
    },
    legend: {
        layout: 'horizontal',
        align: 'left',
        x: 80,
        verticalAlign: 'top',
        y: 0,
        floating: true,
      
    },
    series: [{
        name: 'menções',
        type: 'column',
        yAxis: 1,
        data: [2.02, 1.80, 1.90, 5.11, 2.01, 1.89],
        tooltip: {
            valueSuffix: ' K'
        }

    }, {
        name: 'alcance',
        type: 'column',
        yAxis: 0,
        data: [2.02, 3.80, 8.90, 4.11, 3.01, 3.89],
        marker: {
            enabled: false
        },
        dashStyle: 'shortdot',
        tooltip: {
            valueSuffix: ' MM'
        }

    }],
    
}
const chart7 = {
      exporting: {
        chartOptions: { // specific options for the exported image
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: false
                    }
                }
            }
        },
        fallbackToExportServer: false
    },
    annotations: [{
        labels: [
            {
            point: {
                x: 3,
                y: 9.2,
                xAxis: 0,
                yAxis: 0
            },
            text: "Concorrente promove campanha"
        },
            {
            point: {
                x:800,
                y: 15,
                // xAxis: 0,
                yAxis: 0
            },
            text: "Concorrente promove campanha"
        },
    ]
    }],
  chart: {
      type: 'line'
  },
  title: {
      text: ''
  },
  xAxis: {
      categories: days
  },
  yAxis: {
    startOnTick: true,
    endOnTick: false,
    maxPadding: 0.35,
    title: {
        text: null
    },
    labels: {
        format: '{value} k'
    },
    accessibility: {
        description: 'Elevation',
        rangeDescription: 'Range: 0 to 1,553 meters'
    }
  },
  
  series: [{
      data: [1, 0, 4, 10, 10 ,12, 12, 13, 14, 15, 13, 12, 9, 8, 9, 10]
  }]
}
const chart8 = {
      exporting: {
        chartOptions: { // specific options for the exported image
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: false
                    }
                }
            }
        },
        fallbackToExportServer: false
    },
    title: {
        text: ''
    },

    xAxis: {
        alternateGridColor: '#e7e7e7',

       categories: ["15 jun", "16 jun", "17 jun", "18 jun", "19 jun", "20 jun", "21 jun", "23 jun"]
    },

    legend: {
        layout: 'horizontal',
        align: 'left',
        verticalAlign: 'top'
    },

    series: [{
        name: 'série 1',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'série 2',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'série 3',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: 'série 4',
        data: [10000, 12232, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
        name: 'série 5',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }],

    
    annotations: [{
        labels: [
            {
            point: {
                x: 240,
                y: 50000,
                yAxis: 0
            },
            text: "Destaque do monitoramento explicado brevemente. Lorem ipsum dolor sit amet."
        },
            {
            point: {
                x:710,
                y: 95000,
                // xAxis: 0,
                yAxis: 0
            },
            text: "Destaque do monitoramento explicado brevemente. Lorem ipsum dolor sit amet."
        },
            {
            point: {
                x:960,
                y: 25000,
                // xAxis: 0,
                yAxis: 0
            },
            text: "Destaque do monitoramento explicado brevemente. Lorem ipsum dolor sit amet."
        },
    ]
    }],

}

const chart9 = {
      exporting: {
        chartOptions: { // specific options for the exported image
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true
                    }
                }
            }
        },
        fallbackToExportServer: false
    },
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    colors:[ "#c00000","#ef7604", "#ffa300","#00bf4e","#76bf00"],
    title: {
        text: 'SENTIMENT SCORE',
        align: 'center',
        verticalAlign: 'middle',
        y: -150
    },
    tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: false,
                
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%'],
            size: '110%'
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '80%',
        data: [
            ['Chrome', 20],
            ['Firefox', 20],
            ['Internet Explorer', 20],
            ['Edge', 20],
            ['Safari', 20],
            
        ]
    }]
}
  
const chart10 = {
      exporting: {
        chartOptions: { // specific options for the exported image
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true
                    }
                }
            }
        },
        fallbackToExportServer: false
    },
    chart: {
        type: 'networkgraph',
        height: '100%'
    },
    title: {
        text: ''
    },
   
    plotOptions: {
        networkgraph: {
            keys: ['from', 'to'],
            layoutAlgorithm: {
                enableSimulation: false,
                friction: -0.9,
                linkLength: 18
            },
            marker: {
                radius: 10,
            }
           
        }
 
    },
    series: [{
        nodes:[
            {
                id: 'TERMOS FILTRADOS',
                dataLabels: {
                    enabled: true
                },
                marker: {
                    radius: 35,
                    fillColor: "#00bf4e"
                }
            },
            {
                id: 'COMPRA',
                dataLabels: {
                    enabled: true
                },
                marker: {
                    radius: 30,
                    fillColor: "#00bf4e"
                }
            },
            {
                id: 'NATURA',
                dataLabels: {
                    enabled: true
                },
                marker: {
                    radius: 20,
                    fillColor: "#00bf4e"
                }
            },
            {
                id: 'PRODUTO',
                dataLabels: {
                    enabled: true
                },
                marker: {
                    radius: 20,
                    fillColor: "#00bf4e"
                }
            },
            {
                id: 'MULHERES',
                dataLabels: {
                    enabled: true
                },
                marker: {
                    radius: 20,
                    fillColor: "#00bf4e"
                }
            },
            {
                id: 'LOJA',
                dataLabels: {
                    enabled: true
                },
                marker: {
                    radius: 20,
                    fillColor: "#00bf4e"
                }
            },
            {
                id: 'ANIVERSÁRIO NATURA',
                dataLabels: {
                    enabled: true
                },
                marker: {
                    radius: 20,
                    fillColor: "#00bf4e"
                }
            },
            {
                id: 'LUNA ABSOLUTA',
                dataLabels: {
                    enabled: true
                },
                marker: {
                    radius: 20,
                    fillColor: "#00bf4e"
                }
            },
            {
                id: 'LUNA',
                dataLabels: {
                    enabled: true
                },
                marker: {
                    radius: 20,
                    fillColor: "#00bf4e"
                }
            },
        ],
        dataLabels: {
            enabled: true,
            linkFormat: ''
        },
        id: 'lang-tree',
        data: [
            ['TERMOS FILTRADOS', 'COMPRA'],
            ['TERMOS FILTRADOS', 'NATURA'],
            ['TERMOS FILTRADOS', 'PRODUTO'],
            ['TERMOS FILTRADOS', 'MULHERES'],
            ['TERMOS FILTRADOS', 'LOJA'],
            ['TERMOS FILTRADOS', 'ANIVERSÁRIO NATURA'],
            ['TERMOS FILTRADOS', 'LUNA ABSOLUTA'],
            ['TERMOS FILTRADOS', 'LUNA'],
            ['LUNA ABSOLUTA', 'NÃO CONSIGO LER 1'],
            ['LUNA ABSOLUTA', 'NÃO CONSIGO LER 36'],
            ['MULHERES', 'NÃO CONSIGO LER 37'],
            ['MULHERES', 'NÃO CONSIGO LER 38'],
            ['NÃO CONSIGO LER 38', 'NÃO CONSIGO LER 39'],
            ['NÃO CONSIGO LER 38', 'NÃO CONSIGO LER 47'],

            ['PRODUTO', 'NÃO CONSIGO LER 4'],
            ['PRODUTO', 'NÃO CONSIGO LER 5'],
            ['NATURA', 'NÃO CONSIGO LER 6'],
            ['NATURA', 'NÃO CONSIGO LER 7'],
            ['NÃO CONSIGO LER 6', 'NÃO CONSIGO LER 9'],
            ['NÃO CONSIGO LER 6', 'NÃO CONSIGO LER 10'],
            ['LUNA A', 'NÃO CONSIGO LER 12'],
            ['LUNA A', 'NÃO CONSIGO LER 13'],
            ['NÃO CONSIGO LER 7', 'NÃO CONSIGO LER 15'],
            ['COMPRA', 'NÃO CONSIGO LER 17'],
            ['COMPRA', 'NÃO CONSIGO LER 18'],
            ['NÃO CONSIGO LER 18', 'NÃO CONSIGO LER 19'],
            ['NÃO CONSIGO LER 18', 'NÃO CONSIGO LER 20'],
            ['LUNA', 'LUNA A'],
            ['LUNA', 'LUNA B'],
            ['ANIVERSÁRIO NATURA', 'NÃO CONSIGO LER 22'],
            ['ANIVERSÁRIO NATURA', 'NÃO CONSIGO LER 23'],
            ['NÃO CONSIGO LER 23', 'NÃO CONSIGO LER 84'],
            ['NÃO CONSIGO LER 23', 'NÃO CONSIGO LER 85'],
            ['NÃO CONSIGO LER 22', 'NÃO CONSIGO LER 86'],
            ['NÃO CONSIGO LER 22', 'NÃO CONSIGO LER 87'],
            ['LOJA', 'NÃO CONSIGO LER 34'],
            ['NÃO CONSIGO LER 1', 'NÃO CONSIGO LER 35'],
            ['NÃO CONSIGO LER 1', 'NÃO CONSIGO LER 83'],
            ['NÃO CONSIGO LER 36', 'NÃO CONSIGO LER 40'],
            ['NÃO CONSIGO LER 36', 'NÃO CONSIGO LER 41'],
            
            ['NÃO CONSIGO LER 37', 'NÃO CONSIGO LER 45'],
            ['NÃO CONSIGO LER 37', 'NÃO CONSIGO LER 46'],
            ['NÃO CONSIGO LER 39', 'NÃO CONSIGO LER 48'],
            ['NÃO CONSIGO LER 39', 'NÃO CONSIGO LER 49'],
          
            ['NÃO CONSIGO LER 4', 'NÃO CONSIGO LER 56'],
            ['NÃO CONSIGO LER 4', 'NÃO CONSIGO LER 57'],
            ['NÃO CONSIGO LER 5', 'NÃO CONSIGO LER 60'],
            ['NÃO CONSIGO LER 5', 'NÃO CONSIGO LER 61'],
            ['LUNA B', 'NÃO CONSIGO LER 73'],
            ['LUNA B', 'NÃO CONSIGO LER 2'],
            ['NÃO CONSIGO LER 17', 'NÃO CONSIGO LER 74'],
            ['NÃO CONSIGO LER 17', 'NÃO CONSIGO LER 75'],
            ['NÃO CONSIGO LER 20', 'NÃO CONSIGO LER 77'],
            ['NÃO CONSIGO LER 20', 'NÃO CONSIGO LER 78'],
            ['NÃO CONSIGO LER 19', 'NÃO CONSIGO LER 81'],
            ['NÃO CONSIGO LER 19', 'NÃO CONSIGO LER 82'],
         
      
        ]
    }]
}
const chart11 = {
      exporting: {
        chartOptions: { // specific options for the exported image
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true
                    }
                }
            }
        },
        fallbackToExportServer: false
    },

    chart: {
        type: 'bubble',
        plotBorderWidth: 1,
        zoomType: 'xy'
    },
    colors:["#aa59ff4b", "#1d27514b", "#d1d3db", ""],
   
    legend: {
        enabled: false
    },
    title: {
        text: ''
    },
    accessibility: {
        point: {
            valueDescriptionFormat: '{index}. {point.name}, fat: {point.x}g, sugar: {point.y}g, obesity: {point.z}%.'
        }
    },

    xAxis: {
      alternateGridColor: '#e7e7e7',

        gridLineWidth: 1,
        title: {
            text: 'Daily fat intake'
        },
        labels: {
            format: '{value}'
        },

        
    },

    yAxis: {
        startOnTick: false,
        endOnTick: false,
        title: {
            text: 'Daily sugar intake'
        },
        labels: {
            format: '{value}'
        },
        maxPadding: 0.2,
   
        accessibility: {
            rangeDescription: 'Range: 0 to 125.'
        }
    },

 
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },

    series: [{
        data: [
            { x: 0.01, y: 0, z: 0.001, name: '', },
            { x: 100, y: 0, z: 0.001, name: '', },
            { x: 15, y: 75, z: 13.8, name: '@revistajacaraipe', },
            { x: 15, y: 50, z: 14.7, name: '@naturabrooficial', },
            { x: 20, y: 25, z: 15.8, name: '@midianinja', },
            { x: 25, y: 75, z: 12, name: '@natalynery', },
            { x: 30, y: 25, z: 11.8, name: 'revistajacaraipe', },
            { x: 35, y: 50, z: 16.6, name: 'naturabrooficial', },
            { x: 35, y: 100, z: 14.5, name: 'midianinja', },
            { x: 45, y: 75, z: 10, name: 'natalynery', },
            { x: 55, y: 35, z: 24.7, name: 'revistajacaraipe', },
            { x: 65, y: 50, z: 10.4, name: 'naturabrooficial', },
            { x: 65, y: 75, z: 16, name: 'midianinja', },
            { x: 75, y: 50, z: 35.3, name: 'natalynery', },
            { x: 85, y: 85, z: 28.5, name: 'HnatalyneryU', },
           
        ]
    }]

}
const chart12 = {
      exporting: {
        chartOptions: { // specific options for the exported image
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: false
                    }
                }
            }
        },
        fallbackToExportServer: false
    },
    chart: {
        type: 'bar',
       
    },
    title: {
        text: ''
    },
    colors:[ "#f3a201", "#ff0000","#76bf00",],
    xAxis: {
        categories: ['TERMO','TERMO','TERMO','TERMO','TERMO','TERMO','TERMO','TERMO','TERMO','TERMO','TERMO','TERMO','TERMO','TERMO','TERMO',]
    },
    yAxis: {
        min: 0,
      
    },
    legend: {
        layout: 'horizontal',
        align: 'left',
        x: 80,
        verticalAlign: 'top',
        y: -17,
        floating: true,
      
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'positivo',
        data: [20, 18, 16, 16, 15, 14, 13, 12, 12, 10, 8, 7, 7, 6, 2]
    }, {
        name: 'negativo',
        data: [20, 18, 16, 16, 15, 14, 13, 12, 12, 10, 8, 7, 7, 6, 2]
    }, {
        name: 'neutro',
        data: [20, 18, 16, 16, 15, 14, 13, 12, 12, 10, 8, 7, 7, 6, 2]
    }]
}
const chart13 = {
      exporting: {
        chartOptions: { // specific options for the exported image
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: false
                    }
                }
            }
        },
        fallbackToExportServer: false
    },
    chart: {
        type: 'bar'
    },
    title: {
        text: ''
    },
    colors:[ "#f3a201ff", "#ff0000ff","#76bf00ff",],
    xAxis: {
        categories: ["Rio de Janeiro", "São Gonçalo", "Santarém", "Valinhos", "Sete Lagoas", "Porto Alegre", "Cabo de Santo", "Rio Branco", "Manaus", "Natal"]
    },
    yAxis: {
        min: 0,
      
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'positivo',
        data: [20, 18, 16, 16, 15, 14, 13, 12, 12, 10]
    }, {
        name: 'negativo',
        data: [20, 18, 16, 16, 15, 14, 13, 12, 12, 10]
    }, {
        name: 'neutro',
        data: [20, 18, 16, 16, 15, 14, 13, 12, 12, 10]
    }]
}
const chart14 = {
      exporting: {
        chartOptions: { // specific options for the exported image
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: false
                    }
                }
            }
        },
        fallbackToExportServer: false
    },
    colors:[ "#c00000","#76bf00"],

    annotations: [{
        labels: [
            {
            point: {
                x: 17,
                y: 180,
                xAxis: 0,
                yAxis: 0
            },
            text: "Concorrente promove campanha"
        },
            {
            point: {
                x:22,
                y: 230,
                xAxis: 0,
                yAxis: 0
            },
            text: "Concorrente promove campanha"
        },
    ]
    }],
    chart: {
        type: 'area'
    },
 
    title: {
        text: ''
    },
  
 
    xAxis: {
      alternateGridColor: '#e7e7e7',

        allowDecimals: false,
        labels: {
            formatter: function () {
                return this.value + " Ago"; // clean, unformatted number for year
            }
        },
        accessibility: {
            rangeDescription: 'Range: 16 to 30.'
        }
    },
    yAxis: {
        title: {
            text: 'Nuclear weapon states'
        },
        labels: {
            formatter: function () {
                return this.value 
            }
        }
    },
    tooltip: {
        pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    },
    plotOptions: {
        area: {
            pointStart: 16,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    series: [{
        name: 'USA',
        data: [200, 180, 190, 250, 300, 290, 287, 276, 200, 150]
    }, {
        name: 'USSR/Russia',
        data: [150, 130, 140, 190, 200, 267, 265, 260, 229, 180]
    }]
}



let pres = new pptxgen();

// Slide 1
let slide = pres.addSlide();

let textboxText = "RELATORIA";
let textboxOpts = { x: 0.1, y: 2.7, fontSize:18, fontFace: "Open Sans" , color: 'FFFF00', fill: { color:'F1F1F1' }, align: "right",  bold:true };
slide.addText(textboxText, textboxOpts);
slide.addText("LISTENING MODEL", { x: 0.3, y: 3, fontSize:14, fontFace: "Open Sans" , color: 'FFFFFF', fill: { color:'F1F1F1' }, align:  "right" });
slide.background = {fill: "37819a"}
slide.addImage({path:"https://i.ibb.co/VDZGTwB/backgroundimg.jpg", w:"42%", h:"100%"})
slide.addImage({path:"https://i.ibb.co/VtZqzz7/stilingue.png",w:1.8, h:1.85, x:"33%", y:"36%"})

//Slide 2
let slide2 = pres.addSlide();
slide2.background = {path: "https://i.ibb.co/dDyTkHj/backgroundimg2.jpg"}

let titleSlide2 = "Agenda";
let contentSumary = ["METODOLOGIA", "DESTAQUES", "OVERVIEW", "MINHA CATEGORIA", "MINHA MARCA", "MEUS COMPARÁVEIS", "PRÓXIMOS PASSOS"]
const sumarySpace = 0.4
slide2.addText(titleSlide2, { x: 0.5, y: 1.9, fontSize:68, fontFace: "Open Sans" , color: '3E909A', fill: { color:'F1F1F1' }, align: "left",  bold:true });
slide2.addText(titleSlide2, { x: 2.8, y: 2.18, fontSize:25, fontFace: "Open Sans" , color: 'FFFFFF', fill: { color:'F1F1F1' }, align: "left",  bold:true });
contentSumary.map(content=>{
  const id = contentSumary.indexOf(content)
  slide2.addText(content, { x:4.8, y:2.2+(id*sumarySpace), fontSize:13, fontFace: "Open Sans" , color: 'FFFFFF', align: "left", breakline:true})
})

//Slide 3
sumary(0, "Agenda")
// sumary(1, "Cockpit")

//Slide 4
let slide4 = pres.addSlide()
makeLayout(slide4, null)

slide4.addText("Contexto", { x: 1.3, y: 1, fontSize:40, fontFace: "Open Sans" , color: '1d2751', fill: { color:'1d2751' }, align: "left",  bold:true });
slide4.addText("monitorado considerado", { x: 1.7, y: 1.4, fontSize:18, fontFace: "Open Sans" , color: '1d2751', fill: { color:'1d2751' }, align: "left",  bold:true });
slide4.addImage({path: "https://i.ibb.co/S5ML9CF/detalhe1.png", x:0.6, y:0.9})
slide4.addShape(pres.ShapeType.rect, {fill:{color:"F0F1F2"}, w:"100%", h:"41%", x:0, y:2.8})

slide4.addShape(pres.ShapeType.rect, {fill:{color:"1d2751"}, w:"0.1%", h:"66%", x:1.1, y:1.4})
const content1Slide4 = "Esta análise tem como foco as menções coletadas em plataformas sociais e portais de notícias online a respeito de CONTEXTO com foco em GRUPO1, GRUPO2, GRUPO3 e categorizações TEMA1, TEMA2, TEMA3."
const content2Slide4 = "Ao analisarmos a categoria, observamos o contexto de busca geral, englobando todos os termos de busca e extraindo destaques do conjunto total de menções coletadas para encontrar sinergias que ajudem na fotografia do setor como um todo. Pode ser uma seção ausente de alguns relatórios a depender da característica do cliente e da estrutura de busca."
const content3Slide4 = "Foco na marca/termos principal da coleta, comparando-a com ela mesma em termos de performance. Os temas destacados aqui são prioritariamente de interesse da(s) marca(s) do cliente."
const content4Slide4 = "Após uma análise focada na marca e seus atributos advindos do listening, extrapolamos as comparações para observar como os concorrentes / comparáveis se saíram em métricas similares a fim de relativizar o ponto de vista anterior."
slide4.addText(content1Slide4, { x: 1.7, y: 2.2, w:"38%", fontSize:10, fontFace: "Open Sans" , color: '1d2751', fill: { color:'1d2751' }, align: "left" })

const paragraphsSlide4 = [
  {title:"MINHA CATEGORIA", content: content2Slide4, space:0, y:4.15}, 
  {title:"MINHA MARCA", content:content3Slide4, space:2.5, y:3.8},
  {title:"MEUS COMPARÁVEIS", content:content4Slide4, space:5, y:3.9}
]

paragraphsSlide4.map(({title, content, space, y})=>{
  makeSlide4(title, content, space, y)
})

function makeSlide4(title, content, space, y){
  slide4.addText(title, { x: 1.8 + space, y: 3.2, fontSize:8, fontFace: "Open Sans" , color: '1d2751', fill: { color:'1d2751' }, align: "left", bold:true })
  slide4.addText(content, { x: 1.8 + space, y,w:"22%", fontSize:8, fontFace: "Open Sans" , color: '1d2751', fill: { color:'1d2751' }, align: "left" })
  slide4.addShape(pres.ShapeType.rect, {fill:{color:"1d2751"}, w:"0.1%", h:"31%", x:1.8 + space, y:3.2})
  slide4.addShape(pres.ShapeType.ellipse, {fill: { type: "solid", color: "F0F1F2" } ,w:"1%", h:"2%",x:1.75 + space, y:3.3})
}

slide4.addText("CANAIS MONITORADOS", { x: 6.5, y: 1.3, fontSize:7, fontFace: "Open Sans" , color: '36819a', fill: { color:'36819a' }, align: "left", bold:true })
slide4.addText("Twitter, Facebook, Instagram, YouTube, Blogs, Portais, etc", {w:"20%", x: 6.5, y: 1.5, fontSize:8, fontFace: "Open Sans" , color: '000000', fill: { color:'000000' }, align: "left"})
slide4.addText("PERÍODO DESSA ANÁLISE", { x: 6.5, y: 2, fontSize:7, fontFace: "Open Sans" , color: '36819a', fill: { color:'36819a' }, align: "left", bold:true })
slide4.addText("Auto preenchido", {w:"20%", x: 6.5, y: 2.15, fontSize:8, fontFace: "Open Sans" , color: '000000', fill: { color:'000000' }, align: "left"})

//Slide 5
sumary(1, "Agenda")


//Slide6
let slide6 = pres.addSlide()
makeLayout(slide6)
slide6.addText("Destaques", { x: 1.3, y: 1, fontSize:40, fontFace: "Open Sans" , color: '1d2751', fill: { color:'1d2751' }, align: "left",  bold:true });
slide6.addText("e principais insights", { x: 1.7, y: 1.4, fontSize:18, fontFace: "Open Sans" , color: '1d2751', fill: { color:'1d2751' }, align: "left",  bold:true });

slide6.addImage({path: "https://i.ibb.co/rcP0c3W/detalhe2.png", x:1.4, y:1.6, w:"25%", h:"45%"})
slide6.addShape(pres.ShapeType.rect, {fill:{color:"1d2751"}, w:"21.4%", h:"0.15%", x:0, y:2.84})

const contentSlide6 = [
  {
    number: "1",
    content: "Revisitar as metas/objetivos do período e destacar pontos fortes e fracos da análise. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    y:0
  },
  {
    number: "2",
    content: "Apontar os destaques em relação às marcas individualmente e ao contexto geral. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    y:1
  },
  {
    number: "3",
    content: "Explorar outliers e ocorrências incomuns ou promissoras. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    y:2
  },
]
contentSlide6.map(({number, content, y})=>makeSlide6(number, content, y))
function makeSlide6(number, content, y){
  slide6.addImage({path: "https://i.ibb.co/j4wkgfS/detalhe3.png", x:4.6, y:1.65 + y, w:"4%", h:"10%"})
  slide6.addText(number, { x: 4.7, y: 1.9 + y, fontSize:18, fontFace: "Open Sans" , color: '1d2751', fill: { color:'1d2751' }, align: "left",  bold:true })
  slide6.addText(content, { x: 5, y: 2.1 + y, w:"44%", fontSize:10, fontFace: "Open Sans" , color: '000000', fill: { color:'000000' }, align: "left" })
}

//Slide 7
sumary(2, "Agenda")

//Slide 8
let slide8 = pres.addSlide()
makeLayout(slide8, null)
slide8.addImage({path:"https://i.ibb.co/BBC5JBt/chart-7.png", x:0.2, y:2.8, w:"65%", h:"40%"})
slide8.addImage({path:"https://i.ibb.co/BVHTbTd/gauge3.png", x:2.9, y:1.3, w:"13%", h:"22%"})
slide8.addImage({path:"https://i.ibb.co/DwD5CBC/gauge2.png", x:1.7, y:1.3, w:"13%", h:"22%"})
slide8.addImage({path:"https://i.ibb.co/V32tWf7/gauge1.png", x:0.5, y:1.3, w:"13%", h:"22%"})
slide8.addImage({path:"https://i.ibb.co/wgyGJ80/detalhe4.png", x:5, y:1.1, w:"13%", h:"22%"})
slide8.addText("PUBLICAÇÕES COLETADAS", { x:1.5, y: 0.6, fontFace:"Open Sans" ,fontSize:9, color: "1d2751", bold:true})
slide8.addText("ALCANCE POTENCIAL", { x:5, y: 0.6, fontFace:"Open Sans" ,fontSize:9, color: "1d2751", bold:true})
slide8.addText("00.000.000", { x:1.5, y: 0.8, fontFace:"Open Sans" ,fontSize:20, color: "1d2751", bold:true})
slide8.addText("0.000 MM", { x:5, y: 0.8, fontFace:"Open Sans" ,fontSize:20, color: "1d2751", bold:true})
slide8.addShape(pres.ShapeType.rect, {fill:{color:"c00000"}, w:"5%", h:"3%", x:2.2, y:1})
slide8.addText("00,0%", { x:2.2, y: 1.1, fontFace:"Open Sans" ,fontSize:8, color: "ffffff"})
slide8.addShape(pres.ShapeType.rect, {fill:{color:"76bf00"}, w:"5%", h:"3%", x:5.4, y:1})
slide8.addText("00,0%", { x:5.4, y: 1.1, fontFace:"Open Sans" ,fontSize:8, color: "ffffff"})
const content1Slide8 = "No contexto geral, a busca da marca X teve um decrescimento de 2% em seu volume total, mas aumentou seu percentual de menções positivas em 15%. O alcance total das conversas foi 4,4% menor do que no último período e, como consequência, o gauge de sentimento ficou acima do mês anterior e levemente acima da média geral."
slide8.addText(content1Slide8, {x:7, y:1.5, w:"27%", fontSize:8, color:"1d2751"})
const content2Slide8 = "Os destaques do período em termos de volume de menções de deram no dia [05/06] quando conversas sobre [XPTO e XPTZ] geraram [XX] menções [majoritariamente positivas] e no dia [15/06] quando conversas a respeito de [XPTO] geraram [YY] menções [majoritariamente negativas]."
slide8.addText(content2Slide8, {x:7, y:3.7, w:"27%", fontSize:8, color:"1d2751"})

//slide 9
let slide9 = pres.addSlide()
makeLayout(slide9, null)
slide9.addImage({path:"https://i.ibb.co/7bH8djy/sentiment-score.png", x:0.5, y:0.4, w:"28%", h:"35%"})
slide9.addImage({path:"https://i.ibb.co/0hpVFDc/chart-6.png", x:0.5, y:2, w:"28%", h:"23%"})
slide9.addImage({path:"https://i.ibb.co/9Hg4rmn/comparativo-mensal-1.png", x:3.7, y:0.8, w:"60%", h:"45%"})
slide9.addText("00,0%", {x:1.3, y:1.4, fontSize:22, color:"76bf00", bold:true})
const content1Slide9 = "O sentimento da marca variou [positivamente] em 1.8 p.p no último mês. Em comparação com a média geral, o score atingiu patamar [maior] em [0.7 p.p.]. As menções com maior positividade estiverem relacionadas aos Grupo [X], [Y] e [Z], enquanto as com maior negatividade se concentraram em [A], [B] e [C]."
slide9.addText(content1Slide9, {x:0.5, y:4.2, w:"26%", fontSize:8, color:"1d2751"})
const content2Slide9 = "Com um número de menções [XX% menor] do que no mês passado, o alcance da marca nesse mês foi [XX% menor] do que o observado no mês anterior. Proporcionalmente, a razão entre menções e alcance esse mês foi [1,8] em comparação com [1,4] do mês anterior e [1,1] da média histórica."
slide9.addText(content2Slide9, {x:3.9, y:4, w:"57%", fontSize:8, color:"1d2751"} )

//Slide10
let slide10 = pres.addSlide()
makeLayout(slide10, null)
slide10.addImage({path:"https://i.ibb.co/BBC5JBt/chart-7.png", x:1, y:1.5, w:"80%", h:"40%"})
slide10.addShape(pres.ShapeType.rect, {fill:{color:"1d2751"}, w:"50%", h:"0.15%", x:0, y:4})
const content1Slide10 = "Os destaques do período em termos de volume de menções de deram no dia [05/06] quando conversas sobre [XPTO e XPTZ] geraram [XX] menções [majoritariamente positivas] e no dia [15/06] quando conversas a respeito de [XPTO] geraram [YY] menções [majoritariamente negativas]."
slide10.addText(content1Slide10, {x:5, y:4.3, w:"42%", fontSize:8, color:"1d2751"} )
slide10.addText("EVOLUÇÃO TEMPORAL", {x:0.5, y:0.8, fontSize:10, color:"1d2751", bold:true})
//Slide 11
sumary(3, "Cockpit")

//Slide 12
let slide12 = pres.addSlide()
makeLayout(slide12, null)
slide12.addImage({path:"https://i.ibb.co/qd1JQxk/chart-11.png", x:0.5, y:1, w:"90%", h:"50%"})
slide12.addText("MENÇÕES AO LONGO DO TEMPO", {x:0.5, y:0.8, fontSize:10, color:"1d2751", bold:true})
const content1Slide12 = "Observando o volume de dados de todos os Grupos combinados ao longo do tempo observamos que em {data flag 1}, {GRUPO TAG 1}  se destaca por conta do {post grupo 1} que alcança {XX% mais/menos volume} que a média do período. Outro destaque se dá em {data flag 2} quando {GRUPO TAG 2} {ganha/perde} relevância em volume por conta de {{post grupo 2}. Nesse período específico, {Avon} teve {31%} do total de menções do universo com {98%} de positividade.  distanciando-se."
slide12.addText(content1Slide12, {x:0.7, y:4.3, w:"85%", fontSize:8, color:"1d2751"})

//Slide 13
let slide13 = pres.addSlide()
makeLayout(slide13, null)
slide13.addImage({path:"https://i.ibb.co/DfBvZb9/chart-13.png", x:0.5, y:0.8, w:"40%", h:"60%"})
slide13.addImage({path:"https://i.ibb.co/DfBvZb9/chart-13.png", x:5.5, y:0.8, w:"40%", h:"60%"})
slide13.addText("REDE DE TERMOS CORRELACIONADOS", {x:3.5, y:0.6, fontSize:10, color:"1d2751", bold:true})
const content1Slide13 = "Os principais termos de acordo com sua centralidade nas conversas positivas da categoria nesse período são: {Perfumes} , {Brasil} e {Produto}."
const content2Slide13 = "Os principais termos de acordo com sua centralidade nas conversas negativas da categoria nesse período são: {Pai}, {Dia dos Pais} e {Vida}."
slide13.addText(content1Slide13, {x:0.5, y:4.6, w:"35%", fontSize:8, color:"1d2751"})
slide13.addText(content2Slide13, {x:5.5, y:4.6, w:"35%", fontSize:8, color:"1d2751"})
slide13.addShape(pres.ShapeType.rect, {fill:{color:"1d2751"}, w:"8%", h:"3.5%", x:2.2, y:0.5})
slide13.addText("POSITIVO", {x:2.2, y:0.6, fontSize:8, color:"ffffff"})
slide13.addShape(pres.ShapeType.rect, {fill:{color:"1d2751"}, w:"8%", h:"3.5%", x:7.2, y:0.5})
slide13.addText("NEGATIVO", {x:7.2, y:0.6, fontSize:8, color:"ffffff"})


//Slide14
let slide14 = pres.addSlide()
makeLayout(slide14, null)
slide14.addImage({path:"https://i.ibb.co/SdRFWYH/chart-14.png", x:0.5, y:1, w:"65%", h:"37%" })
const content1Slide14 = "Entre os principais influenciadores do setor, destacam-se os perfis {@SilsoSantos} , [@grfee} e [@ytrrre] com {maior atratividade} e {@oficialserumainho}, [@exame] e [@pegn] com {maior alcance} no nosso ranking comparativo de influenciadores."
slide14.addText(content1Slide14, {x:7.2, y:1.6, w:"25%", fontSize:8, color:"1d2751"})
slide14.addImage({path:"https://i.ibb.co/BBxZbBR/background1.png", x:0, y:3, w:"100%", h:"30%"})
slide14.addText("RANKING AAA DE INFLUENCIADORES", {x:0.5, y:0.6, fontSize:10, color:"1d2751", bold:true})

//Slide 15
let slide15 = pres.addSlide()
makeLayout(slide15, null)
slide15.addImage({path:"https://i.ibb.co/BqzxgQb/chart-19.png", x:0.5, y:2, w:"40%", h:"50%"})
slide15.addText("TERMOS POR SENTIMENTO",{x:0.6, y:1, fontSize:10, color:"1d2751", bold:true} )


//Slide 16
sumary(4, "Cockpit")

//Slide 17
let slide17 = pres.addSlide()
makeLayout(slide17, null)
slide17.addImage({path:"https://i.ibb.co/vLYQ9tc/chart-20.png", w:"90%", h:"50%", x:0.5, y:2})
slide17.addText("TIMELINE DE REPERCUSSÃO ORGÂNICA POR SENTIMENTO",{x:0.5, y:1, fontSize:10, color:"1d2751", bold:true} )

// 4. Save the Presentation
pres.writeFile("Desafio2.pptx");

function makeLayout(slide, selected){
  slide.addShape(pres.ShapeType.rect, { fill: { color: "58CCBE" }, w:"100%", h:"10%", x:0, y:"90%" });
  slide.addImage({path: "https://i.ibb.co/W51R8Cm/logo.png", w:"12%", h:"5%", x:"45%", y:"93%"})
  slide.addShape(pres.ShapeType.rect, { fill: { color: "f2f2f2" }, w:"100%", h:"6%", x:0, y:0 });
  const topBarSpace = 1.3
  contentSumary.map(content=>{
    const id = contentSumary.indexOf(content) 
    slide.addText(content, { x:0.5+(topBarSpace*id), y:0.2, fontSize:7, fontFace: "Open Sans" , color: '9c9c9c', align: "left"})
  })
}
function sumary(themeId, title){
  let slide = pres.addSlide();
slide.background = {path: "https://i.ibb.co/dDyTkHj/backgroundimg2.jpg"}

let titleSlide = title;
let contentSlide = ["METODOLOGIA", "DESTAQUES", "OVERVIEW", "MINHA CATEGORIA", "MINHA MARCA", "MEUS COMPARÁVEIS", "PRÓXIMOS PASSOS"]
slide.addText(titleSlide, { x: 0.5, y: 1.9, fontSize:68, fontFace: "Open Sans" , color: '3E909A', fill: { color:'F1F1F1' }, align: "left",  bold:true });
slide.addText(titleSlide, { x: 2.8, y: 2.18, fontSize:25, fontFace: "Open Sans" , color: 'FFFFFF', fill: { color:'F1F1F1' }, align: "left",  bold:true });
contentSlide.map(content=>{
  const id = contentSlide.indexOf(content)
  id === themeId ?  slide.addText(content, { x:4.8, y:2.2+(id*sumarySpace), fontSize:13, fontFace: "Open Sans" , color: 'FFFF00', align: "left", breakline:true, bold:true}) :   slide.addText(content, { x:4.8, y:2.2+(id*sumarySpace), fontSize:13, fontFace: "Open Sans" , color: 'FFFFFF', align: "left", breakline:true})
})
}
export default function teste(){


  return (
  <div>
      Hello World
  {/* <HighchartsReact highcharts={Highcharts} options={chart4} containerProps={{style:{width: "1200px", height: "400px"}}}/>

  <HighchartsReact highcharts={Highcharts} options={chart1} />
  <HighchartsReact highcharts={Highcharts} options={chart2} />
  <HighchartsReact highcharts={Highcharts} options={chart3} />

<HighchartsReact highcharts={Highcharts} options={chart5} containerProps={{style:{width: "500px", height: "300px"}}} />
  <HighchartsReact highcharts={Highcharts} options={chart6} containerProps={{style:{width: "1200px", height: "400px"}}} />
  <HighchartsReact highcharts={Highcharts} options={chart7} />
  <HighchartsReact highcharts={Highcharts} options={chart8} containerProps={{style:{width: "1200px", height: "400px"}}} />
  <HighchartsReact highcharts={Highcharts} options={chart9} />
  <HighchartsReact highcharts={Highcharts} options={chart10} containerProps={{style:{width: "1200px", height: "800px"}}}/>
  <HighchartsReact highcharts={Highcharts} options={chart11}containerProps={{style:{width: "1200px", height: "400px"}}} />
  <HighchartsReact highcharts={Highcharts} options={chart12} containerProps={{style:{width: "700px", height: "500px"}}}/>
  <HighchartsReact highcharts={Highcharts} options={chart13} containerProps={{style:{width: "600px", height: "500px"}}} />
  <HighchartsReact highcharts={Highcharts} options={chart14} containerProps={{style:{width: "1200px", height: "400px"}}}/> */}
  </div>)
};
