/* Using the following string, create a new string that contains
all lowercase letters except for the first character,
which should be capitalized. (See the example output.)
*/

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

let capitalizeSentence = (str) => {
  let lowerCaseStr = str.toLowerCase();
  let capFirstLetter = lowerCaseStr[0].toUpperCase();
  let newLowerCaseStr = lowerCaseStr.replace('t', '');
  let newStr = capFirstLetter + newLowerCaseStr;
  return newStr;
};

console.log(capitalizeSentence(munstersDescription));


let capitalizeSentence2 = (str) => {
  let capFirstLetter = str[0].toUpperCase();
  let newStr = '';
  for (let i = 1; i < str.length; i += 1) {
    newStr += str[i].toLowerCase();
  }
  newStr = capFirstLetter + newStr;
  return newStr;
};

console.log(capitalizeSentence2(munstersDescription));

// PROVIDED SOLUTION:

munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();
