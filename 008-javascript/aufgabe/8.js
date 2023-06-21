"use strict"
let data=[];

for(let i=1;i<=100; i++){
  data.push(i);
  
}

let summe= (data.length/2)*(data.length+1);

console.log("my list of numbers :",data);
console.log("„Gauß'schen Lösungsschema“:","summe =(data.length/2)*(data.length+1)" );
console.log("die summe der Array: ",summe);