
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

  //Test Capital letters in both personalized and domain
  it("Test #3 should return true, 'CapitalLetter' 'GMail.com' being passed in", function () {
    var valid = formatEmail_lib.formatEmail("CapitalLette", "gmail.com");
    expect(valid).toBeTruthy();
  });
  
  //Test numbers in personalized
  it("Test #4 should return true, '1234' 'GMail.com' being passed in", function () {
    var valid = formatEmail_lib.formatEmail("1234", "GMail.com");
    expect(valid).toBeTruthy();
  });
  
  //Test length of 64 characters
  it("Test #5 should return true, 'this5is8supposedtobethis5is8supposedtobe41longaaaaaaaa' 'Yahoo.com' being passed in", function () {
    var valid = formatEmail_lib.formatEmail("this5is8supposedtobethis5is8supposedtobe41longaaaaaaaa", "Yahoo.com");
    expect(valid).toBeTruthy();
  });

  //Test odd characters 
  it("Test #6 should return true, '!#$%&'*+-/=?^_`{|}~r' 'gmail-hoo.com' being passed in", function () {
    var valid = formatEmail_lib.formatEmail("!#$%&'*+-/=?^_`{|}~r", "gmail-hoo.com");
    expect(valid).toBeTruthy();
  });
  
  //Test "-" and "." in domain portion 
  it("Test #7 should return true, 'CapitalLetter' 'GM-a.il.com' being passed in", function () {
    var valid = formatEmail_lib.formatEmail("CapitalLetter", "GM-a.il.com");
    expect(valid).toBeTruthy();
  });

});

/*
 * These tests will test various forms of invalid emails 
 */

describe("#formatEmail - invalid email format test. ", function() {

  //test invalid characters in [personalized_part]	
  it("Test #8 should return false, 'CapitalLetter()' 'GM-a.il.com' being passed in", function () {
    var valid = formatEmail_lib.formatEmail("CapitalLetter()", "GM-a.il.com");
    expect(valid).toBeFalsy();
  });

 //test invalid characters in [personalized_part]
  it("Test #9 should return false, 'this<invalid>' 'yaoo.com' being passed in", function () {
    var valid = formatEmail_lib.formatEmail("this<invalid>", "yaoo.com");
    expect(valid).toBeFalsy();
  }); 

  //test 65 characters
  it("Test #10 should return false, 'THIS SHOULD FAILthis5is8supposedtobethis5is8supposedtobe41longaaaaaaaa' 'yahoo.com' being passed in", function () {
    var valid = formatEmail_lib.formatEmail("THIS SHOULD FAILthis5is8supposedtobethis5is8supposedtobe41longaaaaaaaa", "yahoo.com");
    expect(valid).toBeFalsy();
  }); 

  //test invalid character '.' as first character of [domain]
  it("Test #11 should return false, 'invali' '.domain.com' being passed in", function () {
    var valid = formatEmail_lib.formatEmail("invali", ".domain.com");
    expect(valid).toBeFalsy();
  }); 

  //test invalid character '.' as last character of [domain]
  it("Test #12 should return false, 'invalid' 'domain.com.' being passed in", function () {
    var valid = formatEmail_lib.formatEmail("invalid", "domain.com.");
    expect(valid).toBeFalsy();
  });

  //test invalid sequence '..' in [domain]
  it("Test #13 should return false, 'invalid' 'g..mail.com' being passed in", function () {
    var valid = formatEmail_lib.formatEmail("invalid", "g..mail.com");
    expect(valid).toBeFalsy();
  }); 

  //test no [personalized_part]
  it("Test #14 should return false, '' 'nopersonalized.com' being passed in", function () {
    var valid = formatEmail_lib.formatEmail("", "nopersonalized.com");
    expect(valid).toBeFalsy();
  });

  //test no [domain]
  it("Test #15 should return false, 'nodomain' '' being passed in", function () {
    var valid = formatEmail_lib.formatEmail("nodomain", "");
    expect(valid).toBeFalsy();
  });

  //test empty string
  it("Test #16 should return false, '' '' being passed in", function () {
    var valid = formatEmail_lib.formatEmail("", "");
    expect(valid).toBeFalsy();
  });

  //test spaces in middle
  it("Test #17 should return false, 'spaces  in middle' 'bing.com' being passed in", function () {
    var valid = formatEmail_lib.formatEmail("spaces  in middle", "bing.com");
    expect(valid).toBeFalsy();
  });
}); 


/*

//UNCOMMENT ONLY FOR PRESENTATION PURPOSES


describe("#formatEmail - Email test for presentation. ", function () {
  //Test "alpha-team@gmail.com"
  it("Test #1 should return true, 'alpha-team', 'gmail.com' being passed in", function () {
    var valid = formatEmail_lib.formatEmail("alpha-team", "gmail.com");
    expect(valid).toBeFalsy();
  });

  //test spaces in middle
  it("Test #2 should return false, 'spaces  in middle' 'bing.com' being passed in", function () {
    var valid = formatEmail_lib.formatEmail("spaces  in middle", "bing.com");
    expect(valid).toBeTruthy();
  });
}); 

*/
