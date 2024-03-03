let num1 = 15; // e.g.
let num2 = 20; // e.g.

/**
 * Create a variable called "isLargerNumber". (Do not use var.)
 * If "num2" is larger than "num1", than "isLargerNumber" should be true.
 * If "num1" is larger than "num2", than "isLargerNumber" should be false.
 * If "num1" and "num2" are equal, than "isLargerNumber" should be false.
 * Your answer should still work when "num1" and "num2" are different values.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

// Method 1
let isLargerNumber;
if (num2 > num1) {
  isLargerNumber = true;
} else if (num1 >= num2) {
  isLargerNumber = false;
}

// Method 2
let isLargerNumber;
if (num2 > num1) {
  isLargerNumber = true;
} else {
  isLargerNumber = false;
}

// Method 3
let isLargerNumber = num2 > num1;
