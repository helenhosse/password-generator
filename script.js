
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword (){
  let passwordLength = parseInt( window.prompt("provide length for password between 8-128 characters"));
  console.log("passwordLength = ", passwordLength)
  if (passwordLength > 128 || passwordLength < 8){
    window.alert("Password length must be between 8 and 128 characters.");
    return ("Password not generated.")
  }
  // In this section I made sure that the password length would be between 8 and 128 characters. If it was not
  //between these numbers, I added the return section of code to display "Password not generated." on the screen

  let possibleCharacters = "";
  let lower = "abcdefghijklmnopqrstuvwxyz"; 
  let includeLc = window.confirm("Press OK to include lowercase letters in password.")
  console.log("includeLc = ", includeLc)
  if (includeLc === true){
    possibleCharacters += lower;
  }
  console.log("possibleCharacters = ", possibleCharacters)

  // In this section I added the option to add lowercase letters in the password generated. 
  // The includeLC section of the code shows that the lowercase letters are only added if selected yes (or true)

  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  let includeUc = window.confirm("Press OK to include uppercase letters in password.")
  console.log("includeUc = ", includeUc)
  if (includeUc === true){
    possibleCharacters += upper;
  }
  console.log("possibleCharacters = ", possibleCharacters)

  // In this section I added the option to add uppercase letters in the password generated. 
  // The includeLC section of the code shows that the uppercase letters are only added if selected yes (or true)


  let numbers = "0123456789"; 
  let includeNum = window.confirm("Press OK to include numerals in password.")
  console.log("includeNum = ", includeNum)
  if (includeNum === true){
    possibleCharacters += numbers;
  }
  console.log("possibleCharacters = ", possibleCharacters)

  // In this section I added the option to add numbers in the password generated. 
  // The includeLC section of the code shows that numbers are only added if selected yes (or true)


  let specialCharacters = "()*?.,!@_~/-+"; 
  let includeSp = window.confirm("Press OK to include special characters in password.")
  console.log("includeSp = ", includeSp)
  if (includeSp === true){
    possibleCharacters += specialCharacters;
  }
  console.log("possibleCharacters = ", possibleCharacters)

 // In this section I added the option to add special characters in the password generated. 
  // The includeLC section of the code shows that the special characters are only added if selected yes (or true)



  if (includeLc === false && includeUc === false && includeNum === false && includeSp === false){
    alert("At least one character type should be chosen.");
    return ("Password not generated.")
  }

  let password = "";

  //This shows that the password generation has to have one of the following selected as yes (true) in order for it to run
  //If all are selected as no, it will show as "Password not generated."

  for (let i = 0; i < passwordLength; i++ ){
    let randomIndex = Math.floor (Math.random() *  possibleCharacters.length);
    password += possibleCharacters[randomIndex];
  }

  return password;
}

// This section is added to generate the actual password if at least one of the sections as been selected as yes


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// This section is added to generate the actual password if at least one of the sections as been selected as yes


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// The event listener is needed to start the process of generating the code when the button generate password is pressed
// Without this nothing will pop up when the button is pressed