import { expect } from "chai";
import { User } from "../src/sandbox";

describe("User Creation Tests", () => {
  describe("Valid username tests", () => {
    it("Username must be defined", async () => {
      // expect("Yes").to.equal("No");
    });
    it("Username must be between 6 and 24 characters long", async () => {
      // expect(9).to.equal(9);
    });
    it("Username must be alphanumeric", async () => {
      // expect(9).to.equal(9);
    });
    it("Username must be unique", async () => {
      // expect(9).to.equal(9);
    });
  });

  describe("Valid password tests", () => {
    it("Password must be defined", async () => {
      // expect(2).to.equal(2);
    });
    it("Password must be between 8 and 32 characters", async () => {
      // expect(9).to.equal(9);
    });
    describe("Password must meet complexity requirements", async () => {
      it("At least one uppercase", async () => {
        // expect(9).to.equal(9);
      });
      it("At least one number", async () => {
        // expect(9).to.equal(9);
      });
      it("At least one special character", async () => {
        // expect(9).to.equal(9);
      });
    });
  });

  describe("Create default values for undefined User data", async () => {
    it("username must be defined", async () => {
      // test criteria here
    });
    it("password must be defined", async () => {
      // test criteria here
    });
    it("email must be defined", async () => {
      // test criteria here
    });
    it("default role should be 'user'", async () => {
      // test criteria here
    });
    it("default title should be 'aspiring developer'", async () => {
      // test criteria here
    });
    it("firstname may remain undefined", async () => {
      // test criteria here
    });
    it("lastname may remain undefined", async () => {
      // test criteria here
    });
    it("avatarURL may remain undefined", async () => {
      // test criteria here
    });
  });
});
