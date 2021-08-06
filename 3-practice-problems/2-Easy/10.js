/* Write two one-line expressions to count the number
of lower-case t characters in each of the following strings:
*/

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
let tCount = 0;

[...statement1].forEach((letter) => {
  if (letter === 't') {
    tCount += 1;
  }
});

console.log(tCount);

// INCORRECT implementation/solution (correct answer).
// Found .matchAll() method, but not yet great with using RegEx, so I had to
// look up how one might go about this:

let tCountStatement1 = (statement1.match(/t/g) || []).length;
console.log(tCountStatement1);

let tCountStatement2 = (statement2.match(/t/g) || []).length;
console.log(tCountStatement2);

let statement3 = "this is the end of the counter in my life as it is. Thank you, there ya.";
let tCountStatement3 = (statement3.match(/t/g) || []).length;
console.log(tCountStatement3);

// Works :)

// PROVIDED SOLUTION:

statement1.split('').filter(char => char === 't').length;
statement2.split('').filter(char => char === 't').length;

// More elegant and logical :)
