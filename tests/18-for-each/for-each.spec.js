import { expect } from "chai";
import { findLowestNumber, generateLinks } from "./for-each-test-helper.js";

describe("For Each", () => {
  describe("01-lowest-num", () => {
    it('should change the variable "lowestNumber" so that it equals the lowest number in an array of numbers', () => {
      const numbers = [1, 9999999, 4.13, -20];
      expect(findLowestNumber(numbers)).to.equal(-20);
    });
    it("should use .forEach()", () => {
      const funcStr = findLowestNumber.toString();
      expect(funcStr).to.contain(".forEach");
    });
  });

  describe("02-generate-links", () => {
    it('"htmlStr" should be a string of <a> tags, with one <a> tag per URL in the "links" array', () => {
      const links = ["http://vanilla-js.com", "https://developer.mozilla.org"];
      const anchors = generateLinks(links);
      expect(anchors).to.be.a("string");
      expect(anchors).to.match(/(<a.*){2}/);
      expect(anchors).to.match(/(.*\a>){2}/);
    });
    it('each href attribute should equal a URL in the "links" array (e.g. <a href="https://url1.com" ...', () => {
      const links = ["http://vanilla-js.com", "https://developer.mozilla.org"];
      const anchors = generateLinks(links);
      expect(anchors).to.match(/href=("|')?http:\/\/vanilla-js.com/);
      expect(anchors).to.match(/href=("|')?https:\/\/developer.mozilla.org/);
    });
    it("the text between <a ...> and </a> for each link should look like e.g. 1. https://url1.com and the number should increment (HINT JavaScript starts with 0 instead of 1)", () => {
      const links = ["http://vanilla-js.com", "https://developer.mozilla.org"];
      const anchors = generateLinks(links);
      expect(anchors).to.match(/>\s?2\.? https:\/\/developer.mozilla.org\s?</);
      expect(anchors).to.match(/>\s?2\.? https:\/\/developer.mozilla.org\s?</);
    });
    it("should use .forEach()", () => {
      const funcStr = generateLinks.toString();
      expect(funcStr).to.contain(".forEach");
    });
  });
});
