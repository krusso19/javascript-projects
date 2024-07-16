let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 3,
   move: function () {
      return Math.floor(Math.random()*11)
   },
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function () {
      return Math.floor(Math.random()*11)
   },
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 4,
   move: function () {
      return Math.floor(Math.random()*11)
   },
};

let doggo = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 6,
   move: function () {
      return Math.floor(Math.random()*11)
   },
};

let mossPiglet = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 8,
   move: function () {
      return Math.floor(Math.random()*11)
   },
};

// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

crew = [superChimpOne, salamander, superChimpTwo, doggo, mossPiglet]

// Print out the relevant information about each animal.

function crewReports(crew) {
   return console.log(`${crew.name} is a ${crew.species}. They are ${crew.age} years old and ${crew.mass} kilograms. Their ID is ${crew.astronautID}.`);

}

crewReports(doggo);

// Start an animal race!

function fitnessTest(crew) {
 let numberOfTurns = 0
 let steps = 0
   while (steps < 20) {
      steps = crew.move() + steps;
      numberOfTurns = numberOfTurns + 1;
   }
   return `${crew.name} took ${numberOfTurns} turns to take 20 steps.`
}

console.log(fitnessTest(superChimpOne));