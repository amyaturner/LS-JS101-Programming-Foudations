// What will the following code output?

console.log(false == '0');
console.log(false === '0');

/* ANSWER:

true
false

CORRECT!

LS Explanation:
"In JavaScript, there are two equality operators: strict equality (===)
and non-strict (or weak) equality (==).
The === operator behaves as a traditional equality operator
does in most languages: it evaluates as true when the
two expressions on either side have the same type and value.
On the other hand, the == operator coerces the values to
the same type before comparing them.
Coercions can produce unexpected and confusing behavior.
Thus, it's good practice to use === rather than ==.
The same holds for the !== vs. != operators: prefer !==."
*/
