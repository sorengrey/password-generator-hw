// Assignment Code --
// querySelector is like getElementById!
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



/*  UI adjustments:
  - Desired password length? 8 - 128 
  - Checkboxes for character types - lowercase, uppercase, numeric, special
*/


//Need an event handler for generateBtn?
//generateBtn.onclick = writePassword;



/*This works and does not include special characters. Just generates numbers and letters. 

function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        returnedPw = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        returnedPw += charset.charAt(Math.floor(Math.random() * n));
    }
    return returnedPw;
}
*/

/* This works and includes special characters, but so far only adds them at the end of the password.

 function generatePassword() {
  var length = 4,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      specialChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-='"
      returnedPw = "";
      returnedSp = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      returnedPw += charset.charAt(Math.floor(Math.random() * n));
  }
   for (var i = 0, n = specialChars.length; i < length; ++i) {
      returnedSp += specialChars.charAt(Math.floor(Math.random() * n));
  }
  joinedSets = (returnedPw + returnedSp);
  return joinedSets;
}
*/