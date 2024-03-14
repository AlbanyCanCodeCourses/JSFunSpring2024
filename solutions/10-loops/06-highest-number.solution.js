let numbers = [10000, -8, 10, 0.7]; // e.g.

/**
 * Create a variable called "highest".
 * Loop through the array using a for loop (or for ... of loop) and return the highest number.
 * Set "highest" to the highest number.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

// Solution 1: For loop
let highest;
for (let i = 0; i < numbers.length; i++) {
  let num = numbers[i];
  if (num > highest || highest === undefined) highest = num;
}

// Solution 2: For ... of loop
let highest;
for (let num of numbers) {
  if (num > highest || highest === undefined) highest = num;
}

// Solution 3
let highest = Math.max(...numbers);
