import { expect } from "chai";
import {
  generateLinks,
  returnObjectValues,
} from "./loops-objects-test-helper.js";

describe("Loops with Objects", () => {
  describe("01-loop-through-object", () => {
    it('should contain an string called "html"', () => {
      const html = generateLinks("");
      expect(html).to.be.a("string");
    });
    it("should return a string of <a> tags", () => {
      const anchors = generateLinks({
        Google: "https://www.google.com",
        Facebook: "https://www.facebook.com",
      });
      expect(anchors).to.be.a("string");
      expect(anchors).to.match(/(<a.*){2}/);
      expect(anchors).to.match(/href=("|')?https:\/\/www.google.com/);
      expect(anchors).to.match(/href=("|')?https:\/\/www.facebook.com/);
      expect(anchors).to.match(/>\s?Google\s?</);
      expect(anchors).to.match(/>\s?Facebook\s?</);
    });
  });

  describe("03-return-object-values", () => {
    it('should contain an array called "values"', () => {
      const arr = returnObjectValues({});
      expect(arr).to.be.an("array");
    });
    it("should return all the values in an object", () => {
      const objectValues = returnObjectValues({
        title: "Best CSS Tricks of the Year",
        author: "Mark Marshall",
        date: "2021-12-31",
        content: "1. Elegant Shadow ...",
      });
      expect(objectValues).to.deep.equal([
        "Best CSS Tricks of the Year",
        "Mark Marshall",
        "2021-12-31",
        "1. Elegant Shadow ...",
      ]);
    });
  });
});
