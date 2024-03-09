import { getAnswer } from "../getAnswer.js";

const createAnArrayStr = getAnswer(
  "../exercises/09-arrays/01-create-an-array.js"
);

const accessingAnItemStr = getAnswer(
  "../exercises/09-arrays/02-accessing-item-in-array.js"
);

const destructuringStr = getAnswer(
  "../exercises/09-arrays/03-destructuring.js"
);

const getPositionInArrayStr = getAnswer(
  "../exercises/09-arrays/04-position-in-array.js"
);

const addItemToArrayStr = getAnswer(
  "../exercises/09-arrays/05-add-item-to-array.js"
);

const combineArraysStr = getAnswer(
  "../exercises/09-arrays/06-combine-arrays-.js"
);

export const createAnArray = eval(`() => {
  ${createAnArrayStr}
  return restaurants;
}`);

export const accessingAnItem = eval(`(cars) => {
  ${accessingAnItemStr}
  return myCar;
}`);

export const destructure = eval(`(cars) => {
  ${destructuringStr}
  return myCar;
}`);

export const getPositionInArray = eval(`(results) => {
  ${getPositionInArrayStr}
  return place;
}`);

export const addItemToArray = eval(`(languages) => {
  ${addItemToArrayStr}
  return languages;
}`);

export const combineArrays = eval(`(array1, array2) => {
  ${combineArraysStr}
  return newArray;
}`);
