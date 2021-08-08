// What do you think the following code will output?

let nanArray = [NaN, 0];

console.log(nanArray[0] === NaN);

// ANSWER: false
// NaN does not equal anything, not even itself.

// Bonus: How can you reliably test if a value is NaN?

// Bonus Answer:

console.log(Number.isNaN(nanArray[0])); // true: NaN is NaN
console.log(Number.isNaN(nanArray[1])); // false: 0 !== NaN

/* PROVIDED ANSWER:

"The output is false. NaN -- not a number -- is a special numeric value
that indicates that an operation that was intended to return a number failed.
JavaScript doesn't let you use == and === to determine whether a value is NaN."
*/
