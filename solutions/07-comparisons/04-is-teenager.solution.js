let age = 14; // e.g.

/**
 * Create a variable called "isTeenager". (Do not use var.)
 * If "age" is greater than 12, but less than 20, "isTeenager" should be true.
 * Otherwise, "isTeenager" should be false.
 * You must use either the logical and (&&) or the logical or (||) to solve this problem.
 * Your answer should still work when "age" is a different value.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

// Method 1
let isTeenager;
if (age > 12 && age < 20) {
  isTeenager = true;
} else {
  isTeenager = false;
}

// Method 2
let isTeenager = false;
if (age > 12 && age < 20) {
  isTeenager = true;
}

// Method 3
let isTeenager = age > 12 && age < 20;
