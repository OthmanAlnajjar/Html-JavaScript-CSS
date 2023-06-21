"use strict"

function writeGM(name, language) {
    if (name !== " ") {
        if (language === "de") {
                console.log("Guten Morgen,", name);
        } else if ( language ==="en") {
        console.log("Hello,",name);
        } else {
        console.log("Bitte verwende <de|en>");
        }
    } else {
        console.log("wir brauchen einen NAME");
    }
    
}
 writeGM("Mosab","de");