const middle = require("../middle");
const assert = require("chai").assert;

describe("#middle", () => {
  it("returns 3 for [1, 2, 3, 4, 5]", () => {
    assert.strictEqual(middle([1, 2, 3, 4, 5]), 3);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(middle(["5"]), "5");
  });

  it("returns [3,3] for ['1, 2, 3, 3, 4, 5']", () => {
    assert.deepEqual(middle([1, 2, 3, 3, 4, 5]), [3, 3]);
  });
});
