"use strict"
let automarken2020 = [
    ["BMW", 222481],
    ["Ford", 126358],
    ["Fiat", 82783],
    ["VW", 489962],
    ["Opel", 161852],
    ["Scoda", 149838],
    ];
    console.log("die erste Automarke mit Ihren Neuzulassungen :",automarken2020[0]);
    console.log("die letzte Automarke mit Ihren Neuzulassungen :",automarken2020[5]);
    
let summe=0;
let allermarken="";
let space=" ";
    for(let i=0; i<automarken2020.length;i++){
        console.log(automarken2020[i]);
        summe=summe+automarken2020[i][1];
        allermarken=allermarken+space+automarken2020[i][0];
    }
    console.log("die Summe aller Neuzulassungen aller Autos :",summe);
    
    automarken2020.push([allermarken,summe]);
    console.log(automarken2020);

    let automarken2021 = [
        ["BMW", 240968],
        ["Ford", 194250],
        ["Fiat", 89150],
        ["VW", 525612],
        ["Opel", 146219],
        ["Scoda", 181198],
        ];