// Welcome the user.
// Ask user for first number.
// Ask user for second number.
// Ask user for operation to perform on the two numbers.
// Perform the operation.
// Print the result to the terminal.
const MESSAGES = require('./calculator_messages.json');

let rlSync = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function numberInvalid(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

function operationValid(operation) {
  return (['a', 's', 'm', 'd'].includes(operation));
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
prompt(MESSAGES.welcome);

let num1;
let num2;
let startOver;

// Begin main loop
do {

  do {
    prompt(MESSAGES.askForNum1);
    num1 = rlSync.question();

    if (numberInvalid(num1)) {
      prompt(MESSAGES.invalidNum);
    }

  } while (numberInvalid(num1));

  num1 = Number(num1);

  do {
    prompt(MESSAGES.askForNum2);
    num2 = rlSync.question();

    if (numberInvalid(num2)) {
      prompt(MESSAGES.invalidNum);
    }

  } while (numberInvalid(num2));

  num2 = Number(num2);

  let operation;
  do {
    prompt(MESSAGES.askForOperation);
    operation = rlSync.question().toLowerCase();

    if (!operationValid(operation)) {
      prompt(MESSAGES.invalidOperation);
    }

  } while (!operationValid(operation));

  prompt(MESSAGES.result + findResult(num1, num2, operation) + '\n');

  do {
    prompt(MESSAGES.startOver);
    startOver = rlSync.question().toLowerCase();

    if (!startOverValid(startOver)) {
      prompt(MESSAGES.invalidStartOver);
    }

  } while (!startOverValid(startOver));

} while (startOverTrue(startOver)); // If startOverTrue(startOver) === true, end main loop
