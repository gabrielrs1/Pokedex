import { BoxContent, PokemonTable } from "./styles";
import { PokemonCard } from "../PokemonCard";

export function Pokemons({ pokedexValues }) {

    return (
        <BoxContent>
            <h1>Pokemons:</h1>

            <PokemonTable>
                {pokedexValues.map(pokemon => (
                    <PokemonCard pokemon={ pokemon } />
                ))}
            </PokemonTable>
        </BoxContent>
    )
}