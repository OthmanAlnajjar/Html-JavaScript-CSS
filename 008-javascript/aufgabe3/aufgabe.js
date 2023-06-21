"use strict"
//1*
console.log("1.");
function summe(zahl1,zahl2){
    return zahl1+zahl2;

}
console.log(summe(2,3));

//2*
console.log("2.");
let op="+";
function GO(zahl1,zahl2,op){
    if (op === "+"){
    return zahl1+zahl2;
    }
    else if (op==="-"){
        return zahl1-zahl2;
    }
    else if (op==="*"){
        return zahl1*zahl2;
    }
    else if (op==="/"){
        return zahl1/zahl2;
    }
}
console.log(GO(10,2,"*"));

//3*
console.log("3. die Summe aller Zahlen eines Arrays zurückgibt");
const numberslist=[
    1,2,3,4,5,6
];
let addition=0;
function result(numberslist){
    for (let i=0; i<= numberslist.length-1; i++){
        addition=addition+numberslist[i];
    }
    return addition;
}
console.log(numberslist,"summe=",result(numberslist));

//4*
console.log("4.");

let radiusArray=[];

function circle(radius){
    let Umfang=2*Math.PI*radius;
    let flache=Math.PI*radius**2;
    radiusArray.push(Umfang,flache);
    console.log(radiusArray);
    }

circle(5);

