import { PokemonCard } from "../PokemonCard";
import { BoxContent, PokemonTable } from "./styles";

export function Pokemons({ pokedexValues, openModal, pokemonIndex }) {
    return (
        <BoxContent>
            <h1>Pokemons:</h1>

            <PokemonTable>
                {pokedexValues.map((pokemon, index) => (
                    <PokemonCard
                        key={index}
                        pokemon={ pokemon }
                        openModal={openModal}
                        pokemonIndex={pokemonIndex}
                    />
                ))}
            </PokemonTable>
        </BoxContent>
    )
}