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
    return writePassword();
  }
  //function writePassword() {
  var uppers = confirm("Would you like uppercase letters in your password?");
  var lowers = confirm("Would you like lower case numbers in your password?");
  var numbers = confirm("Would you like numbers in your password?");
  var special = confirm("Would you like special characters in your password?");

  var upperArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var lowerArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  var intArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

  var userChoices = [];

  if (uppers) {
    userChoices = userChoices.concat(upperArray);
  }
  if (lowers) {
    userChoices = userChoices.concat(lowerArray);
  }
  if (numbers) {
    userChoices = userChoices.concat(intArray);
  }
  if (special) {
    userChoices = userChoices.concat(specialArray);
  }

  if (userChoices.length === 0) {
    alert("Please select at least one character type.");
    writePassword();
  }

  console.log(userChoices);
  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomPasswordNum = Math.floor(Math.random() * userChoices.length);
    console.log(randomPasswordNum);
    password += userChoices[randomPasswordNum];
    console.log(password);
  }
  alert("Your secure password is: " + password);
  //}

  // function generatePassword() stored as var password within function writePassword
  var password = writePassword();

  //variable passwordText = gets first element with ID password
  var passwordText = document.querySelector("#password");

  // sets the value the computer generates equal to the variable password
  // passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
