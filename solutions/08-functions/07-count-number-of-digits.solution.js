/**
 * Create a function called "countNumberOfDigits".
 * Given an integer, it should return the number of digits in an integer.
 *
 * @param {int} num
 * @returns {int} the number of digits
 *
 * @example countNumberOfDigits(5000); // 4
 * You should use arrow syntax.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

const countNumberOfDigits = (num) => {
  // I'm first converting this to a string
  let str = `${num}`;

  // BONUS
  // And removing the decimal point
  str = str.replace(".", "");
  // And any negative signs
  str = str.replace("-", "");

  // And now I'm counting tbe number of numbers
  return str.length;
};
