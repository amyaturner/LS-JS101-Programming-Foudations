/* The Array.prototype.reverse method reverses the order of elements
in an array, and Array.prototype.sort can rearrange the elements
in a variety of ways, including descending. Both of these methods mutate
the original array as shown below. Write two distinct ways of reversing
the array without mutating the original array. Use reverse
for the first solution, and sort for the second.
*/

let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

console.log();
numbers = [1, 2, 3, 4, 5];
let newNumbers = [];
numbers.map((num) => newNumbers.push(num));
newNumbers.reverse();
console.log(newNumbers);
console.log(numbers);

/* Bonus Question: Can you do it using the Array.prototype.forEach() method?

Answer: Yes - just replace .map() with .forEach();

Hint: For the second way, read about Spread syntax on MDN
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
*/

console.log();
numbers = [1, 2, 3, 4, 5];
let newNewNumbers = [...numbers].reverse();

console.log(newNewNumbers);
console.log(numbers);

// BOOM!

// PROVIDED SOLUTIONS:

// 1)
let reversedArray = numbers.slice().reverse();

// 2)
let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);

// 3)
let reversedArray = [];
numbers.forEach((number) => {
  reversedArray.unshift(number);
});
