const rlsync = require('readline-sync');
const MESSAGE = require('./rps_messages.json');
const VALID_CHOICES = ['r', 'p', 'sc', 'sp', 'l'];
const WINNING_COMBOS = {
  r: ['sc', 'l'],
  p: ['r', 'sp'],
  sc: ['p', 'l'],
  l: ['p', 'sp'],
  sp: ['r', 'sc'],
};

function prompt(message) {
  console.log(`=> ${message}`);
}

let word;
function choiceToWord(choice) {
  switch (choice) {
    case 'r':
      word = 'rock';
      break;
    case 'p':
      word = 'paper';
      break;
    case 'sc':
      word = 'scissors';
      break;
    case 'sp':
      word = 'spock';
      break;
    case 'l':
      word = 'lizard';
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
  if (playerWins(choice, computerChoice)) {
    return 'user';
  } else if (choice === computerChoice) {
    return 'tie';
  } else {
    return 'computer';
  }
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function displayWinnerMessage(winner) {
  if (winner === 'user') {
    console.log('You win!\n');
  } else if (winner === 'computer') {
    console.log('Computer wins!\n');
  } else {
    console.log("It's a tie!\n");
  }
}

let userScore;
let computerScore;
function updateScore(winner) {
  if (winner === 'user') {
    userScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  }
}

function displayScore() {
  console.log(`Your score: ${userScore}`);
  console.log(`Computer score: ${computerScore}\n`);
}

function displayGrandWinnerMessage() {
  if (userScore === 5) {
    console.log('You are the Grand Winner of this round!\n');
  } else {
    console.log('The Computer is the Grand Winner of this round!\n');
  }
}

console.clear();

prompt(MESSAGE.welcome);

while (true) {

  userScore = 0;
  computerScore = 0;

  while (userScore < 5 && computerScore < 5) {
    prompt(MESSAGE.askForChoice);
    let choice = rlsync.question();

    while (!VALID_CHOICES.includes(choice)) {
      prompt(MESSAGE.notValidChoice);
      choice = rlsync.question();
    }

    let computerChoice = computerChooses();

    prompt(`You chose ${choiceToWord(choice)}, computer chose ${choiceToWord(computerChoice)}`);

    let winner = determineWinner(choice, computerChoice);
    displayWinnerMessage(winner);

    updateScore(winner);
    displayScore();

    if (userScore === 5 || computerScore === 5) {
      displayGrandWinnerMessage();
      break;
    }

    let answer;
    do {
      prompt(MESSAGE.askToContinueRound);
      answer = rlsync.question().toLowerCase();

      if (answer !== 'y' && answer !== 'n') {
        prompt(MESSAGE.invalidContinue);
      }

    } while (answer !== 'y' && answer !== 'n');

    if (answer !== 'y') break;

    console.clear();
  }

  let response;
  do {
    prompt(MESSAGE.askPlayAnotherRound);
    response = rlsync.question().toLowerCase();

    if (response !== 'y' && response !== 'n') {
      prompt(MESSAGE.invalidContinue);
    }

  } while (response !== 'y' && response !== 'n');

  if (response !== 'y') break;

  console.clear();
}

prompt(MESSAGE.goodbye);
