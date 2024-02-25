import { getAnswer } from "../getAnswer.js";

const addDrinkStr = getAnswer(
  "../exercises/06-control-flow/01-if-statement.js"
);

const addTipStr = getAnswer("../exercises/06-control-flow/02-if-statement.js");

export const addDrink = eval(`(burger, drink, isBuyingDrink) => {
  let total = burger;
  ${addDrinkStr}
  return total;
}`);

export const addTip = eval(`(subtotal, tip) => {
  let total;
  ${addTipStr}
  return total;
}`);
