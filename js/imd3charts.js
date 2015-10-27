$(document).ready(function () {
            // preparando los datos
            var source =
            {
                datatype: "json",
                datafields: [
                    { name: 'caducidad'},
                    { name: 'cant' },
                    { name: 'disp' }
                ],
                url: 'datos/lotesmty.json'
            };
            var dataAdapter = new $.jqx.dataAdapter(source, { async: false, autoBind: true, loadError: function (xhr, status, error) { alert('Error loading "' + source.url + '" : ' + error); } });
            var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            // preparando la configuracion de la grafica
            var settings = {
                title: "U.S. Stock Market Index Performance",
                description: "NASDAQ Composite compared to S&P 500",
                enableAnimations: true,
                showLegend: true,
                padding: { left: 10, top: 5, right: 10, bottom: 5 },
                titlePadding: { left: 50, top: 0, right: 0, bottom: 10 },
                source: dataAdapter,
                xAxis:
                {
                    dataField: 'caducidad',
                    formatFunction: function (value) {
                        return value.getDate() + '-' + months[value.getMonth()] + '-' + value.getFullYear();
                    },
                    type: 'date',
                    baseUnit: 'month',
                    valuesOnTicks: true,
                    minValue: '01-01-2014',
                    maxValue: '01-01-2015',
                    tickMarks: {
                        visible: true,
                        interval: 1,
                        color: '#BCBCBC'
                    },
                    unitInterval: 1,
                    gridLines: {
                        visible: true,
                        interval: 3,
                        color: '#BCBCBC'
                    },
                    labels: {
                        angle: -45,
                        rotationPoint: 'topright',
                        offset: { x: 0, y: -25 }
                    }
                },
                valueAxis:
                {
                    visible: true,
                    title: { text: 'Daily Closing Price<br>' },
                    tickMarks: { color: '#BCBCBC' }
                },
                colorScheme: 'scheme04',
                seriesGroups:
                    [
                        {
                            type: 'line',
                            series: [
                                    { dataField: 'cant', displayText: 'cant' },
                                    { dataField: 'disp', displayText: 'disp' }
                                ]
                        }
                    ]
            };
            // configura la grafica
            $('#chartContainer').jqxChart(settings);
        });



        



// grafica 2
$(document).ready(function () {
            // preparando los datos
            var source =
            {
                datatype: "json",
                datafields: [
                    { name: 'caducidad' },
                    { name: 'cajas' },
                    { name: 'disp' }
                ],
                url: 'datos/lotesmty.json'
            };
            var dataAdapter = new $.jqx.dataAdapter(source, { async: false, autoBind: true, loadError: function (xhr, status, error) { alert('Error loading "' + source.url + '" : ' + error); } });
            var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            // preparando la configuracion de la grafica
            var settings = {
                title: "U.S. Stock Market Index Performance",
                description: "NASDAQ Composite compared to S&P 500",
                enableAnimations: true,
                showLegend: true,
                padding: { left: 10, top: 5, right: 10, bottom: 5 },
                titlePadding: { left: 50, top: 0, right: 0, bottom: 10 },
                source: dataAdapter,
                xAxis:
                {
                    dataField: 'Date',
                    formatFunction: function (value) {
                        return value.getDate() + '-' + months[value.getMonth()] + '-' + value.getFullYear();
                    },
                    type: 'date',
                    baseUnit: 'month',
                    valuesOnTicks: true,
                    minValue: '01-01-2014',
                    maxValue: '01-01-2015',
                    tickMarks: {
                        visible: true,
                        interval: 1,
                        color: '#BCBCBC'
                    },
                    unitInterval: 1,
                    gridLines: {
                        visible: true,
                        interval: 3,
                        color: '#BCBCBC'
                    },
                    labels: {
                        angle: -45,
                        rotationPoint: 'topright',
                        offset: { x: 0, y: -25 }
                    }
                },
                valueAxis:
                {
                    visible: true,
                    title: { text: 'Daily Closing Price<br>' },
                    tickMarks: { color: '#BCBCBC' }
                },
                colorScheme: 'scheme04',
                seriesGroups:
                    [
                        {
                            type: 'line',
                            series: [
                                    { dataField: 'cajas', displayText: 'cajas' },
                                    { dataField: 'disp', displayText: 'disp' }
                                ]
                        }
                    ]
            };
            // configura la grafica
            $('#chartContainer2').jqxChart(settings);
        });











// grafica 3
$(document).ready(function () {
            // preparando los datos
            var source =
            {
                datatype: "json",
                datafields: [
                    { name: 'caducidad' },
                    { name: 'cajas' },
                    { name: 'disp' }
                ],
                url: 'datos/lotesmty.json'
            };
            var dataAdapter = new $.jqx.dataAdapter(source, { async: false, autoBind: true, loadError: function (xhr, status, error) { alert('Error loading "' + source.url + '" : ' + error); } });
            var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            // preparando la configuracion de la grafica
            var settings = {
                title: "U.S. Stock Market Index Performance",
                description: "NASDAQ Composite compared to S&P 500",
                enableAnimations: true,
                showLegend: true,
                padding: { left: 10, top: 5, right: 10, bottom: 5 },
                titlePadding: { left: 50, top: 0, right: 0, bottom: 10 },
                source: dataAdapter,
                xAxis:
                {
                    dataField: 'Date',
                    formatFunction: function (value) {
                        return value.getDate() + '-' + months[value.getMonth()] + '-' + value.getFullYear();
                    },
                    type: 'date',
                    baseUnit: 'month',
                    valuesOnTicks: true,
                    minValue: '01-01-2014',
                    maxValue: '01-01-2015',
                    tickMarks: {
                        visible: true,
                        interval: 1,
                        color: '#BCBCBC'
                    },
                    unitInterval: 1,
                    gridLines: {
                        visible: true,
                        interval: 3,
                        color: '#BCBCBC'
                    },
                    labels: {
                        angle: -45,
                        rotationPoint: 'topright',
                        offset: { x: 0, y: -25 }
                    }
                },
                valueAxis:
                {
                    visible: true,
                    title: { text: 'Daily Closing Price<br>' },
                    tickMarks: { color: '#BCBCBC' }
                },
                colorScheme: 'scheme04',
                seriesGroups:
                    [
                        {
                            type: 'line',
                            series: [
                                    { dataField: 'cajas', displayText: 'cajas' },
                                    { dataField: 'disp', displayText: 'disp' }
                                ]
                        }
                    ]
            };
            // configura la grafica
            $('#chartContainer3').jqxChart(settings);
        });







// grafica 4
$(document).ready(function () {
            // preparando los datos
            var source =
            {
                datatype: "json",
                datafields: [
                    { name: 'caducidad' },
                    { name: 'cajas' },
                    { name: 'disp' }
                ],
                url: 'datos/lotesmty.json'
            };
            var dataAdapter = new $.jqx.dataAdapter(source, { async: false, autoBind: true, loadError: function (xhr, status, error) { alert('Error loading "' + source.url + '" : ' + error); } });
            var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            // preparando la configuracion de la grafica
            var settings = {
                title: "U.S. Stock Market Index Performance",
                description: "NASDAQ Composite compared to S&P 500",
                enableAnimations: true,
                showLegend: true,
                padding: { left: 10, top: 5, right: 10, bottom: 5 },
                titlePadding: { left: 50, top: 0, right: 0, bottom: 10 },
                source: dataAdapter,
                xAxis:
                {
                    dataField: 'Date',
                    formatFunction: function (value) {
                        return value.getDate() + '-' + months[value.getMonth()] + '-' + value.getFullYear();
                    },
                    type: 'date',
                    baseUnit: 'month',
                    valuesOnTicks: true,
                    minValue: '01-01-2014',
                    maxValue: '01-01-2015',
                    tickMarks: {
                        visible: true,
                        interval: 1,
                        color: '#BCBCBC'
                    },
                    unitInterval: 1,
                    gridLines: {
                        visible: true,
                        interval: 3,
                        color: '#BCBCBC'
                    },
                    labels: {
                        angle: -45,
                        rotationPoint: 'topright',
                        offset: { x: 0, y: -25 }
                    }
                },
                valueAxis:
                {
                    visible: true,
                    title: { text: 'Daily Closing Price<br>' },
                    tickMarks: { color: '#BCBCBC' }
                },
                colorScheme: 'scheme04',
                seriesGroups:
                    [
                        {
                            type: 'line',
                            series: [
                                    { dataField: 'cajas', displayText: 'cajas' },
                                    { dataField: 'disp', displayText: 'disp' }
                                ]
                        }
                    ]
            };
            // configura la grafica
            $('#chartContainer4').jqxChart(settings);
        });