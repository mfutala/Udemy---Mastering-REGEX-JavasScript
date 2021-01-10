/*
Pipe symbol spits the regex into multiple alternatives
Grouping establishes precedence 

grouping captures data

*/

/*
let regEx = /^(\d{4})[-./](\d{1,2})[-./](?:\d{1,2})$/


let data = '2018-3-9';
let arr = regEx.exec(data);

console.log(arr);

*/

/*
Extracting Text
*/
/*

look ahead groups
?=

^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$

let data = 'Allthings.com google.com youtube.com';

let regEx = /\w+(?=\.com)/g;

let arr = data.match(regEx);
console.log(arr);

*/


/*
negative lookahead groups
?!
^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?!.*[0-9]).*$
this one makes sure there aren't any numbers

*/

let data = ['Jensen, Dale', 'Smith, Andrea', 'Jorgensen, Michael', 'Vasefi, Annika', 'Lopez, Moninca', 'Crockett, Steven'];



//console.log('Jensen, Dale'.match(/^(\w+), (\w+)$/))
 
let nameArray = data.map(element => {
let temp = element.match(/^(?<last>\w+)(?:, )(?<first>\w+)$/);
 //return temp[2] + ', ' + temp[1];
 return temp.groups.first + ' ' + temp.groups.last;
});

console.log(nameArray);


// This uses Replace 
let newData = data.map(name => {
   return name.replace(/(\w+)(?:, )(\w+)/,"$2 $1");
});

//console.log(newData);

//\b(?:words\W+(?:\w+\W+){0,}together)|(?:together\W+(?//:\w+\W+){0,}words)\b

//for validating a date 
/(3[01]|[12][0-9]|0?[1-9])\/(1[0-2]|0?[1-9])\/([0-9]{2})?[0-9]{2}/