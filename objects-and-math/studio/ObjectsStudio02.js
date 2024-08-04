// Code your orbitCircumference function here:
function orbitCircumference (radius) {
  radius = Number (radius);
  return Math.round(2 * Math.PI * radius); 
}

// Code your missionDuration function here:
let numOrbits = 5;
let orbitRadius = 2000;
let orbitalSpeed = 28000;
let missionTime = 0;
function missionDuration (numOrbits, orbitRadius, orbitalSpeed) {
  missionTime = numOrbits*(orbitCircumference(orbitRadius)/orbitalSpeed);
  missionTime = Math.round(missionTime*100)/100
  return Number(missionTime);
}

console.log(`The mission will travel ${orbitCircumference(orbitRadius)}km around the planet, and it will take ${missionDuration(numOrbits,orbitRadius,orbitalSpeed)} hours to complete.`);

// Copy/paste your selectRandomEntry function here:

// Code your oxygenExpended function here:

// Candidate data & crew array.
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
 let crew = [candidateA,candidateC,candidateE];

function selectRandom(crew){
  let selectedObject = crew[Math.floor(((Math.random())*crew.length))];
  return selectedObject;
}
let chosenCrewMember = selectRandom(crew);
let spacewalkTime = missionDuration(3,2000, 28000);
let oxygenConsumed = Math.round((chosenCrewMember).o2Used(spacewalkTime)*1000)/1000;

function oxygenExpended(chosenCrewMember, num, circ, speed) {
  spacewalkTime = missionDuration(num,circ,speed)
  oxygenConsumed = Math.round((chosenCrewMember).o2Used(spacewalkTime)*1000)/1000;
} //this doesnt work. but you can modify your spacewalk time and then the oxygen consumed
//I think I was supposed to put spacewalkTime and oxygen consumed into one function.

console.log(`${chosenCrewMember.name} will perform the spacewalk, which will last ${spacewalkTime} hours and require ${oxygenConsumed}kg of oxygen.`)
