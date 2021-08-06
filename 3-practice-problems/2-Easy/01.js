/* Given a string, return a new string that replaces
every occurrence of the word "important" with "urgent":
*/

let advice = "Few things in life are as important as house training your pet dinosaur.";

console.log(advice);
console.log(advice.replace('important', 'urgent'));

/* BONUS:
Note that if the string contains two or more occurrences of important,
this code only replaces the first. Can you figure out how to replace all occurrences?

I would say use the replaceAll() method, but somehow that throws an error when I run it in
Node ?  Not sure why, since MDN says it's a legitimate string method: String.prototype.replaceAll()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll
*/
