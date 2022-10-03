// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var length = window.prompt("Enter password length:");
    
      if (!length) {
        return;
      }
      
      if (length < 8 || length > 128) {
        window.alert("Please choose a number between 8 and 128.");
        return;
      }
      // else ()

  var caseValue =window.prompt("Do you want to include uppercase letters, lowercase letters, or both?")
      
      if (!caseValue) {
        return;
      }

      if (caseValue = "uppercase") {
        // add uppercase parameters to random generator
      }
      else if (caseValue = "lowercase") {
        // add lowercse parameters to generator
      }
      else if (caseValue = "both") {
        // add both
      }

  var numValue = window.prompt("Do you want to include numbers?")

    if (!numValue) {
      return;
    }

    if (numValue = "yes") {
      // use numbers
    }
    else if (numValue = "no") {
      // skip numbers
    }

  var specialChars = window.prompt("Do you want to include special characters?");

    if (!specialChars) {
      return;
    }

    if (specialChars = "yes") {
      // add special characters
    }
    else if (specialChars = "no") {
      // skip special characters
    }

    

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
