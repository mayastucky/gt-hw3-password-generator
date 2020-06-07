// Assignment Code
//generateBtn is assigned to the button from HTML
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  // prompt user to enter their desired password length
  var passwordLength = prompt(
    "Please enter desired password length between 8 and 128 characters"
  );
  //have function run again if it does not meet requirements
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a password between 8 and 128 characters");
    return writePassword();
  }
  //asks user to select "ok" or "cancel" for each type of character
  var uppers = confirm("Would you like uppercase letters in your password?");
  var lowers = confirm("Would you like lower case numbers in your password?");
  var numbers = confirm("Would you like numbers in your password?");
  var special = confirm("Would you like special characters in your password?");
  //array of upper case letters
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
  //array of all lower case letters
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
  //array of all numbers
  var intArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  //array of special characters
  var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  //empty array
  var userChoices = [];
  //if the user selects upper case, this if will push upper case letter array into the empty array
  if (uppers) {
    userChoices = userChoices.concat(upperArray);
  }
  //if the user selects lower case letters, this will push lower case letter array into the array
  if (lowers) {
    userChoices = userChoices.concat(lowerArray);
  }
  //if the user selects numbers, this will push numbers into the password array
  if (numbers) {
    userChoices = userChoices.concat(intArray);
  }
  //if the user selects special characters, this will push special characters into the password array
  if (special) {
    userChoices = userChoices.concat(specialArray);
  }
  //if the password array ends up being empty, the user will be asked to select at least one type and the function will run again
  if (userChoices.length === 0) {
    alert("Please select at least one character type.");
    writePassword();
  }
  console.log(userChoices);
  //this is the empty password variable
  var password = "";
  //for loop that will loop as many times as the user has indicated
  //this for loop selects a random index from inside the userChoices array and concatenates it
  //after the loop is run it will return the password to the user in an alert
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
