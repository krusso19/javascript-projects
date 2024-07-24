//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, age, mass, personality){
     this.name = name;
     this.age = age;
     this.mass = mass;
     this.personality = personality;
   }
}

let fox = new Astronaut('Fox', 7, 12, "sassy");

console.log(fox);
console.log(fox.age, fox.color);

fox.age = 9;
fox.color = 'red';
fox.potatoPreferance = "tater tot"

console.log(fox);
console.log(fox.age, fox.color, fox.potatoPreferance, fox.personality);

//Try modifying or adding properties below.