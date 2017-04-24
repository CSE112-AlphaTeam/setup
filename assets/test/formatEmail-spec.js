
/* jslint node: true */
/* global describe, it, expect */

"use strict";

var formatEmail_lib = require('../js/formatEmail'); 

/*
*   TESTING formatEmail() FUNCTION
*   FUNCTION DESCRIPTON AND SPECS LISTED BELOW 
*/


/*
 * These tests will test various forms of valid emails 
 */


describe("#formatEmail - Valid email format test. ", function () {
  //Test "alpha-team@gmail.com"
  it("Test #1 should return true, 'alpha-team', 'gmail.com' being passed in", function () {
    var valid = formatEmail_lib.formatEmail("alpha-team", "gmail.com");
    expect(valid).toBeTruthy();
  });

   
   //Test "$t&r*email@yahoo.com"
   it("Test #2 should return true, '$t&r*email', 'yahoo.com' being passed in", function () {
    var valid = formatEmail_lib.formatEmail("$t&r*email", "yahoo.com");
    expect(valid).toBeTruthy();
  });
  

});

