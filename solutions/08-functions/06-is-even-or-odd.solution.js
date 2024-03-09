/**
 * Create a function called "isEvenOrOdd".
 * If given an even number, it should return "even".
 * If given an odd number, it should return "odd".
 *
 * @param {number} num
 * @returns {string} either "even" or "odd"
 *
 * @example isEvenOrOdd(10); // even
 * @example isEvenOrOdd(3); // odd
 * You should use arrow syntax.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

const isEvenOrOdd = (num) => {
  // If it has a remainder of 2, then the number is even.
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};
