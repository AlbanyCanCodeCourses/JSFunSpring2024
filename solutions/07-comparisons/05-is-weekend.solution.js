let day = "Saturday";

/**
 * Create a variable called "isWeekend". (Do not use var.)
 * If "day" is Saturday or Sunday, "isWeekend" should be true.
 * Otherwise "isWeekend" should be false.
 * You must use either the logical and (&&) or the logical or (||) to solve this problem.
 * Your answer should still work when "day" is a different value.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

// Method 1
let isWeekend;
if (day === "Saturday" || day === "Sunday") {
  isWeekend = true;
} else {
  isWeekend = false;
}

// Method 2
let isWeekend = false;
if (day === "Saturday" || day === "Sunday") {
  isWeekend = true;
}

// Method 3
let isWeekend = day === "Saturday" || day === "Sunday";
