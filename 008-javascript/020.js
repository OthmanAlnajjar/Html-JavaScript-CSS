"use strict"
let zahl1 = 5;
let zahl2 = 10;

// return liefert mir mein Ergebnis zurück
function addition(zahl1, zahl2) {
    return zahl1 + zahl2;
}

//  Funktionaufruf liefert das Ergebnis zurück, welches ich direckt ausgeben kann
console.log(addition(zahl1, zahl2));

// Funktionaufruf liefert mir das Ergebnis zurück, welches ich in einer Variablen zwischenspeicher...
let loesung = addition(zahl1, zahl2);

loesung = loesung + 5;
// und später dann z.B. ausgeben kann
console.log("als Variable:", loesung );

// Ein Return beendet Immer die Funktion
function writeGM() {
    console.log("Guten");
    return "Ich bin hier fertig";
    console.log("Morgen");
}


// Ein eigenes indexOf
// liste ist ein array in dem der value gesucht werden soll
function indexOf(liste, value) {
    for (const i in liste) {
        if(liste[i] === value) {
            return i;
        }
    }
    return -1;
}

console.log(indexOf(["Guten", "Morgen", "i"], "Hallo"));

let list = [
    "Opel",
    "Ford",
    "BMW",
];

let searchvalue = "BMW";

let index = indexOf(list, searchvalue);

console.log("Stelle:", index);