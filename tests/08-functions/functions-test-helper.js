import { getAnswer } from "../getAnswer.js";

const invokeFunctionStr = getAnswer(
  "../exercises/08-functions/01-invoke-function.js"
);
const printGreetingStr = getAnswer(
  "../exercises/08-functions/02-print-greeting.js"
);
const returnGreetingStr = getAnswer(
  "../exercises/08-functions/03-return-greeting.js"
);
const multiplyString = getAnswer("../exercises/08-functions/04-multiply.js");
const lowerCaseStringStr = getAnswer(
  "../exercises/08-functions/05-lower-case-string.js"
);
const isEvenOrOddStr = getAnswer(
  "../exercises/08-functions/06-is-even-or-odd.js"
);
const countNumberOfDigitsStr = getAnswer(
  "../exercises/08-functions/07-count-number-of-digits.js"
);

const invokeFunction = () => {
  let calculateTotalArguments = [];
  const calculateTotal = (...args) => {
    calculateTotalArguments = args;

    const [subtotal, tax] = args;
    return subtotal * tax + subtotal;
  };
  const fn = eval(`() => {
    try {
      calculateTotalArguments = [];
      ${invokeFunctionStr}
      return total;
    } catch (err) {}
  }`);
  return [fn(), calculateTotalArguments];
};

const functions = Object.entries({
  printGreeting: printGreetingStr,
  returnGreeting: returnGreetingStr,
  multiply: multiplyString,
  lowerCaseString: lowerCaseStringStr,
  isEvenOrOdd: isEvenOrOddStr,
  countNumberOfDigits: countNumberOfDigitsStr,
}).reduce((acc, [name, str]) => {
  const fn = eval(`() => {
    ${str};
    try {
      return ${name};
    } catch (err) {}
  }`);
  acc[name] = fn();
  return acc;
}, {});

functions.invokeFunction = invokeFunction;

export default functions;
