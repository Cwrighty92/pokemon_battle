class Pokemon {
  constructor({
    name,
    moves,
    hp = 150,
    damage = 40,
    favMove,
    type = "Normal"
  }) {
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
  Opponent
};
