"use strict"
let text = "  ---!!! Guten Morgen, Sonnenschein !!!---   ";

console.log("length der text:",text.length);
// 1.
console.log("trim:",text.trim());
console.log(text);

/*2.  .trim veräandert der inhalt des strings nicht dirket
sondern nur während der funktion. */

// 3. 4. 5.  
console.log("repeating x2:",text.repeat(2));
console.log("UpperCase :",text.toUpperCase());
console.log("lowerCase :",text.toLocaleLowerCase());
// 6. anscheinend, dass es keinen unterschied gibt.
console.log(text.charAt(10));
console.log(text[10]);

// 7. .inextof 
for (const i in text){
   
    if (text[i]==="!" || text[i]==="n"){
   console.log("vorkommenden \"n\" oder \"!\" ausgeben => ", "position:",i , "Zeichens:",text [i]);
}
}
console.log();
for (let i=0; i<= text.length-1; i++)
{
    if (text[i]==="!" || text[i]==="n"){
        console.log("vorkommenden \"n\" oder \"!\" ausgeben => ", "position:",i , "Zeichens:",text [i]);
}
}
//8.
console.log("IndexOf \"n\" auf die position:",text.indexOf("n"));
console.log("lastIndexOf \"n\" auf die position:",text.lastIndexOf("n"));

//9. 
console.log(text.slice(text.indexOf("!"),text.lastIndexOf("!")));

//10. 
console.log(text.substring(text.indexOf("!"),text.lastIndexOf("!")));

//11.
let texturl="https://SchwierigeAufgabe.de?name=Max&nachname=Mustermann&alter=23";
let textarray=[];
let x=" ";
let start=0;
let end=0;
let replaced = texturl.replace(/[^a-z0-9]/gi, ' ');
console.log(replaced);

for (const i of replaced){
  
    if (i===" " || i==="  "|| i==="   "){
    end=replaced.indexOf(i);
    console.log(end);
    textarray.push(replaced.slice(start,end));
    start=end;
    replaced.slice(end);
    console.log(replaced);

    }
    

}
console.log(textarray);



