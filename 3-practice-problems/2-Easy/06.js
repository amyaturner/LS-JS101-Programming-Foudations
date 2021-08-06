// Suppose we build an array like this:

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// This code will create a nested array that looks like this:

["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

/* Nesting data structures like we do here is
commonplace in JavaScript and programming in general.
We'll explore this in much greater depth in a future Lesson.

Create a new array that contains all of the above values,
but in an un-nested format:

[ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]
*/

flintstones = ["Fred", "Wilma"];
let flintstonesNew = [...flintstones];
flintstonesNew.push("Barney", "Betty", "Bambam", "Pebbles");

console.log(flintstonesNew);

/* Not quite what the writer of the problem was intending for its solution,
but it's technically a correct answer for the way the problem is written,
since there's no specificity in how to create the new array.

Hint 1:
Read about the Array.prototype.concat() method on MDN,
and pay close attention to how concat uses its arguments.
*/

let flintstonesRelatives = ["Barney", "Betty"];
let flintstonesKids = ["Bambam", "Pebbles"];
let flintstonesFamily =
      flintstones.concat(flintstonesRelatives).concat(flintstonesKids);

console.log(flintstonesFamily);


/* Hint 2:
Consider using spread syntax in your solution.
If you can't get a solution with spread syntax,
try using Array.prototype.reduce or Array.prototype.forEach.
*/

flintstonesFamily = ([...flintstones] + ',' + [...flintstonesRelatives] + ',' + [...flintstonesKids]).split(',');
console.log(flintstonesFamily);

// Or just:
console.log();
console.log('This is the WINNER!');
flintstonesFamily = [...flintstones, ...flintstonesRelatives, ...flintstonesKids];
console.log(flintstonesFamily);

// PROVIDED SOLUTIONS:

// Solution with .contat() and spread syntax (...)
console.log(); // spacer
flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
console.log(flintstones);
flintstones = [].concat(...flintstones); // this is the solution
console.log(flintstones);

// Solution with reduce:

flintstones = flintstones.reduce((accum, element) => {
  return accum.concat(element);
}, []);

// Solution with forEach:

let newFlintstones = [];
flintstones.forEach(element => {
  newFlintstones = newFlintstones.concat(element);
});

// Solution with flat (true winner):

let newFlintstones = flintstones.flat();
