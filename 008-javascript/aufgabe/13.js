"use strict"
let prime = 256;
for(let i=1; i<=prime;i++){
    anzahlTeiler=0;
    for(let j=1;j<=i;j++){
        if (i%j===0){
            anzahlTeiler++;

        }
    }
}