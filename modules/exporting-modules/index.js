// Import the modules exported from practiceExports.js below:
/*const palindromeCheck = require('./practiceExports.js');

console.log(typeof palindromeCheck);
console.log(palindromeCheck('mam'));
*/

const practice = require('./practiceExports.js');

console.log(typeof practice);
console.log(practice);

let arrayExample = ['hello', 'world', 123, 987, 'LC101']
console.log(practice.isPalindrome('mpm'));
console.log(practice.evenOrOdd(9));

console.log(practice.randomArrayElement(arrayExample));

console.log("if you want more than one random:")

for (i=0; i<4; i++) {
    console.log(practice.randomArrayElement(arrayExample));
}