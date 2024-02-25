import { expect } from "chai";
import {
  isEqual,
  isNotEqual,
  isLargerNumber,
  isTeenager,
  isWeekend,
  isEven,
} from "./comparisons-test-helper.js";

describe("7. Comparisons", () => {
  describe("01-is-equal", () => {
    it('"isEqual" should be true when "userInput1" strictly equals "userInput2', () => {
      expect(isEqual(5, 5)).to.be.true;
      expect(isEqual("5", "5")).to.be.true;
    });
    it('"isEqual" should be false when "userInput1" does not strictly equal "userInput2', () => {
      expect(isEqual(5, -5)).to.be.false;
      expect(isEqual(5, "5")).to.be.false;
    });
  });

  describe("02-is-not-equal", () => {
    it('"isNotAtGoalWeight" should be false when "targetBMI" equals "actualBMI"', () => {
      expect(isNotEqual(20, 20)).to.be.false;
    });
    it('"isNotAtGoalWeight" should be true when "targetBMI" does not equal "actualBMI"', () => {
      expect(isNotEqual(20, 31)).to.be.true;
    });
  });

  describe("03-is-larger-number", () => {
    it('should contain a variable called "isLargerNumber"', () => {
      const isLargerNumberStr = isLargerNumber.toString();
      expect(isLargerNumberStr).to.match(/let isLargerNumber/);
    });
    it('"isLargerNumber" should be true when "num2" is greater than "num1"', () => {
      expect(isLargerNumber(1, 999999)).to.be.true;
    });
    it('"isLargerNumber" should be false when "num1" is greater than "num2"', () => {
      expect(isLargerNumber(1.1, -555)).to.be.false;
    });
    it('"isLargerNumber" should be false when "num1" is equal to "num2"', () => {
      expect(isLargerNumber(3, 3)).to.be.false;
    });
  });

  describe("04-is-teenager", () => {
    it('should contain a variable called "isTeenager"', () => {
      const isTeenagerStr = isTeenager.toString();
      expect(isTeenagerStr).to.match(/let isTeenager/);
    });
    it('"isTeenager" should be true when ages is between 13 and 19', () => {
      expect(isTeenager(13)).to.be.true;
      expect(isTeenager(15)).to.be.true;
      expect(isTeenager(19)).to.be.true;
    });
    it('"isTeenager" should be false when ages is less than 13', () => {
      expect(isTeenager(12)).to.be.false;
      expect(isTeenager(0)).to.be.false;
    });
    it('"isTeenager" should be false when ages is greater than 19', () => {
      expect(isTeenager(20)).to.be.false;
      expect(isTeenager(95)).to.be.false;
    });
    it("should use either the logical and (&&) or the logical or (||)", () => {
      const isTeenagerStr = isTeenager.toString();
      expect(isTeenagerStr).to.match(/&&|\|\|/);
    });
  });

  describe("05-is-weekend", () => {
    it('should contain a variable called "isWeekend"', () => {
      const isWeekendStr = isWeekend.toString();
      expect(isWeekendStr).to.match(/let isWeekend/);
    });
    it('"isWeekend" should be true if "day" is "Saturday" or "Sunday"', () => {
      expect(isWeekend("Saturday")).to.be.true;
      expect(isWeekend("Sunday")).to.be.true;
    });
    it('"isWeekend" should be false if "day" is any other day of the week', () => {
      expect(isWeekend("Monday")).to.be.false;
      expect(isWeekend("Tuesday")).to.be.false;
      expect(isWeekend("Wednesday")).to.be.false;
      expect(isWeekend("Thursday")).to.be.false;
      expect(isWeekend("Friday")).to.be.false;
    });
    it("should use either the logical and (&&) or the logical or (||)", () => {
      const isWeekendStr = isWeekend.toString();
      expect(isWeekendStr).to.match(/&&|\|\|/);
    });
  });

  describe("06-is-even", () => {
    it('should contain a variable called "isEven"', () => {
      const isEvenStr = isEven.toString();
      expect(isEvenStr).to.match(/let isEven/);
    });
    it('"isEven" should be true if "num" is even', () => {
      expect(isEven(22)).to.be.true;
    });
    it('"isEven" should be false if "num" is odd', () => {
      expect(isEven(9)).to.be.false;
    });
  });
});
