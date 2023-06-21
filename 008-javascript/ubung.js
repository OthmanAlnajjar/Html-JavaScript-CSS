"use stict"
// 0 1 2
console.log("*1*"); 
for(x=0;x<3; x++){
    console.log(x);
}

//0 2 4
console.log("*2*");
for(x=0;x<=4; x+=2){
    console.log(x);
}
/**** */

console.log("*3* a");
console.log("1 -> 20.");
for(x=1;x<=20; x++){
    console.log(x);
}

/***** */
 console.log("*3* b");
    console.log("x= 20.");
for(x=1;x<=20; x++){
    if(x=20){
    console.log(x);
}
}
console.log("*3* c");
console.log("x = 1 -> 10.");
for(x=1;x<=20; x++){
    if(x<=10){
    console.log(x);
}

}
/****** *3* d" */

console.log("*3* d");
console.log(" x= 1 -> 10. und 20");
for(x=1;x<=20; x++){
    if(x<=10 || x==20 ){
    console.log(x);
    
    
}
}


console.log("*3* e");
console.log(" x= 5 oder x = 15");
for(x=1;x<=20; x++){
    if(x==5 || x==15 ){
    console.log(x);
    
    
}
}

console.log("*3* f");
console.log(" x= 5 oder x = 15");
for(x=1;x<=20; x++){
    if(x%10==0 ){
    console.log(x);
    
    
}
}

console.log("*4*");
let y=0;
console.log("Dein zahl ist : ", y)


    if (y===0){
    console.log("der zahl = 0");
    }
    else if (y>0){
    console.log("der zahl is positiv");
    }
    else if (y<0){
        console.log("der zahl is negativ");
    }
    if(y%2==0){
        console.log("der zahl ist gerade ");
    }
    if (y%2!=0){
        console.log("der zahl ist ungerade");
    }

console.log("\n*5*");


console.log("\n*****Getränkeautomat*****");
let einwurf=1;
if (einwurf==1){
    console.log("*Flaschenausgabe*");
}
else {
    console.log("*Flascher Einwurf*");
}


/*6 Notenschnitt */ 
let noten;
let person = prompt("Please enter your name", "Harry Potter");

console.log(person);