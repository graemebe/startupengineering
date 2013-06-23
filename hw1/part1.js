#!/usr/bin/env node

// graeme bennett 2013
// graemebedev@gmail.com
// Starup engineering hw1/part1

var fs = require('fs');
var outfile = "hello.txt";
var out = "A startup is a business built to grow rapidly.\n";
fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
