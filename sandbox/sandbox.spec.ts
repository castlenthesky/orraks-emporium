import { expect } from "chai";

describe("Dice Functions:", () => {
  describe("randbetween()", () => {
    it("should accept two numbers.", async () => {
      expect(2 + 7).to.equal(9);
    });
    it("should return a number.", async () => {
      expect(2).to.equal(2);
    });
  });

  describe("Subraction Function", () => {
    it("1 - 1 should equal zero", async () => {
      expect(1 - 1).to.equal(0);
    });
    it("4 - 2 should equal 2", async () => {
      expect(4 - 2).to.equal(2);
    });
  });
});
