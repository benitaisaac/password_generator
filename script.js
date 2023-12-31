// Assignment Code
var generateBtn = document.querySelector("#generate");

//Create a global object which will hold user inputs
let userInput = {};


//Create two functions: userInput and then generatePassword
//userInput will need five window promps. Use a string for first 
//userInput will need to store user input to send into generatePassword

function getUserInput(){
  userInput.length = Number(window.prompt("Password Length (8-128)", ""));
    if (userInput.length < 8 || userInput.length > 128){
      window.alert("Please enter a valid number");
      getUserInput();
    } 
  userInput.lowerCase = window.confirm("Include lowercase?");
  userInput.upperCase = window.confirm("Include uppercase?");
  userInput.specialChar = window.confirm("Include special characters?");
  userInput.number = window.confirm("Include numbers?");
    if (!userInput.lowerCase && !userInput.upperCase && !userInput.specialChar && !userInput.number ){
      window.alert("Please select 'ok' for at least one category");
      getUserInput();
    }

  console.log(userInput);
}

//generatePassword will: 
//Create 4 strings for uppercase, lowercase, special characters (in README), and numbers
//Create a new string (passwordConcat) that will hold the concatonated user options for password 
//Create a for loop to choose a password (user entered length) randomly from passwordConcat
//To randomly choose, use math.random
//return this string and send to function writePassword

function generatePassword(){
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let specialChar = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  let number = "0123456789";

  let passwordConcat = "";
  let finalPassword = "";

  getUserInput();

  if(userInput.upperCase){
    passwordConcat += upperCase //this equals passwordConcat = passwordConcat + uppCase
  } 
  if(userInput.lowerCase){
    passwordConcat += lowerCase 
  }
  if(userInput.specialChar){
    passwordConcat += specialChar
  }
  if(userInput.number){
    passwordConcat += number
  }

  console.log(passwordConcat);

  for (let i=0; i < userInput.length; i++){
    finalPassword = finalPassword + passwordConcat[Math.floor((Math.random()) * passwordConcat.length)];
  }

  return finalPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //set the variable password as what is returned on generate Password
  var passwordText = document.querySelector("#password");  

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

