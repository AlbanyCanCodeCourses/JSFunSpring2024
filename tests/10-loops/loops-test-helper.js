import { getAnswer } from "../getAnswer.js";

const arrayLengthStr = getAnswer("../exercises/10-loops/01-array-length.js");

const whileLoopStr = getAnswer("../exercises/10-loops/02-while-loop.js");

const forLoopStr = getAnswer("../exercises/10-loops/03-for-loop.js");

const addStr = getAnswer("../exercises/10-loops/05-add-an-array.js");

const highestNumberStr = getAnswer(
  "../exercises/10-loops/06-highest-number.js"
);

const isPalindromeStr = getAnswer("../exercises/10-loops/07-is-palidrome.js");

export const arrayLength = eval(`(planets) => {
  ${arrayLengthStr}
  return length;
};`);

export const logWithWhile = eval(`(callback) => {
  ${whileLoopStr.replace(/console.log/g, "callback")}
};`);

export const logArrayWithFor = eval(`(array, callback) => {
  ${forLoopStr.replace(/console.log/g, "callback")}
};`);

export const add = eval(`(numbers) => {
  ${addStr}
  return sum;
};`);

export const highestNumber = eval(`(numbers) => {
  ${highestNumberStr}
  return highest;
};`);

export const isPalindrome = eval(`(string) => {
  ${isPalindromeStr}
  return isPalindrome;
};`);
