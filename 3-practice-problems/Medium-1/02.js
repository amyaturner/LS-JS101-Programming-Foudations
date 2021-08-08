// Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";

// Return a new string that swaps the case of all of the letters:

let changedCase = '';

// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

{ let newMunstersDescription = munstersDescription;
  for (let char of newMunstersDescription) {
    if (char === char.toLowerCase()) {
      changedCase += char.toUpperCase();
    } else {
      changedCase += char.toLowerCase();
    }
  }
}

/* Note: // Defining the 'newMunstersDescription' variable inside
curly baces keeps the scope local so the variable disappears
after it's used inside that scope (so it doesn't take up memory after that).
*/

console.log(changedCase);
console.log(munstersDescription);

// CORRECT

// PROVIDED SOLUTION (turned it into an array first and used .map():

let munstersDescriptionAlt = munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join("");

console.log();
console.log(munstersDescriptionAlt);
console.log(munstersDescription);
