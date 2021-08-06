/* Back in the stone age (before CSS),
we used spaces to align things on the screen.
If we have a 40-character wide table of Flintstone family members,
how can we center the following title above the table with spaces?
*/

let title = "Flintstone Family Members";
let spaces = '';
let numberOfSpaces = Math.round((40 - title.length) / 2);

for (let i = 1; i <= numberOfSpaces; i += 1) {
  spaces += ' ';
}

let centeredTitle = spaces + title + spaces;  // the last + spaces is optional I guess.
console.log(centeredTitle);

// BOOM, correct!

/* Hint:
Read about the Math.floor() function on MDN.
You should also read about the String.prototype.padStart method on MDN as well.
*/

console.log(title.padStart(title.length + numberOfSpaces, ' '));
// the second argument is optional here since the default
// will use spaces to make the string long enough:
console.log(title.padStart(title.length + numberOfSpaces));

// I'm getting better! :)

// PROVIDED SOLUTION:

let padding = Math.floor((40 - title.length) / 2);

title.padStart(padding + title.length);
