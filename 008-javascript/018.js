"use strict"

// Funktionen und Gültigkeit von Variablen

// globale Variable definieren
let name = "Anton";

// durch den Parameter in den Klammern wird automatische eine neue "lokale" Variable definiert - obwohl die Variable ebenfalls name heißt
function writeGM() {
    console.log("Guten Morgen,", name);
    name = "Fred";
}

// Hier wird Anton ausgegeben, weil die Funktion writeGM() die globale Variable ausgibt und diese den Inhalt Anton hat 
writeGM();

// Hier wird Fred ausgegeben, weil die Funktion writeGM() nach der Ausgabe den Inhalt der globalen Variablen verändert hat 
// Warnung: Dieses Verhalten spriht gegen die verwendung globaler Variablen.
console.log("Name: ", name);