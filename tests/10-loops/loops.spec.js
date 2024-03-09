import { expect } from "chai";
import {
  arrayLength,
  logWithWhile,
  logArrayWithFor,
  add,
  highestNumber,
  isPalindrome,
} from "./loops-test-helper.js";

describe("Loops", () => {
  describe("01-array-length", () => {
    it("should return the length of the array supplied as an argument", () => {
      expect(arrayLength([1, 2, 3, 4, 5, 6])).to.equal(6);
    });
  });

  describe("02-while-loop", () => {
    it("should log each of these numbers, one-by-one: 10, 20, 30, 50, 60, 70, 80, 90, 100", () => {
      let output = [];
      logWithWhile((item) => output.push(item));
      const expected = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
      expect(output).to.deep.equal(expected);
    });
    it("should use a while loop", () => {
      const funcStr = logWithWhile.toString();
      expect(funcStr).to.match(/while\s*\(/);
    });
  });

  describe("03-for-loop", () => {
    it("should log each value in an array with console.log", () => {
      const array = ["Python", "JavaScript", "TypeScript", "Golang"];
      let output = [];
      logArrayWithFor(array, (item) => output.push(item));
      expect(output).to.deep.equal(array);
    });
    it("should use a for loop", () => {
      const funcStr = logArrayWithFor.toString();
      expect(funcStr).to.match(/for\s*\(/);
    });
  });

  describe("05-add-an-array", () => {
    it('should return a sum of all of the numbers within the array "numbers"', () => {
      expect(add([-1, 0.5, 2, 5])).to.equal(6.5);
    });
  });

  describe("06-highest-number", () => {
    it("should return the highest number in the array", () => {
      const number1 = highestNumber([1, 10, 2, 3, 4]);
      expect(number1).to.equal(10);
      const number2 = highestNumber([-1, -5, -4]);
      expect(number2).to.equal(-1);
    });
  });

  describe("07-is-palidrome", () => {
    it("should return true if a word is a palindrome", () => {
      expect(isPalindrome("rotator")).to.be.equal(true);
      expect(isPalindrome("noon")).to.be.equal(true);
    });
    it("should return false if a word is not a palindrome", () => {
      expect(isPalindrome("difference")).to.be.equal(false);
      expect(isPalindrome("wedding")).to.be.equal(false);
    });
    it("should use split", () => {
      expect(isPalindrome.toString().includes("split")).to.equal(true);
    });
  });
});
