import { expect } from "chai";
import { consoleHelper } from "../getAnswer.js";
import functions from "./functions-test-helper.js";
const {
  invokeFunction,
  printGreeting,
  returnGreeting,
  multiply,
  lowerCaseString,
  isEvenOrOdd,
  countNumberOfDigits,
} = functions;

const readPrintGreeting = consoleHelper(printGreeting);

describe("8. Functions", () => {
  describe("01-invoke-function", () => {
    it('should invoke the function "calculateTotal", passing in the subtotal of 50 and tax of 0.2 as arguments', () => {
      const [, args] = invokeFunction();
      expect(args).to.deep.equal([50, 0.02]);
    });
    it('"total" should equal 51 when the subtotal is $50 and the tax is 2%', () => {
      const [total] = invokeFunction();
      expect(total).to.be.a("number").to.equal(51);
    });
  });
  describe("02-print-greeting", () => {
    it('should contain a function called "printGreeting" in arrow syntax', () => {
      const greeter = readPrintGreeting(console.log);
      expect(greeter).to.be.a("function");
      expect(greeter.toString().includes("=>")).to.equal(true);
    });
    it('"printGreeting" should print "Hello ______!" with console.log', () => {
      let output;
      readPrintGreeting((value) => (output = value))("Tim");
      expect(output).to.equal("Hello Tim!");
    });
  });
  describe("03-return-greeting", () => {
    it('should contain a function called "printGreeting" in arrow syntax', () => {
      expect(returnGreeting).to.be.a("function");
      expect(returnGreeting.toString().includes("=>")).to.equal(true);
    });
    it('"printGreeting" should return "Hello ______!"', () => {
      expect(returnGreeting("Tim")).to.equal("Hello Tim!");
    });
  });
  describe("04-multiply", () => {
    it('should contain a function called "multiply" in arrow syntax', () => {
      expect(multiply).to.be.a("function");
      expect(multiply.toString().includes("=>")).to.equal(true);
    });
    it('"multiply" should have two numbers as parameters ("num1" and "num2") and return num1 multiplied by num2', () => {
      expect(multiply(5, 5)).to.equal(25);
      expect(multiply(10, 0.3)).to.equal(3);
      expect(multiply(2, -1)).to.equal(-2);
    });
  });
  describe("05-lower-case-string", () => {
    it('should contain a function called "lowerCaseString" in arrow syntax', () => {
      expect(lowerCaseString).to.be.a("function");
      expect(lowerCaseString.toString().includes("=>")).to.equal(true);
    });
    it('"lowerCaseString" should lower case a string', () => {
      expect(lowerCaseString("HELLO WORLD")).to.equal("hello world");
    });
    it('"lowerCaseString" should not throw an error is given a value that is not a string. (NOTE that this test will pass if you have not solved this problem yet.)', () => {
      const goodFn = () => lowerCaseString(null);
      expect(goodFn).to.not.throw();
      expect(lowerCaseString()).to.not.be.ok;
      expect(lowerCaseString(null)).to.not.be.ok;
    });
  });
  describe("06-is-even-or-odd", () => {
    it('should contain a function called "isEvenOrOdd" in arrow syntax', () => {
      expect(isEvenOrOdd).to.be.a("function");
      expect(isEvenOrOdd.toString().includes("=>")).to.equal(true);
    });
    it('"isEvenOrOdd" should return "even" if a number is even', () => {
      expect(isEvenOrOdd(100)).to.equal("even");
    });
    it('"isEvenOrOdd" should return "odd" if a number is odd.', () => {
      expect(isEvenOrOdd(7)).to.equal("odd");
    });
  });
  describe("07-count-number-of-digits", () => {
    it('should contain a function called "countNumberOfDigits" in arrow syntax', () => {
      expect(countNumberOfDigits).to.be.a("function");
      expect(countNumberOfDigits.toString().includes("=>")).to.equal(true);
    });
    it('"countNumberOfDigits" should count the number of digits', () => {
      expect(countNumberOfDigits(5000)).to.equal(4);
    });
  });
});
