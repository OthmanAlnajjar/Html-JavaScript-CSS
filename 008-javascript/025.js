"use strict"

const fs = require("fs");

fs.readFile("daten.txt", {encoding:"utf8"}, (err,daten) => {
    console.log(daten);
});

