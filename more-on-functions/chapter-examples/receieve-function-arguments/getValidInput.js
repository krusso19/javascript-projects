const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"
//let startsWithA = function(abc) {
//  return String(abc) === "a";
//}
//console.log(getValidInput("Enter an input that starts with 'a'. ", startsWithA))

// TODO 2: write a validator 
// that ensures input is a vowel
//KT - not sure why my OR || statement wasnt working.
//KT - tried String(abcd) === "a"||"e"; and it would only accept A or except all of them.
let isVowel = function(abcd) {
  if (String(abcd).toLowerCase() === "a") {
    return true
  } else if ((String(abcd).toLowerCase() === "e")) {
    return true
  } else if ((String(abcd).toLowerCase() === "i")) {
    return true
  } else if ((String(abcd).toLowerCase() === "o")) {
    return true
  } else if ((String(abcd).toLowerCase() === "u")){
    return true
  }
  return false;
}
console.log(getValidInput("Enter a vowel. ", isVowel));

// Be sure to test your code!
