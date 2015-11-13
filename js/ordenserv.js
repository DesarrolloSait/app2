$(document).ready(function () {

            // the 'layout' JSON array defines the internal structure of the layout
            var layout = [
            // Layout izquierdo gris
            {
                type: 'layoutGroup',
                orientation: 'horizontal',
                items: [{
                    type: 'autoHideGroup',
                    alignment: 'left',
                    width: 20,
                    unpinnedWidth: 100,
                    // items: [no items]
                }, 

                {

                // Panel principal de orden de servicio

                    type: 'layoutGroup',
                    orientation: 'vertical',

                    width: 800,
                    items: [{
                        type: 'documentGroup',
                        height: 220,
                        minHeight: 200,
                        items: [{
                            type: 'documentPanel',
                            title: 'Orden de servicio',
                            contentContainer: 'ordenServ',
                            initContent: function (){
                                $(document).ready(function () {

                                //Fecha input 
                                $("#dateInput").jqxDateTimeInput({width: '100px', height: '25px' });
                                var culture = $('#jqxDateTimeInput').jqxDateTimeInput('culture'); 
                                
                                
                               // datos de los input
                                var equipo = new Array("AutoMax DPS", "AutoCad", "Feof DPR");
                                var norden = new Array("1211", "23123", "1231");
                                var tserv = new Array("Emergencia","Programado");
                                var cli = new Array("Ternium Mexico, SA de CV", "Femsa, SA de CV", "Manufacturas Digitales 3D, SA de CV");
                                var fact = new Array("Mismos", "3ra persona");
                                var cont = new Array("Hugo Suarez","Manuel Gutierrez","Jose Alberto Flores");
                                var ingserv = new Array("Jose Carlos Davila Teran", "Jose Angel Martinez Perez");

                                // Variables de los input
                                var hei = 19;
                                var wid = 200;

                                $("#input").jqxInput({ placeHolder: "Escribe la maquina a utilizar", height: hei, width: wid, 
                                    source: function (query, response) {
                                        var item = query.split(/,\s*/).pop();
                                        // update the search query.
                                        $("#input").jqxInput({ query: item });
                                        response(ma);
                                    },
                                    renderer: function (itemValue, inputValue) {
                                        var terms = inputValue.split(/,\s*/);
                                        // remove the current input
                                        terms.pop();
                                        // add the selected item
                                        terms.push(itemValue);
                                        // add placeholder to get the comma-and-space at the end
                                        terms.push("");
                                        var value = terms.join("");
                                        return value;
                                    }
                                });
                                $("#input2").jqxInput({ placeHolder: "Escribe el equipo", height: hei, width: wid, 
                                    source: function (query, response) {
                                        var item = query.split(/,\s*/).pop();
                                        // update the search query.
                                        $("#input2").jqxInput({ query: item });
                                        response(equipo);
                                    },
                                    renderer: function (itemValue, inputValue) {
                                        var terms = inputValue.split(/,\s*/);
                                        // remove the current input
                                        terms.pop();
                                        // add the selected item
                                        terms.push(itemValue);
                                        // add placeholder to get the comma-and-space at the end
                                        terms.push("");
                                        var value = terms.join("");
                                        return value;
                                    }
                                });

                                $("#input3").jqxInput({ placeHolder: "Escribe el numero de orden de trabajo ", height: hei, width: wid, 
                                    source: function (query, response) {
                                        var item = query.split(/,\s*/).pop();
                                        // update the search query.
                                        $("#input3").jqxInput({ query: item });
                                        response(norden);
                                    },
                                    renderer: function (itemValue, inputValue) {
                                        var terms = inputValue.split(/,\s*/);
                                        // remove the current input
                                        terms.pop();
                                        // add the selected item
                                        terms.push(itemValue);
                                        // add placeholder to get the comma-and-space at the end
                                        terms.push("");
                                        var value = terms.join("");
                                        return value;
                                    }
                                });
                                $("#input4").jqxInput({ placeHolder: "Escribe el tipo de servicio", height: hei, width: wid, 
                                    source: function (query, response) {
                                        var item = query.split(/,\s*/).pop();
                                        // update the search query.
                                        $("#input4").jqxInput({ query: item });
                                        response(tserv);
                                    },
                                    renderer: function (itemValue, inputValue) {
                                        var terms = inputValue.split(/,\s*/);
                                        // remove the current input
                                        terms.pop();
                                        // add the selected item
                                        terms.push(itemValue);
                                        // add placeholder to get the comma-and-space at the end
                                        terms.push("");
                                        var value = terms.join("");
                                        return value;
                                    }
                                });
                                $("#input5").jqxInput({ placeHolder: "Escribe el cliente ", height: hei, width: wid, 
                                    source: function (query, response) {
                                        var item = query.split(/,\s*/).pop();
                                        // update the search query.
                                        $("#input5").jqxInput({ query: item });
                                        response(cli);
                                    },
                                    renderer: function (itemValue, inputValue) {
                                        var terms = inputValue.split(/,\s*/);
                                        // remove the current input
                                        terms.pop();
                                        // add the selected item
                                        terms.push(itemValue);
                                        // add placeholder to get the comma-and-space at the end
                                        terms.push("");
                                        var value = terms.join("");
                                        return value;
                                    }
                                });
                                $("#input6").jqxInput({ placeHolder: "Facturar a ", height: hei, width: wid, 
                                    source: function (query, response) {
                                        var item = query.split(/,\s*/).pop();
                                        // update the search query.
                                        $("#input6").jqxInput({ query: item });
                                        response(fact);
                                    },
                                    renderer: function (itemValue, inputValue) {
                                        var terms = inputValue.split(/,\s*/);
                                        // remove the current input
                                        terms.pop();
                                        // add the selected item
                                        terms.push(itemValue);
                                        // add placeholder to get the comma-and-space at the end
                                        terms.push("");
                                        var value = terms.join("");
                                        return value;
                                    }
                                });

                                $("#input7").jqxInput({ placeHolder: "Escribe el contacto ", height: hei, width: wid, 
                                    source: function (query, response) {
                                        var item = query.split(/,\s*/).pop();
                                        // update the search query.
                                        $("#input7").jqxInput({ query: item });
                                        response(cont);
                                    },
                                    renderer: function (itemValue, inputValue) {
                                        var terms = inputValue.split(/,\s*/);
                                        // remove the current input
                                        terms.pop();
                                        // add the selected item
                                        terms.push(itemValue);
                                        // add placeholder to get the comma-and-space at the end
                                        terms.push("");
                                        var value = terms.join("");
                                        return value;
                                    }
                                });
                                $("#input8").jqxInput({ placeHolder: "Escribe el ing. de servicio ", height: hei, width: wid, 
                                    source: function (query, response) {
                                        var item = query.split(/,\s*/).pop();
                                        // update the search query.
                                        $("#input8").jqxInput({ query: item });
                                        response(ingserv);
                                    },
                                    renderer: function (itemValue, inputValue) {
                                        var terms = inputValue.split(/,\s*/);
                                        // remove the current input
                                        terms.pop();
                                        // add the selected item
                                        terms.push(itemValue);
                                        // add placeholder to get the comma-and-space at the end
                                        terms.push("");
                                        var value = terms.join("");
                                        return value;
                                    }
                                });

                            });

                            }   
                        }]
                    }, 
                        
                        // Descripcion de orden de servicio
                    {
                        type: 'tabbedGroup',
                      
                        height: 300,
                        minHeight: 200,
                        pinnedHeight: 60,
                        items: [
                        
                         {
                            type: 'layoutPanel',
                            title: 'Descripcion de orden de servicio',
                            contentContainer: 'descOrdenServ',
                            selected: true,

                            initContent: function () {
                                $('#editor').jqxEditor({
                                height: "270px",
                                width: '800px',
                                tools: 'bold italic underline | format font size | color background | left center right | outdent indent | ul ol'
                                // | link | clean | html

                            });
                               

                            }
                        }]
                    }]
                }, {
                    type: 'tabbedGroup',
                    width: 463,
                    minWidth: 220,
                    allowClose: false,
                    items: [{
                        type: 'layoutPanel',
                        title: 'Registro de horas',
                        contentContainer: 'regHoras',
                        initContent: function (){



            /*iniciamos 
            nuestra jqxgrid
                        */                
            var data = new Array();
            var firstNames =
            [
                "Andrew", "Nancy", "Shelley", "Regina", "Yoshi", "Antoni", "Mayumi", "Ian", "Peter", "Lars", "Petra", "Martin", "Sven", "Elio", "Beate", "Cheryl", "Michael", "Guylene"
            ];
            var lastNames =
            [
                "Fuller", "Davolio", "Burke", "Murphy", "Nagase", "Saavedra", "Ohno", "Devling", "Wilson", "Peterson", "Winkler", "Bein", "Petersen", "Rossi", "Vileid", "Saylor", "Bjorn", "Nodier"
            ];
            var productNames =
            [
                "Black Tea", "Green Tea", "Caffe Espresso", "Doubleshot Espresso", "Caffe Latte", "White Chocolate Mocha", "Cramel Latte", "Caffe Americano", "Cappuccino", "Espresso Truffle", "Espresso con Panna", "Peppermint Mocha Twist"
            ];
            var priceValues =
            [
                "2.25", "1.5", "3.0", "3.3", "4.5", "3.6", "3.8", "2.5", "5.0", "1.75", "3.25", "4.0"
            ];
            var ResHoras =["Asist. Cliente", "Servicio", "H Xtra 1.5", "H Xtra 2.0"];
            for (var i = 0; i < 5; i++) {
                var row = {};
                var productindex = Math.floor(Math.random() * productNames.length);
                var price = parseFloat(priceValues[productindex]);
                var quantity = 1 + Math.round(Math.random() * 10);
                row["firstname"] = firstNames[Math.floor(Math.random() * firstNames.length)];
                row["ResHoras"] = ResHoras[Math.floor(Math.random() * ResHoras.length)];
                row["lastname"] = lastNames[Math.random() * lastNames.length];
                row["productname"] = productNames[productindex];
                row["price"] = price;
                row["quantity"] = quantity;
                row["total"] = price * quantity;
                data[i] = row;
            }
            var source =
            {
                localdata: data,
                datatype: "array",
                datafields:
                [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'ResHoras', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' },
                    { name: 'total', type: 'number' }
                ]
            };
            var dataAdapter = new $.jqx.dataAdapter(source);
            var dataAdapter2 = new $.jqx.dataAdapter(source);
            var dataAdapter3 = new $.jqx.dataAdapter(source);
            $("#jqxgrid").jqxGrid(
            {
                width: 445,
                height: 185,
                source: dataAdapter,
                columnsresize: true,
                showstatusbar: true,
                statusbarheight: 25,
                showaggregates  : true,
                editable: true,
                columns: [
                    { text: 'Res.Horas', datafield: 'ResHoras', width: 140 },
                    { text: 'Cargo', datafield: 'd', width: 150 },
                    { text: 'Garantia', datafield: 'garantia', width: 72 },
                    { text: 'Total', datafield: 's', width: 80,aggregates: ['sum']  }
                  
                 
                ]
            });
            
            $("#jqxgrid2").jqxGrid(
            {
                width: 445,
                height: 185,
                source: dataAdapter,
                columnsresize: true,
                showstatusbar: true,
                statusbarheight: 25,
                showaggregates  : true,
                editable: true,
                columns: [
                    { text: '', datafield: 'ResHoras', width: 140 },
                    { text: '', datafield: 'd', width: 150 },
                    { text: '', datafield: 'Total', width: 72 },
                    { text: '', datafield: 's', width: 80,aggregates: ['sum']  }
                  
                 
                ]
            });

            $("#jqxgrid3").jqxGrid(
            {
                width: 445,
                height: 185,
                source: dataAdapter,
                columnsresize: true,
                showstatusbar: true,
                statusbarheight: 25,
                showaggregates  : true,
                editable: true,
                columns: [
                    { text: '', datafield: 'ResHoras', width: 140 },
                    { text: '', datafield: 'd', width: 150 },
                    { text: '', datafield: 'Total', width: 72 },
                    { text: '', datafield: 's', width: 80,aggregates: ['sum']  }
                  
                 
                ]
            });


                        }
                        
                    }, ]
                }]
            }];
            // layout
            $('#jqxLayout').jqxLayout({ width: 1300, height: 520, layout: layout, contextMenu: true });
             $('#jqxFileUpload').jqxFileUpload({ width: 250, uploadUrl: 'imageUpload.php', fileInputName: 'fileToUpload',localization: { browseButton: 'Buscar imagen', uploadButton: 'Subir imagen', cancelButton: 'Cancelar' } });
             var localization = $('#jqxFileUpload').jqxFileUpload('localization');
        });
