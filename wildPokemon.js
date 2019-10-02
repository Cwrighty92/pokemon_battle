let { Pokemon } = require("./pokemonTrainers");

const Shellder = new Pokemon({
  name: "Shellder",
  moves: ["BubbleBeam", "Surf", "Self-Destruct", "Tackle"],
  favMove: "Self-Destruct",
  type: "Water"
});
const Tangela = new Pokemon({
  name: "Tangela",
  moves: ["Vine Whip", "Absorb", "SweetScent", "Tackle"],
  favMove: "Vine Whip",
  type: "Grass"
});
const Snorlax = new Pokemon({
  name: "Snorlax",
  moves: ["Body Slam", "Hyper Beam", "Rest", "Tackle"],
  favMove: "Rest"
});
const Tauros = new Pokemon({
  name: "Tauros",
  moves: ["Take Down", "Horn Drill", "Leer", "Skull Bash"],
  favMove: "Take Down"
});

const Charmander = new Pokemon({
  name: "Magmar",
  moves: ["Scratch", "Ember", "Leer", "Tackle"],
  favMove: "Ember",
  type: "Fire"
});

const Magmar = new Pokemon({
  name: "Magmar",
  moves: ["Fire Punch", "Fire Blast", "SmokeScreen", "Smog"],
  favMove: "Ember",
  type: "Fire"
});

const Bulbasaur = new Pokemon({
  name: "Bulbasaur",
  moves: ["Scratch", "Razor Leaf", "Growl", "Tackle"],
  favMove: "Vine Whip",
  type: "Grass"
});

const Magikarp = new Pokemon({
  name: "Magikarp",
  moves: ["Flail", "Bubble", "Splash", "Tackle"],
  hp: 100,
  damage: 5,
  favMove: "Water Gun",
  type: "Water"
});

const Psyduck = new Pokemon({
  name: "Psyduck",
  moves: ["Scratch", "Water Gun", "Tail Whip", "Tackle"],
  favMove: "Water Gun",
  type: "Water"
});

const Squirtle = new Pokemon({
  name: "Squirtle",
  moves: ["Bite", "Hydro Pump", "Leer", "Water Gun"],
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

module.exports = { wildPokemon };
