let isEqual;

let userInput1 = 39; // e,g,
let userInput2 = "39"; // e,g,

/**
 * You will be changing the value of "isEqual" below.
 * If "userInput1" strictly equals "userInput2", "isEqual" should be true.
 * Otherwise, it should be false.
 * Hint: What does strictly mean?
 * Your answer should still work when "userInput1" and "userInput2" are different values.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

// Method 1
if (userInput1 === userInput2) {
  isEqual = true;
} else {
  isEqual = false;
}

// Method 2
isEqual = userInput1 === userInput2;
