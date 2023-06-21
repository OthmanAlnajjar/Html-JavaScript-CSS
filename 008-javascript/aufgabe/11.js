"use strict"

let carBrands2020 = [
    ["BMW", 222481],
    ["Ford", 126358],
    ["Fiat", 85783],
    ["VW", 489962],
    ["Opel", 161852],
    ["Skoda", 149838],
];

let carBrands2021 = [
    ["BMW", 240968],
    ["Ford", 194250],
    ["Fiat", 89150],
    ["VW", 525612],
    ["Opel", 146219],
    ["Skoda", 181198],
];

console.log("VW hat 2021",carBrands2021[3][1],"Auto mehr verkauft, als im vorjahr.");
let differenz= carBrands2021[3][1]- carBrands2020[3][1]
console.log("vw hat 2021", differenz,"Auto mehr verkauft, als im vorjahr.");

let summe2020=0;
for (let i = 0; i <= carBrands2020.length-1; i++){
    summe2020=summe2020+ carBrands2020[i][1]
}

let summe2021=0;
for (let i = 0; i <= carBrands2021.length-1; i++){
    summe2021=summe2021+ carBrands2021[i][1]
}
console.log(summe2020,summe2021);

let differenzjahr;
if (summe2021> summe2020){
differenzjahr=summe2021- summe2020;
console.log("der jahr 2021 war mehr erfogreicher. und der differenz ist :", differenzjahr);
}
else{
    differenzjahr=summe2020-summe2021;
    console.log("der jahr 2021 war mehr erfogreicher. und der differenz ist :", differenzjahr);

}