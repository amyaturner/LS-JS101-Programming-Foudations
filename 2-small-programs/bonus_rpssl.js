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
function translate(choice) {
  switch (choice) {
    case 'r':
      word = "'rock'";
      break;
    case 'p':
      word = "'paper'";
      break;
    case 'sc':
      word = "'scissors'";
      break;
    case 'sp':
      word = "'spock'";
      break;
    case 'l':
      word = "'lizard'";
      break;
  }

  return word;
}

function askForUserChoice() {
  let choice;

  do {
    prompt(MESSAGE.askForChoice);
    choice = rlsync.question();

    if (!VALID_CHOICES.includes(choice)) {
      prompt(MESSAGE.invalidResponse);
    }
  } while (!VALID_CHOICES.includes(choice));

  return choice;
}

function computerChooses() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  return computerChoice;
}

function displayChoices(choice, computerChoice) {
  prompt(`You chose ${translate(choice)}, Computer chose ${translate(computerChoice)}`);
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
    prompt(MESSAGE.youWin);
  } else if (winner === 'computer') {
    prompt(MESSAGE.computerWins);
  } else {
    prompt(MESSAGE.tie);
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
  prompt(`Your score: ${userScore}`);
  prompt(`Computer score: ${computerScore}\n`);
}

function displayGrandWinnerMessage() {
  if (userScore === 5) {
    prompt(MESSAGE.userIsGrandWinner);
  } else {
    prompt(MESSAGE.computerIsGrandWinner);
  }
}

function askToContinueRound() {
  let answer;

  do {
    prompt(MESSAGE.askToContinueRound);
    answer = rlsync.question().toLowerCase();

    if (answer !== 'y' && answer !== 'n') {
      prompt(MESSAGE.invalidResponse);
    }

  } while (answer !== 'y' && answer !== 'n');

  return answer;
}

function askToPlayAgain() {
  let response;

  do {
    prompt(MESSAGE.askToPlayAgain);
    response = rlsync.question().toLowerCase();

    if (response !== 'y' && response !== 'n') {
      prompt(MESSAGE.invalidResponse);
    }

  } while (response !== 'y' && response !== 'n');

  return response;
}

console.clear();

prompt(MESSAGE.welcome);

while (true) {
  userScore = 0;
  computerScore = 0;

  while (userScore < 5 && computerScore < 5) {
    let choice = askForUserChoice();
    let computerChoice = computerChooses();

    displayChoices(choice, computerChoice);

    let winner = determineWinner(choice, computerChoice);
    displayWinnerMessage(winner);

    updateScore(winner);
    displayScore();

    if (userScore === 5 || computerScore === 5) {
      displayGrandWinnerMessage();
      break;
    }

    let continueRound = askToContinueRound();
    if (continueRound !== 'y') break;

    console.clear();
  }

  let newRound = askToPlayAgain();
  if (newRound !== 'y') break;

  console.clear();
}

prompt(MESSAGE.goodbye);
