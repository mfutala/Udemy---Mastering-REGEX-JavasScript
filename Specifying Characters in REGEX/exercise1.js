/*
Using the provided array, create a second array that only includes the numbers with the 801 area code. 
*/

let phonNums = ['801-766-9754', '801-545-5454', '435-666-1212', '801-796-8010', '435-555-9801', '801-009-0909', '435-222-8013', '801-777-6655'];

let reg = /801-/;
//foundNumbers = [];

/*
phonNums.forEach(num => {
  num.match(reg) ? foundNumbers.push(num) : '';
})

*/

let foundNumbers = phonNums.filter(num => num.match(reg));

console.log(foundNumbers);




