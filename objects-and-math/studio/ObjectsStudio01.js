// Code your selectRandomEntry function here:

function selectRandomEntry(){
  let index = Math.floor(idNumbers.length * Math.random());
  let selectedEntry = idNumber[index];
  return selectedEntry;
  }

// Code your buildCrewArray function here:

let idNumbers = [291, 414, 503, 599, 796, 890];
let crewArray = [];

function selectCrewNumbers(num) {
  while (crewArray.length < num) {
    let index = Math.floor(idNumbers.length * Math.random());
    let selectedEntry = idNumbers[index];
    if (crewArray.includes(selectedEntry)){
    } else {
      crewArray.push(selectedEntry);
    }
  }
}
selectCrewNumbers(3);
//duplicate to try to combine the two



// return a crew array with the three selected crew objects. use the selected id numbers to select crew objects.
//use a function that takes id array and object arrays as aparameters
//if the value of the astronautID key === selectedEntry, push the object to the selected Crew Array


// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};


let selectedCrew = [];
let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

function buildCrewArray (idArray, animalsArray) {
  for (i = 0; i < idArray.length; i++) {
    for (j = 0; j < animalsArray.length; j ++) {
      if (idArray[i] === animalsArray[j].astronautID) {
        selectedCrew.push(animalsArray[j]);
      }
    }
  }
}

buildCrewArray(crewArray,animals);
console.log(`${selectedCrew[0].name}, ${selectedCrew[1].name}, and ${selectedCrew[2].name} are going to space!`);

// Code your template literal and console.log statements:
