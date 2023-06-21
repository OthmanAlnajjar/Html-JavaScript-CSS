"use strict"
const automarken=["BMW","VW","Ford"];


// Ausgabe mit Länge des Arrays
for(let i = 0; i<= automarken.length-1; i++){
    console.log("index:", i , "automarke:", automarken[i]);
}
console.log();

// 1. For-Each-Variante 1 über index (in)
for (const i in automarken){
    console.log("index:", i, "automarke:", automarken[i]);
    // Miniaufgabe: Bei dem zweiten Element soll "Überraschung" ausgegeben werden
    if (i ==1){
        console.log("Überrachung")
    }
}