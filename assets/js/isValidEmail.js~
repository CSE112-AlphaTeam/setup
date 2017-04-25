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
exports.isValidEmail = function(email)
{
    email = email.trim();
    if (email.length > 64)
    {
      return false;
    }
    else
    {
      return email.search(/^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/) != -1;
    }
};

