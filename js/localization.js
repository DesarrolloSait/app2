{
    // separator of parts of a date (e.g. '/' in 11/05/1955)
    '/': "/",
    // separator of parts of a time (e.g. ':' in 05:44 PM)
    ':': ":",
    // the first day of the week (0 = Sunday, 1 = Monday, etc)
    firstDay: 0,
    days: {
        // full day names
        names: ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],
        // abbreviated day names
        namesAbbr: ["dom","lun","mar","mié","jue","vie","sáb"],
        // shortest day names
        namesShort: ["do","lu","ma","mi","ju","vi","sá"]
    },
    months: {
        // full month names (13 months for lunar calendards -- 13th month should be "" if not lunar)
        names: ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],
        // abbreviated month names
        namesAbbr: ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic",""]
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
    {"name": "A.D.", "start": null, "offset": 0 }
],
    twoDigitYearMax: 2029,
    patterns: {
        // short date pattern
                                d: "dd/MM/yyyy",
                                D: "dddd, dd' de 'MMMM' de 'yyyy",
                                t: "H:mm",
                                T: "H:mm:ss",
                                f: "dddd, dd' de 'MMMM' de 'yyyy H:mm",
                                F: "dddd, dd' de 'MMMM' de 'yyyy H:mm:ss",
                                M: "dd MMMM",
                                Y: "MMMM' de 'yyyy"
        // S is a sortable format that does not vary by culture
        S: "yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss"
    },
    percentsymbol: "%",
    currencysymbol: "$",
    currencysymbolposition: "before",
    decimalseparator: '.',
    thousandsseparator: ',',
    pagergotopagestring: "Go to page:",
    pagershowrowsstring: "Show rows:",
    pagerrangestring: " of ",
    pagerpreviousbuttonstring: "previous",
    pagernextbuttonstring: "next",
    groupsheaderstring: "Drag a column and drop it here to group by that column",
    sortascendingstring: "Sort Ascending",
    sortdescendingstring: "Sort Descending",
    sortremovestring: "Remove Sort",
    groupbystring: "Group By this column",
    groupremovestring: "Remove from groups",
    filterclearstring: "Clear",
    filterstring: "Filter",
    filtershowrowstring: "Show rows where:",
    filtershowrowdatestring: "Show rows where date:",
    filterorconditionstring: "Or",
    filterandconditionstring: "And",
    filterselectallstring: "(Select All)",
    filterchoosestring: "Please Choose:",
    filterstringcomparisonoperators: ['empty', 'not empty', 'contains', 'contains(match case)',
        'does not contain', 'does not contain(match case)', 'starts with', 'starts with(match case)',
        'ends with', 'ends with(match case)', 'equal', 'equal(match case)', 'null', 'not null'],
    filternumericcomparisonoperators: ['equal', 'not equal', 'less than', 'less than or equal', 'greater than', 'greater than or equal', 'null', 'not null'],
    filterdatecomparisonoperators: ['equal', 'not equal', 'less than', 'less than or equal', 'greater than', 'greater than or equal', 'null', 'not null'],
    filterbooleancomparisonoperators: ['equal', 'not equal'],
    validationstring: "Entered value is not valid",
    emptydatastring: "No data to display",
    filterselectstring: "Select Filter",
    loadtext: "Loading...",
    clearstring: "Clear",
    todaystring: "Today"          
},
      