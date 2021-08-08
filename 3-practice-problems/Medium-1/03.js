/* Alan wrote the following function,
which was intended to return all of the factors of number:
*/

function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

/* Alyssa noticed that this code would fail
when the input is 0 or a negative number,
and asked Alan to change the loop. How can he
make this work without using a do/while loop?
Note that we're not looking to find the factors
for 0 or negative numbers, but we want to handle
it gracefully instead of raising an exception or going into an infinite loop.

Bonus: What is the purpose of number % divisor === 0 in that code?

Bonus Answer: The purpose of number % divisor === 0 is to determine if
there is a remainder or not when dividing the curent number (after iterating)
into number. If there is a remainder, the condition evaluates to false,
and so that is not a factor of number and does not get 'pushed' to the
factors array.
*/

function factors2(number) {
  if (number <= 0) {
    return "0 or negative numbers cannot be evauated as factors.";
  }

  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

console.log(factors2(0));
console.log(factors2(-1));
console.log(factors2(1));
console.log(factors2(12));

/* Technically correct, but I was confused about the
problem question. Mainly, the part about not using
a do-while loop. I didn't know if it meant,
don't use one at all in the function definition,
or don't use a second one for handling a 0 or negative number
input gracefully.

After looking at the provided solution, I could see it meant
don't use one at all:
*/

function factorsAlt(number) {
  let divisor = number;
  let factors = [];

  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(divisor);
    }
    divisor -= 1;
  }

  return factors;
}

// How does the result differ if you replace line 3 with factors.push(divisor);?

// Answer: Basically, I think it reverses the order of the elements or 'factors'
// in the factors array (return value) so that they are descending instead of
// ascending.

console.log(factorsAlt(0));
console.log(factorsAlt(-2));
console.log(factorsAlt(1));
console.log(factorsAlt(12));

// Also, rather than log a gracefully message if 0 or negative number is input,
// the provided solution just returns an empty array, indicating there are
// no factors (although that is not mathematically correct for negative numbers.
