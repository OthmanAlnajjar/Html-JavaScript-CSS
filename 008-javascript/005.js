"use strict"

// Der + Operator hat in JavaScript Zwei Funktionen
// 1. mathematische funktion.
console.log(3+8);

// 2. string - Verknüfung 
console.log("Guten Morgen " + "liebe Welt");

//Kleine Aufgabe 1:
/* Definiere zwei Variablen zahl1 und zahl2 und weise ihnen die zahlen 3 und 5 zu.
    definiere eine weitere Zahl ergebins 
    addiere zahl1 und zahl2 und weise es ergebnis zu 
    gib ergebnis aus. */

    let zahl1=3;
    let zahl2=5;
    let ergebnis=zahl1+zahl2;
    console.log(zahl1,"+",zahl2,"=", ergebnis);

// Kleine Aufgabe 2:
/* Mache das Gleiche analog zu Aufgabe 1 mit zwei Strings (text1, text2, textgesamt)
    - achte bitte auch auf ein Leerzeichen zwischen den Strings */

    let text1="hallo";
    let text2="world";
    let textgesamt=text1+" "+text2;
    console.log(text1,"+",text2,"=", textgesamt);

    // Kleine Aufgabe 3:
/* Mache das Gleiche analog zu Aufgabe 1, aber diesmal wieder mit zwei Zahlen (zahl3, zahl4, ergebnis2),
    nur dass du die 3 als Zahl zuweist und die "5" als String.
    Was sagst du zu dem Ergebnis.
    An die Fortgeschrittenen: Wie war das in php? */

  
    let zahl3=3;
    let zahl4="5";
    let ergebnistextundzahl=zahl3+zahl4;
    console.log(zahl3," + ",zahl4," = ", ergebnistextundzahl);