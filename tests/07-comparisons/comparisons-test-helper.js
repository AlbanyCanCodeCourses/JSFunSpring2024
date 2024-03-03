import { getAnswer } from "../getAnswer.js";

const isEqualStr = getAnswer("../exercises/07-comparisons/01-is-equal.js");

const isNotEqualStr = getAnswer(
  "../exercises/07-comparisons/02-is-not-equal.js"
);

const isLargerNumberStr = getAnswer(
  "../exercises/07-comparisons/03-is-larger-number.js"
);

const isTeenagerStr = getAnswer(
  "../exercises/07-comparisons/04-is-teenager.js"
);

const isWeekendStr = getAnswer("../exercises/07-comparisons/05-is-weekend.js");

const isEvenStr = getAnswer("../exercises/07-comparisons/06-is-even.js");

export const isEqual = eval(`(userInput1, userInput2) => {
  let isEqual;
  ${isEqualStr}
  return isEqual;
}`);

export const isNotEqual = eval(`(targetBMI, actualBMI) => {
  let isNotAtGoalWeight;
  ${isNotEqualStr}
  return isNotAtGoalWeight;
}`);

export const isLargerNumber = eval(`(num1, num2) => {
  ${isLargerNumberStr}
  return isLargerNumber;
}`);

export const isTeenager = eval(`(age) => {
  ${isTeenagerStr}
  return isTeenager;
}`);

export const isWeekend = eval(`(day) => {
  ${isWeekendStr}
  return isWeekend;
}`);

export const isEven = eval(`(num) => {
  ${isEvenStr}
  return isEven;
}`);
