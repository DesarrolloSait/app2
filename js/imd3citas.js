$(document).ready(function () {
            
  
            // prepare the data
            var source =
            {
                dataType: "json",
                dataFields: [
                    { name: 'id', type: 'string' },
                    { name: 'description', type: 'string' },
                    { name: 'location', type: 'string' },
                    { name: 'subject', type: 'string' },
                    { name: 'calendar', type: 'string' },
                    { name: 'start', type: 'date' },
                    { name: 'style', type: 'style'},
                    { name: 'end', type: 'date' }
                ],
                id: 'id',
                url: 'php/citas2.php'
            };
            var adapter = new $.jqx.dataAdapter(source);
            $("#scheduler").jqxScheduler({
                date: new $.jqx.date(2015, 11, 10),
                width: 900,
                height: 650,
                source: adapter,
                showLegend: true,
                localization: {
                    // separator of parts of a date (e.g. '/' in 11/05/1955)
                    '/': "/",
                    // separator of parts of a time (e.g. ':' in 05:44 PM)
                    ':': ":",
                    // the first day of the week (0 = Sunday, 1 = Monday, etc)
                    firstDay: 1,
                    days: {
                        // full day names
                names: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
                // abbreviated day names
                namesAbbr: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
                // shortest day names
                namesShort: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"]
                    },
                    months: {
                        // full month names (13 months for lunar calendards -- 13th month should be "" if not lunar)
                names: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Augosto", "Septiembre", "Octubre", "Noviembre", "Diciembre", ""],
                // abbreviated month names
                namesAbbr: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic", ""]
                    },
                    // AM and PM designators in one of these forms:
                    // The usual view, and the upper and lower case versions
                    //      [standard,lowercase,uppercase]
                    // The culture does not use AM or PM (likely all standard date formats use 24 hour time)
                    //      null
                    AM: ["AM", "am", "AM"],
                    PM: ["PM", "pm", "PM"],
                    eras: [
                    // eras in reverse chronological order.
                    // name: the name of the era in this culture (e.g. A.D., C.E.)
                    // start: when the era starts in ticks (gregorian, gmt), null if it is the earliest supported era.
                    // offset: offset in years from gregorian calendar
                    { "name": "A.D.", "start": null, "offset": 0 }
                    ],
                    twoDigitYearMax: 2029,
                    patterns: {
                        // short date pattern
                        d: "M/d/yyyy",
                        // long date pattern
                        D: "dddd, MMMM dd, yyyy",
                        // short time pattern
                        t: "h:mm tt",
                        // long time pattern
                        T: "h:mm:ss tt",
                        // long date, short time pattern
                        f: "dddd, MMMM dd, yyyy h:mm tt",
                        // long date, long time pattern
                        F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                        // month/day pattern
                        M: "MMMM dd",
                        // month/year pattern
                        Y: "yyyy MMMM",
                        // S is a sortable format that does not vary by culture
                        S: "yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss",
                        // formatting of dates in MySQL DataBases
                        ISO: "yyyy-MM-dd hh:mm:ss",
                        ISO2: "yyyy-MM-dd HH:mm:ss",
                        d1: "dd.MM.yyyy",
                        d2: "dd-MM-yyyy",
                        d3: "dd-MMMM-yyyy",
                        d4: "dd-MM-yy",
                        d5: "H:mm",
                        d6: "HH:mm",
                        d7: "HH:mm tt",
                        d8: "dd/MMMM/yyyy",
                        d9: "MMMM-dd",
                        d10: "MM-dd",
                        d11: "MM-dd-yyyy"
                    },
                    agendaViewString: "Agenda",
    agendaAllDayString: "todo el dia",
    agendaDateColumn: "Fecha",
    agendaTimeColumn: "Tiempo",
    agendaAppointmentColumn: "Designación",
    backString: "Atras",
    forwardString: "Adelante",
    toolBarPreviousButtonString: "anterior",
    toolBarNextButtonString: "siguiente",
    emptyDataString: "Datos no disponible",
    loadString: "Cargando...",
    clearString: "Limpiar",
    todayString: "Hoy",
    dayViewString: "Dia",
    weekViewString: "Semana",
    monthViewString: "Mes",
    timelineDayViewString: "Timeline Day",
    timelineWeekViewString: "Timeline Week",
    timelineMonthViewString: "Timeline Month",
    loadingErrorMessage: "The data is still loading and you cannot set a property or call a method. You can do that once the data binding is completed. jqxScheduler raises the 'bindingComplete' event when the binding is completed.",
    editRecurringAppointmentDialogTitleString: "Edit Recurring Appointment",
    editRecurringAppointmentDialogContentString: "Do you want to edit only this occurrence or the series?",
    editRecurringAppointmentDialogOccurrenceString: "Edit Occurrence",
    editRecurringAppointmentDialogSeriesString: "Edit The Series",
    editDialogTitleString: "Editar cita",
    editDialogCreateTitleString: "Crear nueva cita",
    contextMenuEditAppointmentString: "Editar cita",
    contextMenuCreateAppointmentString: "Crear nueva designacion",
    editDialogSubjectString: "Asunto",
    editDialogLocationString: "Location",
    editDialogFromString: "Desde",
    editDialogToString: "Hasta",
    editDialogAllDayString: "All day",
    editDialogExceptionsString: "Exceptions",
    editDialogResetExceptionsString: "Reset on Save",
    editDialogDescriptionString: "Descripcion",
    editDialogResourceIdString: "Usuario",
    editDialogStatusString: "Estado",
    editDialogColorString: "Color",
    editDialogColorPlaceHolderString: "Seleccionar Color",
    editDialogTimeZoneString: "Tiempo zona",
    editDialogSelectTimeZoneString: "Seleccionar tiempo de zona",
    editDialogSaveString: "Guardar",
    editDialogDeleteString: "Borrar",
    editDialogCancelString: "Cancelar",
    editDialogRepeatString: "Repeat",
    editDialogRepeatEveryString: "Repetir cada",
    editDialogRepeatEveryWeekString: "semana",
    editDialogRepeatEveryYearString: "año",
    editDialogRepeatEveryDayString: "dia",
    editDialogRepeatNeverString: "Nunca",
    editDialogRepeatDailyString: "Diario",
    editDialogRepeatWeeklyString: "Semanal",
    editDialogRepeatMonthlyString: "Mensual",
    editDialogRepeatYearlyString: "Anual",
    editDialogRepeatEveryMonthString: "month(s)",
    editDialogRepeatEveryMonthDayString: "Dia",
    editDialogRepeatFirstString: "primero",
    editDialogRepeatSecondString: "segundo",
    editDialogRepeatThirdString: "tercero",
    editDialogRepeatFourthString: "cuarto",
    editDialogRepeatLastString: "ultimo",
    editDialogRepeatEndString: "End",
    editDialogRepeatAfterString: "Despues",
    editDialogRepeatOnString: "On",
    editDialogRepeatOfString: "of",
    editDialogRepeatOccurrencesString: "occurrence(s)",
    editDialogRepeatSaveString: "Save Occurrence",
    editDialogRepeatSaveSeriesString: "Save Series",
    editDialogRepeatDeleteString: "Delete Occurrence",
    editDialogRepeatDeleteSeriesString: "Delete Series",
    editDialogStatuses:
    {
        free: "Libre",
        tentative: "Tentativo",
        busy: "Ocupado",
        outOfOffice: "Fuera de la oficina"
    },
    loadingErrorMessage: "The data is still loading and you cannot set a property or call a method. You can do that once the data binding is completed. jqxScheduler raises the 'bindingComplete' event when the binding is completed.",    
},
                ready: function () {
               
                },

                resources:
                {
                    colorScheme: "scheme05",
                    dataField: "calendar",
                    source:  new $.jqx.dataAdapter(source)
                },
                appointmentDataFields:
                {
                    from: "start",
                    to: "end",
                    id: "id",
                    description: "description",
                    location: "location",
                    subject: "subject",
                    resourceId: "calendar"
                },
                view: 'monthView',
                views: 
                [
                    'dayView',
                    'weekView',
                    'monthView',
                    'agendaView'
                ]
            });
        });