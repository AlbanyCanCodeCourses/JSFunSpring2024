import { expect } from "chai";
import { addDrink, addTip } from "./control-flow-test-helper.js";

describe("6. Control Flow", () => {
  describe("01-if-statement.js", () => {
    it('should add "drink" to the variable "total" if "isBuyingDrink" is true"', () => {
      expect(addDrink(6.95, 1.99, true)).to.be.a("number").to.equal(8.94);
    });

    it('should only change the value of "total" if "isBuyingDrink" is true', () => {
      expect(addDrink(6.95, 1.99, false)).to.be.a("number").to.equal(6.95);
    });
  });

  describe("02-if-statement.js", () => {
    it('"total" should equal to "subtotal" + ("subtotal" * "tip") if tip is greater than 0', () => {
      expect(addTip(25, 0.1)).to.be.a("number").to.equal(27.5);
    });

    it('"total" should equal "subtotal" if "tip" is 0', () => {
      expect(addTip(25.78, 0)).to.be.a("number").to.equal(25.78);
    });
  });
});
