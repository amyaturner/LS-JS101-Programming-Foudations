/* Return a new version of this sentence that ends just
before the word house. Don't worry about spaces or punctuation:
remove everything starting from the beginning of
house to the end of the sentence.
*/

let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

console.log(advice.substring(0, 39));
console.log(advice);

// CORRECT

/* Provided Hint:
Review the String.prototype.slice() and String.prototype.indexOf() methods,
and use those methods to create the return value.
*/
console.log();
console.log(advice.slice(0, advice.indexOf('house')));
console.log(advice);

// ALSO CORRECT
