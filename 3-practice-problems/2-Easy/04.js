// Starting with the string:

let famousWords = "seven years ago...";

// show two different ways to put the expected "Four score and " in front of it.

// 1)
let fourScore = "Four score and";
let fullSentence = fourScore + " " + famousWords;
console.log(fullSentence);

// 2)
let fullSentence2 = fourScore.concat(' ', famousWords);
console.log(fullSentence2);

// CORRECT

// PROVIDED SOLUTION:
"Four score and " + famousWords;
"Four score and ".concat(famousWords);
