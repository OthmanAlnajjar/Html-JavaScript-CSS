"use strict"
let automarken=[
    "BMW",
    "Ford",
    "Fiat",
    "VW",
    "Opel",
    "Scoda"];
    console.log(automarken);
    automarken.push("Honda");
    console.log(automarken);

    for(let i=0;i<automarken.length;i++){
    
        console.log("Index",i,":",automarken[i]);
    }
    console.log("Nun sind im Array 7 Automarken gespeichert.");
