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
                title: " ",
                description: " ",
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
                    flip: true,
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
                            orientation: 'horizontal',
                            columnsGapPercent: 50,
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




$(document).ready(function(){
            //probando con json 
          

                var data = 
                {
                    datatype : 'json',
                    datafields:[
                    {name: 'Name'},
                    {name: 'Country'},
                    {name: 'Value'}
                    ],
                    url: 'datos/cobranza.json'
                };

                var dataAdapter = new $.jqx.dataAdapter(data, { async: false, autoBind: true, loadError: function (xhr, status, error) { alert('Error loading "' + data.url + '" : ' + error); } });

            // configurar grafica
            var settings = {
                title: " ",
                description: " ",
                showLegend: true,
                enableAnimations: true,
                padding: { left: Plft, top: Ptop, right: Prig, bottom: Pbot },
                titlePadding: { left: Tleft, top: Ttop, right: Trig, bottom: Tbot },

                source: dataAdapter,
                xAxis:
                {
                    dataField:'Name',
               title:{text: 'Clientes'},
                    labels: {
                        horizontalAlignment: 'right',},
                    gridLines: { visible: true },
                    flip: false
                },
                valueAxis:
                {  
                    flip: false,
                    title:{text: 'Adeudo'},
                    labels: {
                        horizontalAlignment: 'right',
                        visible: true,
                        formatFunction: function (value) {
                            return (value);
                        }
                    }
                },
                colorScheme: 'scheme02',
                seriesGroups:
                    [
                        {
                            type: 'line',
                            orientation: 'vertical',
                            columnsGapPercent: 200,
                            toolTipFormatSettings: { thousandsSeparator: ',' },
                            series: [
                                    { dataField: 'Value', displayText: 'Clientes' }
                                ]
                        }
                    ]
            };
            // ejecutar grafica
            $('#chartContainer2').jqxChart(settings);
        });



$(document).ready(function(){
            //probando con json    
                var data = 
                {
                    datatype : 'json',
                    datafields:[
                    {name: '_id'},
                    {name: 'balance'},
                    {name: 'name'},
                    {name: 'first'}
                    ],
                    url: 'datos/inventario.json'
                };

                var dataAdapter = new $.jqx.dataAdapter(data, { async: false, autoBind: true, loadError: function (xhr, status, error) { alert('Error loading "' + data.url + '" : ' + error); } });

            // configurar grafica
            var settings = {
                title: " ",
                description: " ",
                showLegend: true,
                enableAnimations: true,
                padding: { left: Plft, top: Ptop, right: Prig, bottom: Pbot },
                titlePadding: { left: Tleft, top: Ttop, right: Trig, bottom: Tbot },

                source: dataAdapter,
                xAxis:
                {
                    dataField:'balance',
               title:{text: 'Lotes'},
                    labels: {
                        horizontalAlignment: 'right',},
                    gridLines: { visible: true },
                    flip: false
                },
                valueAxis:
                {  
                    flip: false,
                    title:{text: 'Clave'},
                    labels: {
                        horizontalAlignment: 'right',
                        visible: true,
                        formatFunction: function (value) {
                            return (value);
                        }
                    }
                },
                colorScheme: 'scheme03',
                seriesGroups:
                    [
                        {
                            type: 'column',
                            orientation: 'vertical',
                            columnsGapPercent: 100,
                            toolTipFormatSettings: { thousandsSeparator: ',' },
                            series: [
                                    { dataField: '_id', displayText: 'id' }
                                ]
                        }
                    ]
            };
            // ejecutar grafica
            $('#chartContainer3').jqxChart(settings);
        });


$(document).ready(function(){
            //probando con json    
                var data = 
                {
                    datatype : 'json',
                    datafields:[
                    {name: 'Name'},
                    {name: 'Value'},
                    {name: '_id'}
                    ],
                    url: 'datos/costo_pago.json'
                };

                var dataAdapter = new $.jqx.dataAdapter(data, { async: false, autoBind: true, loadError: function (xhr, status, error) { alert('Error loading "' + data.url + '" : ' + error); } });

            // configurar grafica
            var settings = {
                title: " ",
                description: " ",
                showLegend: true,
                enableAnimations: true,
                padding: { left: Plft, top: Ptop, right: Prig, bottom: Pbot },
                titlePadding: { left: Tleft, top: Ttop, right: Trig, bottom: Tbot },

                source: dataAdapter,
                xAxis:
                {
                    dataField:'Name',
               title:{text: 'Clientes'},
                    labels: {
                        horizontalAlignment: 'right',},
                    gridLines: { visible: true },
                    flip: false
                },
                valueAxis:
                {  
                    flip: false,
                    title:{text: 'Valor'},
                    labels: {
                        horizontalAlignment: 'right',
                        visible: true,
                        formatFunction: function (value) {
                            return (value);
                        }
                    }
                },
                colorScheme: 'scheme04',
                seriesGroups:
                    [
                        {
                            type: 'splinearea',
                            orientation: 'vertical',
                            columnsGapPercent: 200,
                            toolTipFormatSettings: { thousandsSeparator: ',' },
                            series: [
                                    { dataField: 'Value', displayText: 'Clientes' }
                                ]
                        }
                    ]
            };
            // ejecutar grafica
            $('#chartContainer4').jqxChart(settings);
        });




function ventas2(){
    window.location.replace('ventas2imd3.html')
};

