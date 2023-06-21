// Folgendes funktioniert noch:
/*
inhalt = "Guten Morgen";
console.log(inhalt); 
*/
// Das funktioniert nur noch, weil ganz viele alte JavaScripte im Netz umherschwirren.
// => Abwärtskompatibel
// wir wollen modernen und schönen und sicheren Code erzeugen.
// => "use strict" und "let" um Variablen zu defieniern
// => "use strict" blockiert alte Javascripte und gibt error messege z.b: ,
/*  
"use strict"
inhalt = "Guten Morgen"; '
 => ReferenceError: inhalt is not defined. 
   */

 
"use strict"

let inhalt = "Guten Morgen";
console.log(inhalt); 

