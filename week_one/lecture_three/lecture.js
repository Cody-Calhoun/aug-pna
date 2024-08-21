class Warrior {
  constructor(name, health, attack, defense, shield, weapon) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.shield = shield;
    this.weapon = weapon;
    this.speed = 79;
    this.pets = [];
    this.skills = [];
  }

  workout() {
    this.attack += 10;
    this.defense += 10;
    this.shield += 10;
  }

  addPet(pet) {
    this.pets.push(pet);
  }

  allPets() {
    for(let i = 0; i < this.pets.length; i++) {
      console.log(this.pets[i].name);
    }
  }

  addSkill(skill) {
    this.skills.push(skill);
  }

}

class Pet {
  constructor(name, type, derp) {
    this.name = name;
    this.type = type;
    this.isDerpy = derp;
  }
}

let Will = new Warrior('Will', 100, 10, 5, 10, 'Sword');
let leeOfRoy = new Warrior('Lee of Roy', 100, 90, 75, 100, 'Sword of Lee');
let Charlie = new Pet('Charlie', 'Dog', true);
let Marley = new Pet('Marley', 'Dog', true);

Will.workout();
Will.addPet(Charlie);
Will.addPet(Marley);
Will.addSkill('PLAY DEAD');
Will.allPets();
console.log(Will)


