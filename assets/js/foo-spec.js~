/* jslint node: true */
/* global describe, it, expect */

"use strict";

var foo_lib = require('./foo');

describe("#foo", function () {
  it("Should return true, 'baz' being passed in", function () {
    var fooed = foo_lib.foo("baz");
    expect(fooed).toBe(true);
  });
});

describe("#foo", function () {
  it("Should return false, 'Baz' being passed in", function () {
    var fooed = foo_lib.foo("Baz");
    expect(fooed).toBe(false);
  });
});

describe("#foo", function () {
  it("Should return false, Empty string being passed in", function () {
    var fooed = foo_lib.foo("");
    expect(fooed).toBe(false);
  });
});

describe("#foo", function () {
  it("Should return false, 'Alpha' being passed in", function () {
    var fooed = foo_lib.foo("Alpha");
    expect(fooed).toBe(false);
  });
});
