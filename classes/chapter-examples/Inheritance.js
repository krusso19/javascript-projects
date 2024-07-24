class Felidae {
	constructor() {
		this.claws = "retractable";
		this.color = "red";
	}
}

class Panthera extends Felidae {
	constructor() {
    super();
		this.roar = "loud";
	}
}

//Felidae.potatoPreference = "mashed";
//console.log(Felidae);
//KT this just prints [class Felidae] {potatoPreference = "mashed"} ... why?

class Tiger extends Panthera {
	constructor() {
    super();
		this.hasStripes = "true";
	}
}

let tigger = new Tiger();

tigger.potatoPreference = "mashed";

console.log(tigger);