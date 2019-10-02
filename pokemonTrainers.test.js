let { Trainer, Pokemon } = require("./pokemonTrainers");

describe("Pokemon Tests", () => {
  it("Should create a new pokemon with default type", () => {
    const newPokemon = new Pokemon({
      name: "Mew",
      moves: ["Psychic", "Tail Whip", "Pound", "Teleport"],
      favMove: "Psychic"
    });
    expect(newPokemon).toEqual({
      name: "Mew",
      moves: ["Psychic", "Tail Whip", "Pound", "Teleport"],
      hp: 150,
      damage: 40,
      favMove: "Psychic",
      type: "Normal"
    });
  });
  it("Should create a new pokemon with defined type", () => {
    const newPokemon = new Pokemon({
      name: "Lapras",
      moves: ["HydroPump", "Sing", "Ice beam", "Surf"],
      hp: 200,
      damage: 40,
      favMove: "Surf",
      type: "Water"
    });
    expect(newPokemon).toEqual({
      name: "Lapras",
      moves: ["HydroPump", "Sing", "Ice beam", "Surf"],
      hp: 200,
      damage: 40,
      favMove: "Surf",
      type: "Water"
    });
  });
});
