import { expect } from "chai";
import {
  convertStringToInt,
  fixCoercionError,
} from "./coercion-test-helper.js";

describe("Coercion", () => {
  describe("01-convert-string-to-int", () => {
    it('"answer" should be cast as (converted to) an integer', () => {
      expect(convertStringToInt("5")).to.be.a("number").equal(5);
    });
  });

  describe("02-fix-coercion-error", () => {
    it('"sum" should be a number that is equal to "num1" plus "num2". It should not be a string.', () => {
      expect(fixCoercionError("3", 5)).to.be.a("number").equal(8);
    });
  });
});
