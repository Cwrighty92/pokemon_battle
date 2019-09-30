let { Trainer, Pokemon } = require("./pokemonTrainers");

describe("Pokemon Tests", () => {
  it("Should create a new pokemon with default type", () => {
    const newPokemon = new Pokemon(
      "Mew",
      ["Psychic", "Tail Whip", "Pound", "Teleport"],
      100,
      20,
      "Psychic"
    );
    expect(newPokemon).toEqual({
      name: "Mew",
      move: ["Psychic", "Tail Whip", "Pound", "Teleport"],
      hp: 100,
      damage: 20,
      favMove: "Psychic",
      type: "Normal"
    });
  });
  it("Should create a new pokemon with defined type", () => {
    const newPokemon = new Pokemon(
      "Lapras",
      ["HydroPump", "Sing", "Ice beam", "Surf"],
      200,
      40,
      "Surf",
      "Water"
    );
    expect(newPokemon).toEqual({
      name: "Lapras",
      move: ["HydroPump", "Sing", "Ice beam", "Surf"],
      hp: 200,
      damage: 40,
      favMove: "Surf",
      type: "Water"
    });
  });
});
