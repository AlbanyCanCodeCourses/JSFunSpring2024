import { getAnswer } from "../getAnswer.js";

const addStr = getAnswer("../exercises/02-numbers/01-add.js");

const subtractStr = getAnswer("../exercises/02-numbers/02-subtract.js");

const multiplyDivideStr = getAnswer(
  "../exercises/02-numbers/03-multiply-and-divide.js"
);

const incrementStr = getAnswer("../exercises/02-numbers/04-increment.js");

const decrementStr = getAnswer("../exercises/02-numbers/05-decrement.js");

const orderOfOperationsStr = getAnswer(
  "../exercises/02-numbers/06-order-of-operations.js"
);

export const add = eval(`() => {
  ${addStr}
  return sum;
}`);

export const subtract = eval(`(a, b) => {
  ${subtractStr}
  return difference;
}`);

export const getPercentage = eval(`(a, b) => {
  const ONE_HUNDRED = 100;
  ${multiplyDivideStr}
  return percentage;
}`);

export const increment = eval(`(age) => {
  ${incrementStr}
  return age;
}`);

export const decrement = eval(`(age) => {
  ${decrementStr}
  return age;
}`);

export const getOrderOfOperations = eval(`() => {
  ${orderOfOperationsStr}
  return result;
}`);
