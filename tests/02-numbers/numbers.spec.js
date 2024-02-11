import { expect } from "chai";
import {
  add,
  subtract,
  getPercentage,
  increment,
  decrement,
  getOrderOfOperations,
} from "./numbers-test-helper.js";

describe("2. Numbers", () => {
  describe("01-add", () => {
    it('should contain a constant called "sum" that should result in a number', () => {
      const number = add();
      expect(number).to.be.a("number").to.not.equal(NaN);
    });
    it('"sum" should equal to one number plus another', () => {
      const str = add.toString();
      expect(str).to.match(/\=/).to.match(/\+/);
    });
  });

  describe("02-subtract", () => {
    it('should contain a variable "difference" equal to the numbers "b" minus "a"', () => {
      const difference = subtract(3, 20);
      expect(difference).to.equal(17);
    });
  });

  describe("03-multiple-and-divide", () => {
    it('should contain a constant called "percentage" that should result in a number', () => {
      const number = getPercentage();
      expect(number).to.be.a("number").to.not.equal(NaN);
    });
    it('"percentage" should equal to one number divided by another times the constant "ONE_HUNDRED"', () => {
      const str = getPercentage.toString();
      expect(str).to.match(/\=/).to.match(/\//).to.match(/\*/);
      const array = str.split("ONE_HUNDRED");
      expect(array).length.to.be.greaterThan(2);
    });
  });

  describe("04-increment", () => {
    it('should use the increment operator to increment the variable "age" by 1', () => {
      expect(increment.toString().includes("++")).equal(true);
      expect(increment(19)).equal(20);
    });
  });

  describe("05-decrement", () => {
    it('should use the decrement operator to decrement the variable "age" by 1', () => {
      expect(decrement.toString().includes("--")).equal(true);
      expect(decrement(18)).equal(17);
    });
  });

  describe("06-order-of-operations", () => {
    it("should equal the number 800", () => {
      const number = getOrderOfOperations();
      expect(number).to.be.a("number").to.equal(800);
    });
    it("should still contain a plus (+) and multiple (*) sign", () => {
      const str = getOrderOfOperations.toString();
      expect(str).to.match(/\=/).to.match(/\+/).to.match(/\*/);
    });
  });
});
