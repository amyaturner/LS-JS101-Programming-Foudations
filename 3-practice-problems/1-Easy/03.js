/* Determine whether the following object of people and
their age contains an entry for 'Spot':
*/

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

/* Note that our keys have capitalized names; this usually
violates style guidelines, but is fine for our purposes.
We'll use such keys in several exercises in this course.
*/

console.log(Object.keys(ages).includes('Spot')); // false
console.log(Object.keys(ages).includes('Herman')); // true
console.log(Object.keys(ages).includes('herman')); // false

// PROVIDED SOLUTION:

ages.hasOwnProperty("Spot");

