let string = "racecar";

/**
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or racecar.
 *
 * Create a variable called "isPalindrome".
 * It should equal true if "string" is a palindrome
 * and false if it is not.
 *
 * Use the split and join methods to solve this problem.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

// Solution 1: for ... of loop
let isPalindrome;
let letters = string.split("");
let reverse = "";
for (let letter of letters) {
  reverse = letter + reverse;
}
if (reverse === string) {
  isPalindrome = true;
}
isPalindrome = false;

// Solution 2: reverse
const reverse = string.split("").reverse().join("");
let isPalindrome = reverse === string;
