import { getAnswer } from "../getAnswer.js";

const findLowestNumberStr = getAnswer(
  "../exercises/18-for-each/01-lowest-num.js"
);
const generateLinksStr = getAnswer(
  "../exercises/18-for-each/02-generate-links.js"
);

const findLowestNumber = eval(`(numbers) => {
  let lowestNumber = Infinity;
  ${findLowestNumberStr}
  return lowestNumber;
}`);

const generateLinks = eval(`(links) => {
  let htmlStr = "";
  ${generateLinksStr}
  return htmlStr;
}`);

export { findLowestNumber, generateLinks };
