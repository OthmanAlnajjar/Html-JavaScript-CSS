"use strict"
let data=[];
let summe=0;
for(let i=1;i<=100; i++){
  
  if (i%2==0){
    data.push(i);
    summe=summe+i;
  }
  
}
console.log("my list of numbers :",data);
console.log(summe);