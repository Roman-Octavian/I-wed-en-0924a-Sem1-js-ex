/* Create an array of with the following values: 'Peter', 7, 'Marianne', true, 'Helle' and 8. Notice
it is a mix of strings, numbers and a boolean.
Use a loop to iterate over the array and generate the following in the console:

Peter is a string
7 is a number
Marianne is a string
true is a boolean
Helle is a string
8 is a number

Hint: You can use typeof to determine the type of a value
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof */

const HORRIBLE_ARRAY: (string | number | boolean)[] = ['Peter', 7, 'Marianne', true, 'Helle', 8];

HORRIBLE_ARRAY.forEach((i) => console.log(`${i} is a ${typeof i}`));
