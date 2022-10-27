// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword (){
  let passwordLength = parseInt( window.prompt("provide length for password between 8-128 characters"));
  console.log("passwordLength = ", passwordLength)
  if (passwordLength > 128 || passwordLength < 8){
    window.alert("Password length must be between 8 and 128 characters.");
    return ("Password not generated.")
  }

  let possibleCharacters = "";
  let lower = "abcdefghijklmnopqrstuvwxyz"; 
  let includeLc = window.confirm("Press OK to include lowercase letters in password.")
  console.log("includeLc = ", includeLc)
  if (includeLc === true){
    possibleCharacters += lower;
  }
  console.log("possibleCharacters = ", possibleCharacters)

  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  let includeUc = window.confirm("Press OK to include uppercase letters in password.")
  console.log("includeUc = ", includeUc)
  if (includeUc === true){
    possibleCharacters += upper;
  }
  console.log("possibleCharacters = ", possibleCharacters)

  let numbers = "0123456789"; 
  let includeNum = window.confirm("Press OK to include numerals in password.")
  console.log("includeNum = ", includeNum)
  if (includeNum === true){
    possibleCharacters += numbers;
  }
  console.log("possibleCharacters = ", possibleCharacters)

  let specialCharacters = "()*?.,!@_~/-+"; 
  let includeSp = window.confirm("Press OK to include special characters in password.")
  console.log("includeSp = ", includeSp)
  if (includeSp === true){
    possibleCharacters += specialCharacters;
  }
  console.log("possibleCharacters = ", possibleCharacters)

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
