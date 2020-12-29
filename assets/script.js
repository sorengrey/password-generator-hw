

// attaches the generate button to the variable generateBtn
var generateBtn = document.querySelector("#generate");

// writes generated password into the #password input field
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// adds event listener to the generate button and triggers the writePassword function
generateBtn.addEventListener("click", writePassword);

// adds event listener to the generate button and triggers the showForm function
generateBtn.addEventListener("click", showForm);

// function to show the hidden form
function showForm() {
    document.getElementById("hidden").style.display = "block";
}

 // generates a random password with lowercase letters -- do not touch!!
 /* function generatePassword() {
  var pwlength = document.querySelector("#passwordlength").value,
      lowercase = "abcdefghijklmnopqrstuvwxyz",
      uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numerical = "0123456789",
     specialChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-='",
     returnedPw = " ";
    // returnedSp = " ";
  for (var i = 0, n = lowercase.length; i < pwlength; ++i) {
      returnedPw += lowercase.charAt(Math.floor(Math.random() * n));
  }
 // for (var i = 0, n = uppercase.length; i < pwlength; ++i) {
  //   returnedSp += uppercase.charAt(Math.floor(Math.random() * n));
 // }
  //var joinedSets = (returnedPw + returnedSp);
  //var shuffled = joinedSets.split('').sort(function(){return 0.5-Math.random()}).join('');
  return returnedPw;
}
*/

// testing - generates a random password with the right amount of characters, but needs checkbox logic
function generatePassword() {
    var pwlength = document.querySelector("#passwordlength").value,
    characters= "abcdefghijklmnopqrstuvwxyz" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "0123456789" + "!@#$%^&*()_+~`|}{[]\:;?><,./-='",
       returnedPw = " ";
      // returnedSp = " ";
    for (var i = 0, n = characters.length; i < pwlength; ++i) {
        returnedPw += characters.charAt(Math.floor(Math.random() * n));
    }
    return returnedPw;
  }

/*  UI adjustments needed:
- Error message if you don't click a checkbox "Please select at least one character type." - validation
*/



//This works and does not include special characters. Just generates numbers and letters. 
/* function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        returnedPw = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        returnedPw += charset.charAt(Math.floor(Math.random() * n));
    }
    return returnedPw; } */

