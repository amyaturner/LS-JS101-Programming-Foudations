/* Let's do some "ASCII Art":
a stone-age form of nerd artwork from back
in the days before computers had video screens.

For this practice problem, write a program that outputs
The Flintstones Rock! 10 times,
with each line indented 1 space to the right
of the line above it. The output should start out like this:

The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!
   ...

For each log of text, add another space to the beginning of the text
Loop 10 times.

*/

let counter = 0;
let spaces = '';
let text = 'The Flintstones Rock!';

do {
  console.log(spaces + text);
  spaces += ' ';

  counter += 1;
} while (counter < 10);

// PROVIDED SOLUTION:

for (let padding = 1; padding <= 10; padding++) {
  console.log(" ".repeat(padding) + "The Flinstones Rock!");
}

/* The problem I see with LS's provided solution is that the first line
also has one space indented, but it shouldn't; it should have
no space indented on the first line. The indent should start on the second line.
So, technically, my solution is more accurate.
*/
