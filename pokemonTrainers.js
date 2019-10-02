class Pokemon {
  constructor({ name, moves, hp, damage, favMove, type = "Normal" }) {
    this.name = name;
    this.moves = moves;
    this.hp = hp;
    this.damage = damage;
    this.favMove = favMove;
    this.type = type;
  }
}

class Trainer {
  constructor(name) {
    this.name = name;
    this.pokeballs = [];
    this.catch = Trainer.prototype.catch;
    this.limit = 6;
  }
  catch(pokemon) {
    if (this.pokeballs.length < this.limit) {
      this.pokeballs.push(pokemon);
    }
  }
}

const Shellder = new Pokemon({
  name: "Shellder",
  moves: ["BubbleBeam", "Surf", "Self-Destruct", "Tackle"],
  hp: 120,
  damage: 45,
  favMove: "Self-Destruct",
  type: "Water"
});
const Gyarados = new Pokemon({
  name: "Red Gyarados",
  moves: ["DragonRage", "Hydro Pump", "Double Team", "Thunder"],
  hp: 330,
  damage: 70,
  favMove: "Dragon Rage",
  type: "Water"
});
const Tangela = new Pokemon({
  name: "Tangela",
  moves: ["Vine Whip", "Absorb", "SweetScent", "Tackle"],
  hp: 125,
  damage: 50,
  favMove: "Vine Whip",
  type: "Grass"
});
const Snorlax = new Pokemon({
  name: "Snorlax",
  moves: ["Body Slam", "Hyper Beam", "Rest", "Tackle"],
  hp: 200,
  damage: 50,
  favMove: "Rest"
});
const Tauros = new Pokemon({
  name: "Tauros",
  moves: ["Take Down", "Horn Drill", "Leer", "Skull Bash"],
  hp: 180,
  damage: 45,
  favMove: "Take Down"
});

const Charmander = new Pokemon({
  name: "Magmar",
  moves: ["Scratch", "Ember", "Leer", "Tackle"],
  hp: 120,
  damage: 45,
  favMove: "Ember",
  type: "Fire"
});

const Magmar = new Pokemon({
  name: "Magmar",
  moves: ["Fire Punch", "Fire Blast", "SmokeScreen", "Smog"],
  hp: 120,
  damage: 45,
  favMove: "Ember",
  type: "Fire"
});

const Bulbasaur = new Pokemon({
  name: "Bulbasaur",
  moves: ["Scratch", "Razor Leaf", "Growl", "Tackle"],
  hp: 120,
  damage: 45,
  favMove: "Vine Whip",
  type: "Grass"
});

const Magikarp = new Pokemon({
  name: "Magikarp",
  moves: ["Flail", "Bubble", "Splash", "Tackle"],
  hp: 130,
  damage: 10,
  favMove: "Water Gun",
  type: "Water"
});

const Psyduck = new Pokemon({
  name: "Psyduck",
  moves: ["Scratch", "Water Gun", "Tail Whip", "Tackle"],
  hp: 100,
  damage: 5,
  favMove: "Water Gun",
  type: "Water"
});

const Squirtle = new Pokemon({
  name: "Squirtle",
  moves: ["Bite", "Hydro Pump", "Leer", "Water Gun"],
  hp: 120,
  damage: 45,
  favMove: "Water Gun",
  type: "Water"
});

const wildPokemon = [
  Tangela,
  Psyduck,
  Magikarp,
  Charmander,
  Snorlax,
  Tauros,
  Bulbasaur,
  Squirtle,
  Magmar,
  Shellder
];

const Opponent = new Trainer("Garry");
const OppMewtwo = new Pokemon({
  name: "Mewtwo",
  moves: ["Psychic"],
  hp: 750,
  damage: 75,
  favMove: "Psychic",
  type: "Psychic"
});
Opponent.catch(OppMewtwo);

module.exports = {
  Pokemon,
  Trainer,
  wildPokemon,
  Opponent
};
