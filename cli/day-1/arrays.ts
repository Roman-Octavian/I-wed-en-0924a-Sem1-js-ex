console.log('\n+++++++++++++++++ DAY 1: arrays +++++++++++++++++\n');

// Create an array with 5 names. Print out the first element (name) using console.log()
const arr1 = ['Bob', 'Rob', 'Job', 'Mob', 'Cob'];

console.log(arr1[0]);

// Use the indexOf function to get the index of a name that exists in your array.
const indexOfBob = arr1.indexOf('Bob');

console.log(`Index of Bob is ${indexOfBob}`);

// Try the indexOf function with a name that does not exist. What is returned?
const indexOfUndefined = arr1.indexOf('Snob');

console.log(`Index of Snob is ${indexOfUndefined}`);

// Use the push function to add a new name to the array of names, so you have 6 names in the array.
// 'log' the array to verify.
arr1.push('Fob');
console.log(arr1);

// Use the slice function on the array, to create a new array with the first 3 names. 'log' the
// array to verify.
const arr2 = arr1.slice(0, 3);
console.log(arr2);

// Create 2 objects with firstname, lastname, email – values. Add the two objects to a new array.
// 'log' the array to verify. Also 'log' the first objects' email in a separate 'log'.
type Person = {
  firstName: string;
  lastName: string;
  email: string;
};

const person1: Person = {
  firstName: 'Antonio',
  lastName: 'Matamoros',
  email: 'antonio@matamoros.net',
};

const person2: Person = {
  firstName: 'Jack',
  lastName: 'Jackson',
  email: 'jack@jackson.net',
};

const personArr: Person[] = [person1, person2];
console.log(personArr);
console.log(personArr[0].email);
