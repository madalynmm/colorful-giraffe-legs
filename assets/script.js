// Array of special characters:
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];
// Array of numeric characters:
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];
// Array of lower case characters:
var lowerCaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
// Array of upper case characters:
var upperCaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];

// Assignment code
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Function for getting random element from an array:
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];

  return randomElement;
}

function getPasswordOptions() {
  //variable to store length of password from user
  var length = parseInt(
    prompt("How many characters would you like your password to be?"),
    10
  );
    if (Number.isNaN(length)) {
      alert("Password length must be provided as a number.");
      return null;
    };
    if (length <8 || length >128) {
      alert("Password length must be between 8 and 128 characters.");
      return null;
    }

  var hasSpecialCharacters = confirm("Click OK to confirm including special characters in your password.");


  //Object to store user input:
  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,

  };

  return passwordOptions;
}


function generatePassword() {
   var options = getPasswordOptions();
  //  code logic below?
  return "password";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
