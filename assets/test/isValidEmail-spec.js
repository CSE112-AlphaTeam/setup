
/* jslint node: true */
/* global describe, it, expect */

"use strict";

var isValidEmail_lib = require('../js/isValidEmail'); 

/*
*   TESTING isValidEmail() FUNCTION
*   FUNCTION DESCRIPTON AND SPECS LISTED BELOW 
*/

/*
* @method isValidEmail 
* Takes in an string and checks whether the string is a valid formatted email
*
* @parameter {String} email - the email being validated
* @return {Boolean} result - true if the email is valid, false if the email is invalid
*
* The regular expression pattern is based on RCF 5322: A valid email must be in 
* the form [personalized_part]@[domain] 
*
* where personalized part is a string composed of any combination of alphanumeric 
* characters, the symbols "!#$%&'*+-/=?^_`{|}~". 
*
* The domain is a string composed of any combination of alphanumeric characters, "-", and ".".
* Neither the domain nor the personalized part can have a "." as the first or
* last last character or two consecutive ".". 
*
* The whole message body should not exceed the length of 64 characters White space at the beginning and end will be ignored
*/


/*
 * These tests will test various forms of valid emails 
 */


//Test "alpha-team@gmail.com"
describe("#isValidEmail - Valid email test. ", function () {
  it("Test #1 should return true, 'alpha-team@gmail.com' being passed in", function () {
    var valid = isValidEmail_lib.isValidEmail("alpha-team@gmail.com");
    expect(valid).toBeTruthy();
  });
});

//Test "$t&r*email@yahoo.com"
describe("#isValidEmail - Valid email test. ", function () {
  it("Test #2 should return true, '$t&r*email@yahoo.com' being passed in", function () {
    var valid = isValidEmail_lib.isValidEmail("$t&r*email@yahoo.com");
    expect(valid).toBeTruthy();
  });
});

//Test length of 64 characters
describe("#isValidEmail - Valid email test. ", function () {
  it("Test #3 should return true, 'this5is8supposedtobethis5is8supposedtobe41longaaaaaaaa@yahoo.com' being passed in", function () {
    var valid = isValidEmail_lib.isValidEmail("this5is8supposedtobethis5is8supposedtobe41longaaaaaaaa@yahoo.com");
    expect(valid).toBeTruthy();
  });
});

//Test "powell_cs112@gmail.com"
describe("#isValidEmail - Valid email test. ", function () {
  it("Test #4 should return true, 'powell_cs112@gmail.com' being passed in", function () {
    var valid = isValidEmail_lib.isValidEmail("powell_cs112@gmail.com");
    expect(valid).toBeTruthy();
  });
});

//test odd characters 
describe("#isValidEmail - Valid email test. ", function () {
  it("Test #5 should return true, '!#$%&'*+-/=?^_`{|}~@ya-hoo.gmail.com' being passed in", function () {
    var valid = isValidEmail_lib.isValidEmail("!#$%&'*+-/=?^_`{|}~@ya-hoo.gmail.com");
    expect(valid).toBeTruthy();
  });
});

//test single character as [personalized_part]
describe("#isValidEmail - Valid email test. ", function () {
  it("Test #6 should return true, 'a@gmail.com' being passed in", function () {
    var valid = isValidEmail_lib.isValidEmail("a@gmail.com");
    expect(valid).toBeTruthy();
  });
});

describe("#isValidEmail - Valid email test. ", function () {
  it("Test should return true, 'CapitalLetter@GMail.com' being passed in", function () {
    var valid = isValidEmail_lib.isValidEmail("CapitalLetter@gmail.com");
    expect(valid).toBeTruthy();
  });
});


/*
 * These tests will test various forms of invalid emails and corner cases 
 */


//test invalid characters in [personalized_part]
describe("#isValidEmail - invalid email test. ", function () {
  it("Test #7 should return false, '()@gmail.com' being passed in", function () {
    var valid = isValidEmail_lib.isValidEmail("()@gmail.com");
    expect(valid).toBeFals();
  });
});

//test invalid characters in [personalized_part]
describe("#isValidEmail - invalid email test. ", function () {
  it("Test #8 should return false, '<>@gmail.com' being passed in", function () {
    var valid = isValidEmail_lib.isValidEmail("()@gmail.com");
    expect(valid).toBeFalsy();
  });
}); 

//test 65 characters
describe("#isValidEmail - invalid email test. ", function () {
  it("Test #9 should return false, 'THIS SHOULD FAILthis5is8supposedtobethis5is8supposedtobe41longaaaaaaaa@yahoo.com' being passed in", function () {
    var valid = isValidEmail_lib.isValidEmail("THIS SHOULD FAILthis5is8supposedtobethis5is8supposedtobe41longaaaaaaaa@yahoo.com");
    expect(valid).toBeFalsy();
  });
});

//test invalid character '.' as first character of [domain]
describe("#isValidEmail - invalid email test. ", function () {
  it("Test #10 should return false, 'invalid@.domain.com' being passed in", function () {
    var valid = isValidEmail_lib.isValidEmail("invalid@.domain.com");
    expect(valid).toBeFalsy();
  });
});

//test invalid character '.' as last character of [domain]
describe("#isValidEmail - invalid email test. ", function () {
  it("Test #11 should return false, 'invalid@domain.com.' being passed in", function () {
    var valid = isValidEmail_lib.isValidEmail("invalid@.domain.com");
    expect(valid).toBeFalsy();
  });
});

//test invalid sequence '..' in [domain]
describe("#isValidEmail - invalid email test. ", function () {
  it("Test #12 should return false, 'invalid@gmail..com' being passed in", function () {
    var valid = isValidEmail_lib.isValidEmail("invalid@domain..com");
    expect(valid).toBeFalsy();
  });
});

//test no [personalized_part]
describe("#isValidEmail - invalid email test. ", function () {
  it("Test #13 should return false, '@gmail.com' being passed in", function () {
    var valid = isValidEmail_lib.isValidEmail("@gmail.com");
    expect(valid).toBeFalsy();
  });
});


//test no [domain]
describe("#isValidEmail - invalid email test. ", function () {
  it("Test #14 should return false, 'invalid' being passed in", function () {
    var valid = isValidEmail_lib.isValidEmail("invalid");
    expect(valid).toBeFalsy();
  });
});

//test no @
describe("#isValidEmail - invalid email test. ", function () {
  it("Test #15 should return false, 'invalidgmail.com' being passed in", function () {
    var valid = isValidEmail_lib.isValidEmail("invalid");
    expect(valid).toBeFalsy();
  });
});

//test empty string
describe("#isValidEmail - invalid email test. ", function () {
  it("Test #16 should return false, '' being passed in", function () {
    var valid = isValidEmail_lib.isValidEmail("");
    expect(valid).toBeFalsy();
  });
});

//test spaces in middle
describe("#isValidEmail - invalid email test. ", function () {
  it("Test #17 should return false, 'invalid email@gmail.com' being passed in", function () {
    var valid = isValidEmail_lib.isValidEmail("invalid email@gmail.com");
    expect(valid).toBeFalsy();
  });
});

//test spaces at beginning and end
describe("#isValidEmail - invalid email test. ", function () {
  it("Test #18 should return false, '    validemail@gmail.com    ' being passed in", function () {
    var valid = isValidEmail_lib.isValidEmail("    validemail@gmail.com    ");
    expect(valid).toBeTruthy();
  });
});


