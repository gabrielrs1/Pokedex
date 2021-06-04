import { BoxContent, PokemonTable } from "./styles";
import { PokemonCard } from "../PokemonCard";

export function Pokemons({ pokedexValues, openModal, pokemonIndex }) {
    return (
        <BoxContent>
            <h1>Pokemons:</h1>

            <PokemonTable>
                {pokedexValues.map(pokemon => (
                    <PokemonCard pokemon={ pokemon } openModal={openModal} pokemonIndex={pokemonIndex} />
                ))}
            </PokemonTable>
        </BoxContent>
    )
}