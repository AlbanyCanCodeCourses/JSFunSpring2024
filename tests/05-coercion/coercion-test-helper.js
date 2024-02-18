import { getAnswer } from "../getAnswer.js";

const convertStringToIntAnswer = getAnswer(
  "../exercises/05-coercion/01-convert-string-to-int.js"
);

const fixCoercionErrorAnswer = getAnswer(
  "../exercises/05-coercion/02-fix-coercion-error.js"
);

export const convertStringToInt = eval(`(answer) => {
  ${convertStringToIntAnswer}
  return answer;
}`);

export const fixCoercionError = eval(`(num1, num2) => {
  ${fixCoercionErrorAnswer}
  return sum;
}`);
