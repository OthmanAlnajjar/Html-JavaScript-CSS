"use strict"


function writeGM(name, language="en") {
  if (name !== " ") {
      if (language === "de") {
        console.log("Guten Tag,", name);
      } else if ( language ==="en") {
        console.log("Hello,",name);
      } else {
      console.log("Bitte verwende <de|en>");
      }
  } else {
      console.log("wir brauchen einen NAMEn");
  }
  
}
writeGM("Mosab","de");