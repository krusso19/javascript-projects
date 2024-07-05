function checkFuel(level) {
  if (level > 100000){
    return 'green';
  } else if (level > 50000){
    return 'yellow';
  } else {
    return 'red';
  }
}

//KT - why would I put this anywhere? it prints the amount. I would want it to return the amount somewhere and the color here.
let definetlyTheShuttleFuelLevel = function(n) {
  if (checkFuel(n) === "green") {
    return (n - 100001);
  } else if (checkFuel(n) === "yellow") {
    return (n - 50001);
  } else {
    return (n);
  }
}
//console.log(definetlyTheShuttleFuelLevel(55000));

function holdStatus(arr){
  if (arr.length < 7) {
    return `Spaces available: ${7-arr.length}.`;
  } else if (arr.length > 7){
    return `Over capacity by ${arr.length-7} items.`;
  } else {
    return "Full";
  }
}

let fuelLevel = 200000;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];

console.log("Fuel level: " + checkFuel(fuelLevel));
console.log("Hold status: " + holdStatus(cargoHold));

/* Steal some fuel from the shuttle:
 */
 
//a). Define an anonymous function and set it equal to a variable with a normal, non-suspicious name. The function takes one parameter. This will be the fuel level on the shuttle.
/*
let definetlyTheShuttleFuelLevel = function(n) {
  if (checkFuel(n) === "green") {
    return (n - 100001);
  } else if (checkFuel(n) === "yellow") {
    return (n - 50001);
  } else {
    return (n);
  }
}
  */
//console.log(definetlyTheShuttleFuelLevel(55000));

//b). You must siphon off fuel without alerting the TAs. Inside your function, you want to reduce the fuel level as much as possible WITHOUT changing the color returned by the checkFuel function.

//c). Once you figure out how much fuel to pump out, return that value.

//d). Decide where to best place your function call to gather our new fuel.

/* Next, liberate some of that glorious cargo.
 */

//a). Define another anonymous function with an array as a parameter, and set it equal to another innocent variable.
let holdStats = function([]) {
    stolenGoods = (cargoHold.splice((cargoHold.indexOf("gold")),1,"metal"));
    stolenGoods.push(cargoHold.splice((cargoHold.indexOf("meal kits")),1,"meel"));
    return cargoHold;
}

console.log(holdStats(cargoHold));
console.log(stolenGoods);

//b). You need to swipe two items from the cargo hold. Choose well. Stealing water ain’t gonna get us rich. Put the swag into a new array and return it from the function.

//c). The cargo hold has better security than the fuel tanks. It counts how many things are in storage. You need to replace what you steal with something worthless. The count MUST stay the same, or you’ll get caught and thrown into the LaunchCode brig.

//d). Don’t get hasty, matey! Remember to test your function.

/* Finally, you need to print a receipt for the accountant. Don’t laugh! That genius knows MATH and saves us more gold than you can imagine.
 */
 
//a). Define a function called irs that can take fuelLevel and cargoHold as arguments.
	let irs = function(fuelLevel,cargoHold){
    return `Took ${definetlyTheShuttleFuelLevel(fuelLevel)}kg of fuel and ${stolenGoods[0]} and ${stolenGoods[1]} from the cargo hold. The remaining cargo hold is ${holdStats(cargoHold)}.`
  }


//b). Call your anonymous fuel and cargo functions from within irs.

//c). Use a template literal to return, "Raided _____ kg of fuel from the tanks, and stole ____ and ____ from the cargo hold."

console.log(irs(fuelLevel,cargoHold));

//KT - not sure why I'm getting meel twice on the output
//KT - I'm not sure how to do step 4, liberating the cargo
// and collect a new array I can use in the template literal
// or how to make it general so it just picks the best things for me