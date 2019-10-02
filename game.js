let inquirer = require("inquirer");
let { Trainer, Opponent } = require("./pokemonTrainers");
let { wildPokemon } = require("./wildPokemon");
let { Battle } = require("./battle");

function personalTrainer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name, young pokemon trainer",
        name: "FirstName"
      }
    ])
    .then(function(answers) {
      const userTrainer = new Trainer(answers.firstName);
      choosePokemon(userTrainer);
    });
}

function choosePokemon(userTrainer) {
  const pokemonChoices = wildPokemon.map(pokemon => pokemon.name);
  inquirer
    .prompt([
      {
        type: "list",
        message: "Catch some pokemon",
        choices: [...pokemonChoices, "I have enough Pokemon"],
        name: "pokemonChoice"
      }
    ])
    .then(function(answers) {
      if (answers.pokemonChoice !== "I have enough Pokemon") {
        userTrainer.catch(
          wildPokemon.find(pokemon => pokemon.name === answers.pokemonChoice)
        );

        console.log("You have Chosen " + answers.pokemonChoice);
        wildPokemon.splice(
          wildPokemon.findIndex(
            pokemon => pokemon.name === answers.pokemonChoice
          ),
          1
        );

        if (userTrainer.pokeballs.length === 6) {
          console.log("You can't carry any more Pokemon!");
          return continueBattle(userTrainer);
        }
        choosePokemon(userTrainer);
      } else continueBattle(userTrainer);
    });
}

function continueBattle(userTrainer) {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Prepare to battle!",
        choices: ["Battle", "Theres no running here"],
        name: "Get Ready"
      },
      {
        type: "list",
        message: "Select a move",
        choices: userTrainer.pokeballs[0].moves,
        name: "chosenMove"
      }
    ])
    .then(function(answers) {
      const pickedNum = userTrainer.pokeballs[0].moves.indexOf(
        answers.chosenMove
      );

      const newRound = new Battle(
        userTrainer.pokeballs[0],
        Opponent.pokeballs[0]
      );
      newRound.fight(
        userTrainer.pokeballs[0],
        Opponent.pokeballs[0],
        pickedNum,
        userTrainer
      );
      if (userTrainer.pokeballs.length === 0) {
        return console.log("Thanks for playing, better luck next time");
      }
      if (userTrainer.pokeballs[0].hp > 0 && Opponent.pokeballs[0].hp > 0) {
        continueBattle(userTrainer);
      }
    });
}

personalTrainer();
