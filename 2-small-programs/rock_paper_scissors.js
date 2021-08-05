const rlsync = require('readline-sync');
const MESSAGE = require('./rps_messages.json');
const VALID_CHOICES = ['r', 'p', 's'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function choiceToWord(choice) {
  let word;
  switch (choice) {
    case 'r':
      word = 'rock';
      break;
    case 'p':
      word = 'paper';
      break;
    case 's':
      word = 'scissors';
      break;
  }

  return word;
}

function computerChooses() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  return computerChoice;
}

function determineWinner(choice, computerChoice) {
  if ((choice === 'r' && computerChoice === 's') ||
      (choice === 'p' && computerChoice === 'r') ||
      (choice === 's' && computerChoice === 'p')) {
    prompt('You win!\n');
  } else if ((choice === 's' && computerChoice === 'r') ||
           (choice === 'r' && computerChoice === 'p') ||
           (choice === 'p' && computerChoice === 's')) {
    prompt('Computer wins!\n');
  } else {
    prompt("It's a tie!\n");
  }
}

prompt(MESSAGE.welcome);

while (true) {
  prompt(MESSAGE.askForChoice);
  let choice = rlsync.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt(MESSAGE.notValidChoice);
    choice = rlsync.question();
  }

  let computerChoice = computerChooses();

  prompt(`You chose ${choiceToWord(choice)}, computer chose ${choiceToWord(computerChoice)}`);

  determineWinner(choice, computerChoice);

  let answer;
  do {
    prompt(MESSAGE.askPlayAgain);
    answer = rlsync.question().toLowerCase();

    if (answer !== 'y' && answer !== 'n') {
      prompt(MESSAGE.invalidPlayAgain);
    }

  } while (answer !== 'y' && answer !== 'n');

  if (answer !== 'y') break;

  console.clear();
}

prompt(MESSAGE.goodbye);
