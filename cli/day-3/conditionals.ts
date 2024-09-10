console.log('\n+++++++++++++++++ DAY 3: conditionals +++++++++++++++++\n');

/**
 * Create a function, findLargest, that takes 4 numbers as 4 parameters and returns the largest of
 * the 4 numbers.
 * @param num1
 * @param num2
 * @param num3
 * @param num4
 * @returns the highest number
 */
function findLargest(num1: number, num2: number, num3: number, num4: number): number {
  // You don't expect us to actually use if statements here right?
  return Math.max(num1, num2, num3, num4);
}

console.log(`The largest number of 1, 5, -9 and 42 is ${findLargest(1, 5, -9, 42)}\n`);

/**
 * Create a function that takes 3 numbers as 3 parameters. The first parameter is the number to
 * check. The 2nd and 3rd parameter is a range (from and to). If the first parameter is within the
 * range of the range it should return true and false if not.
 * @param numberToCheck
 * @param lowerRange
 * @param higherRange
 * @returns true if in range, false otherwise
 */
function checkIfFirstArgIsInRange(
  numberToCheck: number,
  lowerRange: number,
  higherRange: number,
): boolean {
  return numberToCheck >= lowerRange && numberToCheck <= higherRange;
}

console.log(
  `Is -4 in the range of -27 and 98? Response: ${checkIfFirstArgIsInRange(-4, -27, 98)}\n`,
);
console.log(`Is 7 in the range of 0 and 4? Response: ${checkIfFirstArgIsInRange(7, 0, 4)}`);
