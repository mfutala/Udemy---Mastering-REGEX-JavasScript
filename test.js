/*
let text = "<b>This is bold</b>";
text

text.replace(/b>/g,'strong>');

let aName = 'Jensen, Dale'.match(/\w+/g);

console.log(aName);

let phrase = 'First number: 32, and a second number 100. Here is the last number 15';

let reg = /\d+/g

phrase.match(reg).reduce((accum, number) => parseInt(accum) + parseInt(number));

phrase.indexOf(phrase.match(reg));

phrase.match(reg)[0].length
*/

let phrase = 'First number: 32, and a second number 100. Here is the last number 15';

let reg = /\d*/g;

/*
console.log(phrase.match(reg).reduce((accum, number) => {
  console.log(number)
  return parseInt(accum) + parseInt(number)
 },0));
*/

let match = null;

while(match = reg.exec(phrase)) {
  if (match.index === reg.lastIndex) reg.lastIndex++;
  console.log(match.index);
}

