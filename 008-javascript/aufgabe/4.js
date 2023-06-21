
"use strict"
let automarken=[
    "BMW",
    "Ford",
    "Fiat",
    "VW",
    "Opel",
    "Scoda"];
    console.log("My list:",automarken);
    console.log("die Anzahl der Elements:",automarken.length);
    automarken.push("Honda");
    console.log(" Mit der neuen Automarke \"Honda\" sind nun im Array",automarken.length," Automarken gespeichert:");
    console.log("My list:",automarken);
    
    automarken.sort();
    console.log("Jetzt sind die Automarken in die korrekte Reihenfolge gebracht:");
    console.log("My list:",automarken);


    let deleted=automarken.pop();
    console.log("Die letzte Automarke wurde entfernt, es war die Marke", deleted);
    console.log("Jetzt sind es wieder nur noch",automarken.length,"Automarken im Array. Übrig geblieben sind:");
    console.log("My list:",automarken);
