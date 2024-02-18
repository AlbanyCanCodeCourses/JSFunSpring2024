import { expect } from "chai";
import {
  getBookTitleConcat,
  getBookTitleTemplate,
  replaceLastName,
} from "./combine-strings-helper.js";

describe("Combine Strings", () => {
  describe("01-concatenate-operator", () => {
    it('should contain a variable "bookInfo" that is bookTitle + by + author (e.g. Harry Potter and the Sorcerer\'s Stone by J. K. Rowling)', () => {
      const title = getBookTitleConcat(
        "The Lord of the Rings",
        "J.R.R. Tolkien"
      );
      expect(title)
        .to.be.a("string")
        .to.equal("The Lord of the Rings by J.R.R. Tolkien");
    });
    it("should use the concatenation operator (the plus sign) to combine values into a string", () => {
      const funcStr = getBookTitleConcat.toString();
      const parts = funcStr.split("+");
      expect(parts.length).to.be.greaterThanOrEqual(3);
    });
  });

  describe("02-template-literals", () => {
    it('should contain a variable "bookInfo" that is bookTitle + by + author (e.g. Harry Potter and the Sorcerer\'s Stone by J. K. Rowling)', () => {
      const title = getBookTitleTemplate(
        "The Lord of the Rings",
        "J.R.R. Tolkien"
      );
      console.log(title);
      expect(title)
        .to.be.a("string")
        .to.equal("The Lord of the Rings by J.R.R. Tolkien");
    });
    it("should use the concatenation operator (the plus sign) to combine values into a string", () => {
      const funcStr = getBookTitleTemplate.toString();
      const parts = funcStr.split("`");
      expect(parts.length).to.be.greaterThanOrEqual(3);
      const pieces = funcStr.split("$");
      expect(pieces.length).to.be.greaterThanOrEqual(3);
    });
  });

  describe("03-replace-last-name", () => {
    it('"fullName" should be equal to a person\'s new name', () => {
      expect(replaceLastName("Gordon Ramsey", "Smith")).equal("Gordon Smith");
    });
  });
});
