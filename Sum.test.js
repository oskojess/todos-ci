
const expect = require('chai').expect;
const assert = require('assert');
const getSoma = require('./Sum');

describe("sum", function () {
  it("should be a simple sum", function () {
    assert(getSoma.somar(2, 2), 4);
  });
  it("deve receber apenas números", function () {
    expect(() => getSoma.somar(null, undefined)).to.throw("expected NaN to be a function"); // FAILS
  });
})
