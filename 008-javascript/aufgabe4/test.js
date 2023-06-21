"use strict"

    let i =12;
   let numberstr=i.toFixed;
   let k=0;
   let y="";
   let x=0;
    k=parseInt(numberstr[0])+parseInt(numberstr[1]);
    x=parseInt(numberstr)%k;
    if(parseInt(numberstr)%k===0){
        y="ja"
        console.log(y);
    }
    else{
        y="nein"
        console.log(y);
    }
    console.log(parseInt(numberstr)%k===0);
    console.log(x);
    


