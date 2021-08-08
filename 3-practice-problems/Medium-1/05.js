// What will the following two lines of code output?

console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);

// Don't look at the solution before you answer.

// Answer: .9 and true
// Incorrect.

/* Provided Solution:

0.8999999999999999
false

The details of why this happens aren't crucial right now --
it's just something you need to be aware of.
However, if you want to learn more,
the following two optional videos are helpful.

My notes: This has to do with infinite floating point numbers
being compressed down into only 23 points in a 32 bit computer
system. So, the floating point number .6 is really seen by 
the computer as something like .6000000000000001 (might not be
quite accurate but something like that) and same with .3.
So when you add them up they are adding all of those points after
the decimal and the computer doesn't see it as 'clean' even decimal
numbers. So the math is incorrect, but it's correct to the computer
that is calculating based on these 23 points and base 2 (binary) scientific
notation numbers.

See this video for a better explanation: https://www.youtube.com/watch?v=PZRI1IfStY0

*/
