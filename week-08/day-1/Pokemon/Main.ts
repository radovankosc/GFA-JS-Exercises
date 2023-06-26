import { Pokemon } from "./Pokemon";

let pokemonOfAsh: Pokemon[] = initializePokemon(); //funkce vytvori array novych objektů

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon("Oddish", "grass", "water");

// Which pokemon should Ash use?

// Implement the following `chooseEffective` function which will choose the most effective pokemon for Ash
console.log(`I choose you!, ${chooseEffective(pokemonOfAsh, wildPokemon)}`);

function initializePokemon(): Pokemon[] {
  return [
    new Pokemon("Bulbasaur", "grass", "water"),
    new Pokemon("Pikachu", "electric", "water"),
    new Pokemon("Charizard", "fire", "grass"),
    new Pokemon("Pidgeot", "flying", "fighting"),
    new Pokemon("Kingler", "water", "fire"),
  ];
}
function chooseEffective(
  pokemonOfAsh: Pokemon[], //array of Ash pokemons
  wildPokemon: Pokemon //one pokemon from wild
): string {
  for (let i = 0; i < pokemonOfAsh.length; i++) {
    if (pokemonOfAsh[i].isEffectiveAgainst(wildPokemon)) {
      //array of pokemons will be iterated by 0-5, calls the method from class Pokemon, with parameter which is Object pokemon
      return pokemonOfAsh[i].name;
    }
  }
  return "I have no Pokemon to use.";
}
let pokemonOfvAsh: Pokemon[] = [
  new Pokemon("Bulbasaur", "grass", "water"),
  new Pokemon("Pikachu", "electric", "water"),
  new Pokemon("Charizard", "fire", "grass"),
  new Pokemon("Pidgeot", "flying", "fighting"),
  new Pokemon("Kingler", "water", "fire"),
];
