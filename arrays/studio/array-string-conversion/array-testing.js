let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];
/*KT 1) I don't see a spot for 1. This code doesnt work for any string (doesn't include a variable).
It also assumes that you only have commas, semicolons, and spaces. No other delimiter.
*/

if (protoArray1.includes(",")) {
	console.log("protoArray1 includes commas.")
} else if (protoArray1.includes(";")) {
	console.log("protoArray1 includes semicolons.")
} else if (protoArray1.includes(" ")) {
	console.log("protoArray1 includes spaces.")
} else {
	 console.log("protoArray1 does not include a comma, semicolon, or space.")
}

//2) 
function reverseCommas() {
	//TODO: 1. create and instantiate your variables.
	let check = protoArray1;
	let output;
	//TODO: 2. write the code required for this step
if (check.includes(",")) {
	output = check.split(",").reverse().join();
}
	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	return output;
}


//3)
function semiDash() {
	let check = protoArray2;
	let output;

//TODO: write the code required for this step
if (check.includes(";")) {
	output = check.split(";").sort().join("-");
}
  
	return output;
}

//4)
function reverseSpaces() {
	let check = protoArray3;
	let output;
  //TODO: write the code required for this step
if (check.includes(" ")) {
	output = check.split(" ").sort().reverse().join(" ")
}
	return output;
}

//5)
function commaSpace() {
	let check = protoArray4;
	let output;
	//TODO: write the code required for this step
  if (check.includes(", ")) {
	output = check.split(", ").join()
  }
	return output;
}

// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};