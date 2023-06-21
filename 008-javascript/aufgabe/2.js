"use strict"
let automarken=[
    "BMW",
    "Ford",
    "Fiat",
    "VW",
    "Opel",
    "Scoda"];
    console.log("My list:",automarken);
    console.log("die Anzahl der Elements:",automarken.length);
    console.log("erstes Element:",automarken[0]);
    console.log("letztes Element:",automarken[5]);
    
    console.log("My Array-list:  ")
   for(let i=0;i<automarken.length;i++){
     
    console.log("Index",i,":",automarken[i]);
    }
    console.log("My Array-list umgekehrter Reihenfolge: ")
    for(let i=automarken.length-1;i>=0;i--){
     
    console.log("Index",i,":",automarken[i]);
    }

 