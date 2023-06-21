"use strict"

// IF ......
let a = true;

if (a){
    console.log("Guten Morgen");
}

let x= 5;
let y= 7;
if (x<y){
    console.log("x ist kleiner als y \noder: ", x , "ist kleiner als: " , y);
}
else{
    console.log("y ist kleiner als x \noder: ", y , "ist kleiner als: " , x);

}

let shoppinglist = [
    "Kirschen",
    "bananen"
]
console.log("before:",shoppinglist);
if (shoppinglist.indexOf("Kiwi")=== -1)
{
    shoppinglist.push("Kiwi");
}
console.log("after:",shoppinglist);