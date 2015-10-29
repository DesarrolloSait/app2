//variables publicas
var Plft = 6;   //padding left
var Ptop = 2;   //padding top 
var Prig = 10;   //padding rigth
var Pbot = 1;   //Paddint bottom

var Tleft   = 3;     //Title padding left
var Ttop    = 3;     //Title padding top
var Trig    = 3;     //Title padding right
var Tbot    = 3;     //Title padding bottom
$(document).ready(function(){
            //probando con json    
                var data = 
                {
                    datatype : 'json',
                    datafields:[
                    {name: 'id'},
                    {name: 'vendedor'},
                    {name: 'ventas'}
                    ],
                    url: 'datos/ventas.json'
                };

                var dataAdapter = new $.jqx.dataAdapter(data, { async: false, autoBind: true, loadError: function (xhr, status, error) { alert('Error loading "' + data.url + '" : ' + error); } });

            // configurar grafica
            var settings = {
                title: "Venta del dia",
                description: "Estadistica de la venta del dia",
                showLegend: true,
                enableAnimations: true,
                padding: { left: Plft, top: Ptop, right: Prig, bottom: Pbot },
                titlePadding: { left: Tleft, top: Ttop, right: Trig, bottom: Tbot },

                source: dataAdapter,
                xAxis:
                {
                    
                    dataField: 'vendedor',
                    labels: {
                        horizontalAlignment: 'right',},
                    gridLines: { visible: true },
                    flip: false
                },
                valueAxis:
                {   minValue: 0,
                    maxValue: 50,
                    flip: false,
                    title:{text: 'ventas'},
                    labels: {
                        horizontalAlignment: 'right',
                        visible: true,
                        formatFunction: function (value) {
                            return (value);
                        }
                    }
                },
                colorScheme: 'scheme01',
                seriesGroups:
                    [
                        {
                            type: 'column',
                            orientation: 'vertical',
                            columnsGapPercent: 200,
                            toolTipFormatSettings: { thousandsSeparator: ',' },
                            series: [
                                    { dataField: 'ventas', displayText: 'ventas' }
                                ]
                        }
                    ]
            };
            // ejecutar grafica
            $('#chartContainer').jqxChart(settings);
        });


