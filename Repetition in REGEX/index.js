/*
repetion metacharacters

+ Matches one or more occurances. - Left most previous    item.

? Matches zero or one occurances - Also used to make      the query lazy.

* Matches zero or more occurances 

*/

/*
Greediness and Laziness - Regular epxressions try to match as much as they can. 

? makes the query lazy. 

Repetition 
{min, max}
{min}
{min,}

*/


function validatePhoneNumber(num) {
  let regEx = /[\(]?\d{3}\)?[-.]?\d{3}[-.]?\d{4}$/g;
 
  return regEx.test(num);
};

console.log(validatePhoneNumber('206-679-1178'));

