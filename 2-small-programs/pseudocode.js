/* Problem: Practice writing pseudocode for:
1) a function that returns the sum of two numbers:
2) a function that takes an array of strings, and returns a string that is all those strings concatenated together
3) a function that takes an array of integers, and returns a new array with every other element


1)
CASUAL: a function that returns the sum of two numbers:

Given two numbers,

return number1 + number2

FORMAL:

START

Given two numbers

PRINT number1 + number2

END



2)
CASUAL: a function that takes an array of strings, and returns a string that is all those strings concatenated together

Given an array of strings called 'strings'

Save the first element to a new string variable called 'concatenatedStrings'

Iterate through each string element in the array one by one.
  - add each element to the end of that original value (concatenate)
  - return the 'concatenatedString' variable
  
FORMAL:

START

Given an array of strings called 'strings'

SET concatenatedString = first element within 'strings' array
SET iterator = 0

WHILE iterator < length of strings
  SET currentString = value within 'strings' array at space "iterator"
  concatenatedString = concatenatedString + currentString

  iterator = iterator + 1

PRINT concatenatedString

END



3)
CASUAL: a function that takes an array of integers, and returns a new array with every other element

Given an array of integers

Save a new emtpy array variable

Iterate through only the even indexed elements of the array
  - Add those even indexed elements to the new array
  - return the new array

FORMAL:

START

Given an array of integers

SET everyOtherInteger = empty array
SET iterator = 0

WHILE iterator < length of array of integers
  SET currentInteger = value within integer array at space "iterator"
  everyOtherInteger + currentInteger

  iterator = iterator + 2

PRINT everyOtherInteger

END

*/

