"use strict"
let x=[0, 1];
let fibo=50;
for (let i=0;i<=fibo;i++ ){
   x.push((x[i]+x[i+1]));
}
console.log(x);
