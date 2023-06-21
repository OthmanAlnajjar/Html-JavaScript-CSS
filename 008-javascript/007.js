"use strict"

/* Ein Array speichert beliebig viele daten */

let obst = [

    "Banane",    // Stelle 0
    "Pfrisch",   // Stelle 1
    "Mango",    // Stelle 2
    "Krische"   // Stelle 3

];

let preise = [
    1.20, // Stelle 0
    2.60, // Stelle 1
    4,
    12
];

let durchschnitt= preise[0]+preise[1];
console.log(durchschnitt);
console.log(obst);
console.log(preise);

console.log("Anzahl der Elemente in meinem Obst-Array:", obst.length); // anzahl der elemente
console.log("Zugriff auf Element obst [2]:", obst[2]);                 // Zugriff auf ein einzelnes Element
console.log("Zugriff auf Element obst [2]:", obst[10]);                // was ist bei einem nicht existenten Index?
obst.push("Maracwja","Melone");                                        // Element hinzufügen
console.log(obst);

//Element löschen
let aktuellesObst = obst.pop();
console.log(aktuellesObst);
obst.pop(obst);

// inhalt überschreiben
console.log("banane is gone");
obst[0] = "Apfel";
console.log(obst);



// Alternative zum push
obst[obst.length]= "birne";
console.log(obst);

// Alternative zum push (Leereinträge werden angezeigt)
obst[20]= "Orange";
console.log(obst);

// Entfernen von Elementen mit splice
console.log("splice");
console.log(obst);
obst.splice(1,3);
console.log(obst);

// Hinzufügen mit splice
obst.splice(1,0,"Kiwi");
console.log(obst);

// sortierung aufsteigend
obst.sort();
console.log(obst);

// sortierung absteigend
obst.reverse();
console.log(obst);


// prüfen, ob ein Element im Array vorhanden ist
// Fall 1: es ist vorhand : zurück geliefert wird die Position des gesuchten Elements
console.log(obst.indexOf("Kiwi"));
// Fall 2: es ist nicht vorhanden : Zurück geliefert wird -1
console.log(obst.indexOf("Mango"));
