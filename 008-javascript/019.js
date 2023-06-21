"use strict"

function writeGM(name, language)  {
    if ( language === "de") {
    console.log("Guten Morgen", name);
    } else if (language === "en") {
    console.log("Hello,", name);
    } else {
      console.log("Bitte nur de|en");  
    }
}

writeGM("Raven", "en");