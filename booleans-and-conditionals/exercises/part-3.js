let engineIndicatorLight = 'red blinking';
let fuelLevel = 21000;
let engineTemperature = 1200;

/* 5) Implement the following checks using if/else if/else statements:

a) If fuelLevel is above 20000 AND engineTemperature is at or below 2500, print "Full tank. Engines good."

b) If fuelLevel is above 10000 AND engineTemperature is at or below 2500, print "Fuel level above 50%.  Engines good."

c) If fuelLevel is above 5000 AND engineTemperature is at or below 2500, print "Fuel level above 25%. Engines good."

d) If fuelLevel is at or below 5000 OR engineTemperature is above 2500, print "Check fuel level. Engines running hot."

e) If fuelLevel is below 1000 OR engineTemperature is above 3500 OR engineIndicatorLight is red blinking print "ENGINE FAILURE IMMINENT!" 

f) Otherwise, print "Fuel and engine status pending..." */

/*KT - D confuses me because even if the fuel level is full, this line still wants me to print "check fuel level" if the engine temp is hot.
It seems like it would make more sense for the variables to be independent of each other as far as printing error messages.

After adding f) I am realizing you probably wanted me to keep the 5 conditionals you gave and just put them in a different order.
I would have done if E, else if D ABC, else F. I thought you wanted all messages to print IF they were true (even though that doesn't make logical real world sense)
(e.g. the fuelLevel and engineTemperature are good to go and the engineIndicatorLight is red blicking so both "Full tank. Engines good." and "ENGINE FAILURE IMMINENT!" would print.)

Had I read "Try it" I would have deduced this but I stopped after reading "ALL of the checks". */
// Code 5a - 5f here:

if (engineTemperature <= 2500) {
    if (fuelLevel > 20000) {
        console.log("Full tank. Engines good.")
    } else if (fuelLevel > 10000) {
        console.log("Fuel level above 50%. Enginges good.")
    } else if (fuelLevel > 5000) {
        console.log("Fuel level above 25%. Engines good.")
    }

} else if (engineTemperature < 2500 && engineTemperature < 3500){
    console.log("Check fuel level. Engines running hot.")
} else {
    console.log("ENGINE FAILURE IMMINENT!")
}
if (fuelLevel < 5000 && fuelLevel > 1000){
    console.log("Check fuel level. Enginges running hot.")
} else if (fuelLevel<1000) {
    console.log("ENGINE FAILURE IMMINENT!")
} 
if (engineIndicatorLight === "red blinking") {
    console.log("ENGINE FAILURE IMMINENT!")
}
if (!engineIndicatorLight || !fuelLevel || !engineTemperature) {
    console.log("Fuel and engine status pending...")
}
// 6) a) Create the variable commandOverride, and set it to be true or false. If commandOverride is false, then the shuttle should only launch if the fuel and engine check are OK. If commandOverride is true, then the shuttle will launch regardless of the fuel and engine status.

let commandOverride = false
/* 6) b) Code the following if/else check:
If fuelLevel is above 20000 AND engineIndicatorLight is NOT red blinking OR commandOverride is true print "Cleared to launch!" Else print "Launch scrubbed!" */

if (fuelLevel > 20000 && engineIndicatorLight !== "red blinking" || commandOverride === true) {
    console.log("Cleared to launch!")
} else {
    console.log("Launch scrubbed!")
}