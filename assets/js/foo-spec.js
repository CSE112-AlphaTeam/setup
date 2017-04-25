/**
 * Test function
 * @namespace foo-spec
 * @author Alpha Team
 */

/* jslint node: true */
/* global describe, it, expect */

"use strict";

var foo_lib = require('./foo');

/**
* @function describe
* @description Test foo function to be true when "baz" is passed in
* @param {null} - Does not take a parameter
* @return {boolean} true if fooed = "baz"
* @memberof foo-spec
*/
describe("#foo", function () {
  it("Should return true, 'baz' being passed in", function () {
    var fooed = foo_lib.foo("baz");
    expect(fooed).toBe(true);
  });
});

/**
* @function describe
* @description Test foo function to be false when "Baz" is passed in
* @param {null} - Does not take a parameter
* @return {boolean} false if fooed = "Baz"
* @memberof foo-spec
*/
describe("#foo", function () {
  it("Should return false, 'Baz' being passed in", function () {
    var fooed = foo_lib.foo("Baz");
    expect(fooed).toBe(false);
  });
});

/**
* @function describe
* @description Test foo function to be false when "" is passed in
* @param {null} - Does not take a parameter
* @return {boolean} false if fooed = ""
* @memberof foo-spec
*/
describe("#foo", function () {
  it("Should return false, Empty string being passed in", function () {
    var fooed = foo_lib.foo("");
    expect(fooed).toBe(false);
  });
});

/**
* @function describe
* @description Test foo function to be false when "Alpha" is passed in
* @param {null} - Does not take a parameter
* @return {boolean} false if fooed = "Alpha"
* @memberof foo-spec
*/
describe("#foo", function () {
  it("Should return false, 'Alpha' being passed in", function () {
    var fooed = foo_lib.foo("Alpha");
    expect(fooed).toBe(false);
  });
});
