// Assignment Code
//generateBtn is assigned to the button from HTML
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt(
    "Please enter desired password length between 8 and 128 characters"
  );

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a password between 8 and 128 characters");
    writePassword();
  }

  var uppers = confirm("Would you like uppercase letters in your password?");
  var lowers = confirm("Would you like lower case numbers in your password?");
  var numbers = confirm("Would you like numbers in your password?");
  var special = confirm("Would you like special characters in your password?");



  // function generatePassword() stored as var password within function writePassword
  var password = generatePassword();

  // variable passwordText = gets first element with ID password
  var passwordText = document.querySelector("#password");

  // sets the value the computer generates equal to the variable password
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
