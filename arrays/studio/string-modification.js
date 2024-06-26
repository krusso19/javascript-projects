const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let modstr = str.slice(3, str.length) + str.slice(0, 3);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`Part 1: The original string is ${str} and the modified string is ${modstr}`)

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let relocationValue = input.question("How many letters would you like to relocate?")
modstr = str.slice(Number(relocationValue), str.length) + str.slice(0, Number(relocationValue));
console.log(`Part 2: The original string is ${str} and the modified string is ${modstr}.`);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (relocationValue < str.length) {
    modstr = str.slice(Number(relocationValue), str.length) + str.slice(0, Number(relocationValue));
    console.log(`The original string is ${str} and the modified string is ${modstr}.`)
} else if (relocationValue === str.length){
    modstr = str.slice(Number(relocationValue), str.length) + str.slice(0,Number(relocationValue));
    console.log(`The original string is ${str} and the modified string is ${modstr}. You see no difference because the string length is equal to ${relocationValue}.`)
} else {
    modstr = str.slice(3, str.length) + str.slice(0, 3);
    console.log(`The number you entered is longer than the word. If you had entered 3, the original string is ${str} and the modified string would be ${modstr}.`)
}