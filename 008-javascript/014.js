"use strict"
for( let i = 1; i <=10; i++){
    if (i===2|| i ===5){
      continue;        // continue bricht den aktuellen scheifendurchlauf ab und macht mit dem nächsten weiter.
                        // Miniaufgabe: die schleife soll die 2 "und" die 5 auslassen
    }
    if (i===9){
        break;    
    }
    console.log("i:", i)
}
