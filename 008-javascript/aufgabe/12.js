"use strict"

let data=[];
let Anzahl= 10;
for(let i=1; i<= Anzahl; i++){
    data.unshift("aufgabe "+i);
}
console.log(data);
let count=data.length
let aktuell=0;
for (let i = 0; i<= count-1; i++){
    aktuell=data.pop();
    console.log("Die beamten sind erwacht und habe die aufgabe", aktuell, "bearbeitet.");

}
/*UN FINISHED */