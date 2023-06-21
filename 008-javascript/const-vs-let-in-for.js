"use strict"
let text = "  ---!!! Guten Morgen, Sonnensein !!!---   ";

for (const i in text){
   
    if (text[i]==="!" || text[i]==="n"){
   console.log("vorkommenden \"n\" oder \"!\" ausgeben => ", "position:",i , "Zeichens:",text [i]);
}
}

for (let i=0; i<= text.length-1; i++)
{
    if (text[i]==="!" || text[i]==="n"){
        console.log("vorkommenden \"n\" oder \"!\" ausgeben => ", "position:",i , "Zeichens:",text [i]);
}
}