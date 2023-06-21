"use strict"

let plus5

// Ausführliche Definition einer anonymen Funktion in Fat-Arrow -Scheibweise
plus5 = (zahl) => {
return zahl + 5;
}

console.log(plus5(4));

// wenn die Funktion exact EINEN Parameter hat,
// dann lässt man die runden Klammen oft einfach weg 
plus5 = zahl => {
    return zahl + 5;
} 

console.log(plus5(4));

// Wenn die Funktion nur aus EINER Codezeile besteht,
// dann können auch noch die geschweiften Klammern und das return weggelassen werden.

plus5 = zahl => zahl + 5;

console.log(plus5(4));                    