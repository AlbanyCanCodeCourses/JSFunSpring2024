import { expect } from "chai";
import {
  createAnArray,
  accessingAnItem,
  destructure,
  getPositionInArray,
  addItemToArray,
  combineArrays,
} from "./arrays-sets-test-helper.js";

describe("Arrays", () => {
  describe("01-create-an-array", () => {
    it('should contain an array called "restaurants"', () => {
      const restaurants = createAnArray();
      expect(restaurants).to.be.an("array");
    });
    it('"restaurants" should have at least 3 items', () => {
      const restaurants = createAnArray();
      expect(restaurants).to.have.lengthOf(3);
    });
  });

  describe("02-accessing-an-item", () => {
    it('should contain an array called "myCar"', () => {
      const accessingAnItemStr = accessingAnItem.toString();
      expect(accessingAnItemStr).to.match(/(const)|(let)/);
      expect(accessingAnItemStr).to.match(/myCar/);
    });
    it('"myCar" should be equal to the first item in an array', () => {
      const cars = ["Mercedes", "Kia", "Toyota"];
      const myCar = accessingAnItem(cars);
      expect(myCar).to.equal("Mercedes");
    });
  });

  describe("03-destructuring", () => {
    it('"myCar" should be equal to the first item in an array', () => {
      const cars = ["Mercedes", "Kia", "Toyota"];
      const myCar = destructure(cars);
      expect(myCar).to.equal("Mercedes");
    });
    it("should use destructuring to solve this problem", () => {
      const destructureStr = destructure.toString();
      expect(destructureStr).to.match(/(const\s*\[)|(let\s*\[)/);
    });
  });

  describe("04-position-in-array.js", () => {
    it('"place" should equal 3 if "Jian Hou" is the 3rd value in the array', () => {
      const place = getPositionInArray([
        "Aaminata Kamau",
        "Claire O'Hannigan",
        "Jian Hou",
        "María Rosales",
        "Fathima Kaur",
      ]);
      expect(place).to.equal(3);
    });
    it('"place" should equal 1 if "Jian Hou" is the 1st value in the array', () => {
      const place = getPositionInArray([
        "Jian Hou",
        "Aaminata Kamau",
        "Claire O'Hannigan",
        "María Rosales",
        "Fathima Kaur",
      ]);
      expect(place).to.equal(1);
    });
  });

  describe("05-add-item-to-array", () => {
    it('"languages" should contain three more items', () => {
      const languages = addItemToArray(["C++"]);
      expect(languages).to.have.lengthOf(4);
    });
  });

  describe("06-combine-arrays.js", () => {
    it('should contain a new array called "newArray"', () => {
      const newArray = combineArrays(["HTML"], ["CSS"]);
      expect(newArray).to.be.an("array");
    });
    it('"newArray" should merge two arrays into one', () => {
      const newArray = combineArrays(["HTML"], ["CSS"]);
      expect(newArray).to.deep.equal(["HTML", "CSS"]);
    });
    it('"newArray" should combine two arrays by using the spread operator', () => {
      expect(combineArrays.toString().includes("...")).to.equal(true);
    });
  });
});
