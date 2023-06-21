"use strict"
// 
// Eine Callback-Funktion ist eine Funktion, die meistens vom System

const fs = require("fs");

fs.readdir(__dirname, (err, files) => {
    console.log(files);
    console.log(err);
})

const funktion = (err, files) => {
    console.log(files);
    console.log(err);
}
fs.readdir(__dirname, funktion);