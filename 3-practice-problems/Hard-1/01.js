// Will the following functions return the same results?

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

// ANSWER: No. The first will return "hi there", but the second will just return
// without anything (undefined). This is because there is nothing on the same
// line with 'return' so the JavaScript interpreter will read it as though there
// is nothing to return and exit out of the function before even reading
// the next line.

/* PROVIDED EXPLANATION:

The reason for this odd behavior is that semicolons, in JavaScript,
are technically optional. However, when you omit them,
the JavaScript engine inserts them where it thinks you need them.
In second, it inserts a semicolon after the word return,
so the function returns undefined. No errors are thrown
since the rest of the code is valid, even though it never gets executed.

Some developers rely on this behavior and
write JavaScript code without semicolons.
However, most developers consider it poor practice
since you're relying on the engine to make decisions for you,
and those decisions may not be what you intended.
*/
