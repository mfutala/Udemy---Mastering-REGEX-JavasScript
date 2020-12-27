/*
Methods
.test(); returns true of false
.exec(); returns first occurance and keeps track of index 
.match(); returns array
.search(); returns the index 
.replace(); replace some text from pattern
.split(); turns string into an array
*/

let regex1 = /hello/;
let regex3 = /\s/;
let regex2 = /world/;

let txt = `hello Programming courses always start
with a hello world example.`;

//console.log(regex1.exec(txt));
//console.log(regex2.exec(txt));
//console.log(txt.match(regex1));
console.log(txt.search(regex1));
//console.log(txt.replace(regex1, "Hi"));
//console.log(txt.split(regex3));