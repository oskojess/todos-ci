const assert = require('assert');
const getSoma = require('./Sum');

describe("sum", function () {
  it("should be a simple sum", function () {
    assert(getSoma.somar(2, 2), 4);
  })
})