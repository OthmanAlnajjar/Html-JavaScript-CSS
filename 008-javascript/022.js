"use strict"

// 1.
// Defintion oder Deklaration, dabei wird die Function noch nicht benutzt

function writeGM() {
    console.log("Guten Morgen");
}

writeGM();

// 2. Art - Funktion als s.g anonyme Funktion()
// Die Function hat keinen enginen Namen, aber sie macht etwas und kann einer Variablen zu geordnet werden.
// die Variablen schreibeHallo erhält als Inhalt eine Function, die irgenwas macht.
const schreibeHallo = function() {
    console.log("Guten Morgen, Ich bin anonym");
    return "Ich habe atwas getan";
  
}

// Hier wird der Inhalt der Variablen schreibeHallo ausgegeben [Function: .....]
console.log(schreibeHallo);

// Hier wird der return value ausgegeben
console.log(schreibeHallo());

// Hier wird die Function, die in der Variablen schreibeHallo gespeichert ist, ausgeführt.
// Das geschieht durch die Klammern () hinter dem Variablennamen
schreibeHallo();

// 3. Art anonyme Function, "Fat-Arrow-Scheibweise"
const schreibeHallo2 = () => {
    console.log("Guten Morgen, Ich bin fat Arrow");
}

schreibeHallo2();