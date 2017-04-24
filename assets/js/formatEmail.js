var isValidEmailFunc = require("./isValidEmail"); 

exports.formatEmail = function(personalized,domain)
{
   var inputPersonalized = personalized; 
   var inputDomain = domain; 
   var combined = inputPersonalized + "@" + inputDomain; 

   if(isValidEmailFunc.isValidEmail(combined))
   {
	return true; 
   }
   else 
   {
	return false; 
   }
};
