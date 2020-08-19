
const expect = require('chai').expect;
const assert = require('chai').assert;
const getSoma = require('./Sum');

describe("sum", function () {
  it("should be a simple sum", function () {
    assert(getSoma.somar(2, 2), 4);
  });
  it("deve receber apenas números", function () {
    expect(isNaN(getSoma.somar(null, undefined))).to.be.true; // FAILS
  });
  it("Testando com Exception", function () {
    assert.throws(() => getSoma.somar(29, 10), TypeError, "Illegal salmon!");
  });
})
