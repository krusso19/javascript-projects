let number1 = 123.45;

//Returns 'undefined'.
console.log(number1.length);

//Use type conversion to print the length (number of digits) of an integer.
console.log((String(number1)).length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
console.log((Number((String(number1)).length))-1)

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
console.log(String(number1))

if (String(number1).includes(".")) {
  console.log(String(number1).length-1);
}

else {
    console.log(String(number1).length);
}
