class Battle {
  constructor() {
    this.flag = 0;
    this.ourMultiplier = 1;
    this.oppMultiplier = 1;
  }
  fight(pokemon1, pokemon2, moveNum, userTrainer, Gyarados) {
    console.log("Pokemon ready");

    const staticDamage = pokemon1.damage;

    const num = Math.floor(Math.random() * 5 + 1);

    if (this.flag === 0 && num !== 4) {
      pokemon2.hp = pokemon2.hp - pokemon1.damage * this.ourMultiplier;
      console.log(
        `Your ${pokemon1.name} used ${
          pokemon1.move[moveNum]
        } doing ${pokemon1.damage * this.ourMultiplier} damage`
      );
      if (pokemon1.move[moveNum] === "Rest") {
        pokemon1.hp += 70;
        console.log(`However Snorlax is healthy again`);
      }
      if (pokemon1.move[moveNum] === "Absorb") {
        pokemon1.hp += (pokemon1.damage * this.ourMultiplier) / 2;
        console.log(
          `Tangela drained ${(pokemon1.damage * this.ourMultiplier) /
            2} health from ${pokemon2.name}`
        );
      }
      if (pokemon1.move[moveNum] === "Self-Destruct") {
        pokemon1.hp += 0;
        pokemon2.hp = pokemon2.hp * 0.1;
        console.log(
          `Shellder blew itself up and left ${pokemon2.name} on 10 percent health!`
        );
      }
      if (pokemon2.hp <= 0) return console.log("You have won 300 coins");
      pokemon1.damage = staticDamage;
      console.log(pokemon2);

      this.flag++;
    }

    if (num === 5) {
      this.ourMultiplier *= 3;
      console.log(`CRITICAL HIT!!!!`);
    }

    if (num === 4) {
      console.log(`You missed!`);
      this.flag++;
    }
    if (pokemon1.name === "Magikarp" && num === 2) {
      console.log(`Magikarp is evolving and is becoming the Red Gyarados!`);
      userTrainer.pokeballs[0] = Gyarados;
    }
    if (num === 1) {
      this.flag--;
      return console.log(`${pokemon2.name} missed`);
    } else if (this.flag === 1) {
      if (num === 3) {
        this.oppMultiplier *= 3;
        console.log(`CRITICAL HIT!!!!`);
      }
      console.log(
        `Your ${pokemon1.name} has been attacked with ${
          pokemon2.move
        }, taking ${pokemon2.damage * this.oppMultiplier} damage`
      );
      pokemon1.hp = pokemon1.hp - pokemon2.damage * this.oppMultiplier;
      this.flag--;

      if (pokemon1.hp <= 0) {
        console.log(`${pokemon1.name} fainted...`);
        userTrainer.pokeballs.shift();
        if (userTrainer.pokeballs.length === 0) {
          return console.log("You are out of pokemon, you lose!");
        }
        pokemon1 = userTrainer.pokeballs[0];
      }

      console.log(pokemon1);
    }
  }
}

module.exports = { Battle };
