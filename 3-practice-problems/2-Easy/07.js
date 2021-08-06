// Consider the following object:

let flintstones = {
  Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5
};

/* Create an array from this object that contains
only two elements: Barney's name and Barney's number:

[ 'Barney', 2 ]

*/

let Barney = [Object.keys(flintstones)[2], flintstones.Barney];
console.log(Barney);

// Hint:
// Read about the Object.entries() method on MDN.

Barney = Object.entries(flintstones)[2];
console.log(Barney);

// PROVIDED SOLUTION not as concise or elegant as my solutons):

Barney = Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();
console.log(Barney);
