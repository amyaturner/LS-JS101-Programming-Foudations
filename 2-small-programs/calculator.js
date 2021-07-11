// Welcome the user.
// Ask user for first number.
// Ask user for second number.
// Ask user for operation to perform on the two numbers.
// Perform the operation.
// Print the result to the terminal.

let rlSync = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function numberValid(num) {
  return !Number.isNaN(num);
}

function askForOperation() {
  return prompt('Please enter a letter for the operation you would like to perform on your two numbers:\n "a" for "addition",\n "s" for "subtraction",\n "m" for "multiplicaton",\n "d" for "division"');
}

function operationValid(operation) {
  return operation === 'a' || operation === 's' || operation === 'm' || operation === 'd';
}

function findResult(num1, num2, operation) {
  let result;
  switch (operation) {
    case 'a':
      result = num1 + num2;
      break;
    case 's':
      result = num1 - num2;
      break;
    case 'm':
      result = num1 * num2;
      break;
    case 'd':
      result = num1 / num2;
      break;
  }

  return result;
}

function startOverValid(startOver) {
  return startOver === 'y' || startOver === 'yes' || startOver === 'n' || startOver === 'no' || startOver === 'q' || startOver === 'quit';
}

function startOverTrue(startOver) {
  return startOver === 'y' || startOver === 'yes';
}

// Begin
prompt('Welcome to Calculator!');

let num1;
let num2;
let startOver;

// Begin main loop
do {

  do {
    prompt('Please enter your first number:');
    num1 = rlSync.question();

    if (!numberValid(num1)) {
      prompt('That is not a number.');
    }

  } while (!numberValid(num1));

  do {
    prompt('Please enter your second number:');
    num2 = rlSync.question();

    if (!numberValid(num2)) {
      prompt('That is not a number.');
    }

  } while (!numberValid(num2));

  let operation;
  do {
    askForOperation();
    operation = rlSync.question().toLowerCase();

    if (!operationValid(operation)) {
      prompt(`Sorry. Not able to perform that calculation.`);
    }

  } while (!operationValid(operation));

  prompt(`Your result is ${findResult(num1, num2, operation)}\n`);

  do {
    prompt('Would you like to start again? Enter "y" for Yes, "n" or "q" to quit.');
    startOver = rlSync.question().toLowerCase();

    if (!startOverValid(startOver)) {
      prompt('Oops. Please enter a valid input.');
    }

  } while (!startOverValid(startOver));

} while (startOverTrue(startOver)); // If startOverTrue(startOver) === true, end main loop
