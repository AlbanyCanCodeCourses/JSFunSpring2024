import { expect } from "chai";
import {
  getName,
  getTheCharacterPosition,
  stringLength,
  getLastCharacter,
  getLastWordInPlaceName,
} from "./strings-test-helper.js";

describe("Strings", () => {
  describe("01-create-a-string", () => {
    it('should contain a variable called "myName" that is equal to your name', () => {
      const name = getName();
      expect(name).to.be.a("string").to.have.length.greaterThan(1);
    });
  });

  describe("02-get-character-position", () => {
    it('should contain a variable "characterPosition" and it should be equal to the index of "letter" within "firstName"', () => {
      expect(getTheCharacterPosition("James", "a")).equal(1);
    });
  });

  describe("03-string-length", () => {
    it('should contain a constant "strLength" and it should count the number of characters within a string "str"', () => {
      expect(stringLength("Javascript")).equal(10);
    });
  });

  describe("04-get-last-character", () => {
    it('should contain a constant called "lastCharacter" and it should equal lastCharacter the last character (or letter) within the string "str"', () => {
      expect(getLastCharacter("Marvel")).equal("l");
    });
  });

  describe("05-get-last-word-in-place-name", () => {
    it('should contain a variable "newPlace" that is equal to the second word within a place name "place"', () => {
      expect(getLastWordInPlaceName("Los Angeles")).equal("Angeles");
    });
  });
});
