console.log('\n+++++++++++++++++ DAY 1: functions-objects +++++++++++++++++\n');

/**
 * Create a javascript function that takes firstname and lastname as 2 parameters and uses
 * console.log() to output the person's name. Check that it works and is printet correctly.
 * @param firstName
 * @param lastName
 */
function printName(firstName: string, lastName: string): void {
  console.log(`Hello, ${firstName} ${lastName}`);
}

/**
 * Create a function that calculates the area of a rectangle. The function should return the result.
 * Test that it works.
 * @param length
 * @param width
 * @returns area
 */
function calculateRectangleArea(length: number, width: number): number {
  return length * width;
}

/**
 * Create a function that takes speed and time as 2 parameters and calculates and returns the
 * distance. Use the function to test that it works by using the 'log' again. Print out "You have
 * travelled *x* km" where *x* is replaced by the result from the function.
 * @param speed km/h
 * @param time h
 * @returns distance in km
 */
function calculateDistance(speed: number, time: number): number {
  return speed * time;
}

// Create an object called calculator with the name of the owner (eg. Your name) and
// modify your code so the 3 previous functions are attached to the object.
const calculator = {
  printName: printName,
  calculateRectangleArea: calculateRectangleArea,
  calculateDistance: calculateDistance,
};

// Adjust your code so that you can call the functions and test that they still work.
const rectangleLength = 5;
const rectangleWidth = 6;

calculator.printName('Peter', 'Peterson');
console.log(
  `\nThe area of a rectangle with length ${rectangleLength} and width ${rectangleWidth} is ${calculator.calculateRectangleArea(rectangleLength, rectangleWidth)}`,
);
console.log(`\nYou have travelled ${calculator.calculateDistance(5, 6)} km`);
