/**
 * Using a while loop, print the following numbers with console.log:
 * 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
 *
 * Please note that in order for the test to work,
 * you must **only** log the numbers in the loop,
 * and nothing else.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

// Method 1
let counter = 1;
while (counter <= 10) {
  console.log(10 * counter);
  counter++;
}

// Method 2
let counter = 10;
while (counter <= 100) {
  console.log(counter);
  counter = counter + 10;
}
