/*

^ Anchors the match to start of line

$ Anchors the match to the end of the line

Multi Line mode flag looks of a match at the start of each line 


*/

/*
Word Boundary 

\b  - Pattern is bound by a non-Word Character
\B  - Pattern is bounded by a word Character




let text1 = 'Each and every Tuesdays, at the beginning of the day, we hold a staff meeting. At the Wednesday staff meeting, you will need to make a report on the past weeks progress, and you will receive assignments for the following Tuesday. Just be aware that soemdays this Tuesday meeting might not occur. When that happens, we will make an announcement.';

let regEx = /(tuesday|wednesday|thursday|friday|saturday|sunday)/gi;
let reg = /\b[mtwfs][a-z]{1,4}[nsir]day(\b|\B)/gi

console.log(text1.replace(reg, "Friday"));



let vocabulary = ['hello world',
  ['happy', 'cheerful', 'merry', ['glad','sad', 'angry']],
  ['tired', ['sleepy', 'more sleepy'], 'even more sleepy', 'fatigued','drained'],
  ['excited', 'eager', ['enthused', ['crying','bored']], 'animated']];
/*

  let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];
*/
/*
function stepArray(arr) {

arr.forEach(element => {
  if (Array.isArray(element)) {
    [value, ...rest] = element;
    console.log(value)
    stepArray(rest);
  }else {
  console.log(element);
  }

  });
}

stepArray(vocabulary);
*/
let vocabulary = ['hello',
  ...['happy', 'cheerful', 'merry', 'glad'],
  ...['tired', 'sleepy', 'fatigued', 'drained'],
  ...['excited', 'eager', 'enthused', 'animated']
];


console.log(vocabulary.forEach(word => console.log(word) ));