const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail", () => {
  it("returns labs for [Hello ,Lighthouse, Labs]", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]), "Labs");
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(tail(["5"]), "5");
  });
});
