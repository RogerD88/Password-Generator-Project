// Assignment Code
var generateBtn = document.querySelector("#generate");
var possiblePass = "";

// Assignment of array literal
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChar = "1234567890";
var specialChars = "!@#$%^&*()";

function getRandomIndex() {
// picking the character from possible password using math.random with ppossiblePass
  var index = possiblePass[Math.floor(Math.random() * possiblePass.length)]
  return index
}

// 'console.log(getRandomIndex(lowerCaseArray))

function generatePassword() {
// console.log('generating password ...', Number.parseInt(passwordLengthPrompt))
  var correctPassGenerated = "";

// asking for all the prompts from the user
  var passwordLengthPrompt = window.prompt('How long would you like your password to be? Must be between 8 and 128 characters.')
  var confirmLowerCaseChars = window.prompt('Would you like lower case characters?')
  var confirmUpperCaseChars = window.prompt('Would you like upper case characters?')
  var confirmNumericChars = window.prompt('Would you like numeric characters?')
  var confirmSpecialChars = window.prompt('Would you like special characters?')

  var passwordLength = parseInt(passwordLengthPrompt);
// throwing error if the user doesn't select any of the character field
  if (confirmLowerCaseChars !== "yes" && confirmUpperCaseChars !== "yes" && confirmNumericChars !== "yes" && confirmSpecialChars !== "yes") {
    alert("Please select at least one type");    
// throwing error if the user doesn't select password in tange
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter the password rangebetween 8 and 128 characters")
  } else {
// adding all the characters to possible password if the user selects thats field
    if(confirmUpperCaseChars === "yes") {
      possiblePass = possiblePass + upperCaseChars;
    }
    if (confirmLowerCaseChars === "yes") {
      possiblePass = possiblePass + lowerCaseChars;
    }
    if (confirmSpecialChars === "yes") {
      possiblePass = possiblePass + specialChars;
    }
    if (confirmNumericChars === "yes") {
      possiblePass = possiblePass + numericChar;
    }
// will loop through number of times the user entered, picking up random characters out of possible password
    for(let i = 0 ; i<passwordLength; i++) {
      correctPassGenerated =  correctPassGenerated + getRandomIndex();
    }
  }
  return correctPassGenerated;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
// targeting texxtarea box
  var passwordText = document.querySelector("#password");
 console.log(password);
// wiritng that password to it.
  passwordText.value = password;

  possiblePass ="";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
