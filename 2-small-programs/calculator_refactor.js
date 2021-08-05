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

function askForNum() {
  let num;

  do {
    prompt(MESSAGES.askForNum);
    num = rlSync.question();

    if (numberInvalid(num)) {
      prompt(MESSAGES.invalidNum);
    }

  } while (numberInvalid(num));

  return Number(num);
}

function numberInvalid(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

function askForOperation() {
  let operation;

  do {
    prompt(MESSAGES.askForOperation);
    operation = rlSync.question().toLowerCase();

    if (!operationValid(operation)) {
      prompt(MESSAGES.invalidOperation);
    }

  } while (!operationValid(operation));

  return operation;
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

  return isFloat(result) ? result.toFixed(2) : result;
}

function isFloat(num) {
  return num % 1 !== 0;
}

function askIfStartOver() {
  let startOver;

  do {
    prompt(MESSAGES.startOver);
    startOver = rlSync.question().toLowerCase();

    if (!startOverValid(startOver)) {
      prompt(MESSAGES.invalidStartOver);
    }

  } while (!startOverValid(startOver));

  return startOver;
}

function startOverValid(startOver) {
  const VALID_YES = ['y', 'yes'];
  const VALID_NO = ['n', 'no'];

  return VALID_YES.includes(startOver) || VALID_NO.includes(startOver);
}

function startOverTrue(startOver) {
  return startOver === 'y' || startOver === 'yes';
}

let num1;
let num2;
let operation;
let startOver;

console.log(MESSAGES.welcome);

do {

  num1 = askForNum();
  num2 = askForNum();
  operation = askForOperation();

  prompt(MESSAGES.result + findResult(num1, num2, operation) + '\n');

  startOver = askIfStartOver();

  console.clear();

} while (startOverTrue(startOver));

prompt(MESSAGES.goodbye);
