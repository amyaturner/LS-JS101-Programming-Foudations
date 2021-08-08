/* Write three different ways to remove all
of the elements from the following array:
*/

let numbers = [1, 2, 3, 4];

// 1)
numbers = [];
console.log(numbers);

// 2)
numbers = [1, 2, 3, 4];
numbers.length = 0;
console.log(numbers);

// 3)
numbers = [1, 2, 3, 4, []];
numbers = numbers.filter((element) => element === []);
console.log(numbers);

// These work.

// PROVIDED SOLUTIONS:

numbers.length = 0;

numbers.splice(0, numbers.length);

while (numbers.length) {
  numbers.pop();
}
// the while loop works since you're not using an index as the counter.
