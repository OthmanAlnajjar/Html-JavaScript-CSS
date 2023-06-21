"use strict"
let zahl=0;
function quadrat(zahl){
   return zahl=zahl**2
 
}
function fakultat(zahl){
    let ergebnis=1;
    for(let i=1;i<=zahl;i++){
        ergebnis=ergebnis*i;
    }
    return ergebnis;
}
let y="";
function primzahl(zahl,y){
   
    for(let i=1;i<zahl;i++){
       
        if (zahl%i==0 && zahl!==2){
            y="nein";
            break;
        }
        else {
            y="ja";
        }
    }
    return y;
   
}
let numberstr="21";
function harshad(numberstr,y){
    
   let k=parseInt(numberstr[0])+parseInt(numberstr[1]);
    if(parseInt(numberstr)%k===0){
        y="ja"
    }
    else{
        y="nein"
    }
    return y;
}

function teilbar(zahl,y){
    if (zahl%12===0){
        y="ja";
    }
    else {
        y="nein";
    }
    return y;
}


function test(startwert,endwert,laufweite)
{    let summe=0;
    let quadsum=0;
    for(let i=startwert;i<=endwert;i+=laufweite)
    {   summe= summe + i;
        console.log("die zahl:",i,"Quadrat:",quadrat(i),"fakultat:", fakultat(i),"Primzahl:",primzahl(i),"Harshad zahl:",harshad(i),"ist die Zahl durch 12 teilbar?",teilbar(i),"summe:",summe);
        quadsum=quadrat(i)+quadsum;
    }
    console.log("der summ:",summe,"der quadsum:",quadsum);
    

}
test(10,20,2);

