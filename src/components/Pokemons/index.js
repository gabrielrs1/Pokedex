import { BoxContent, PokemonTable } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { PokemonCard } from "../PokemonCard";

export function Pokemons() {
    const [pokedex, setPokedex] = useState([])

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
        .then(response => setPokedex(response.data.results))
    }, [])

    return (
        <BoxContent>
            <h1>Pokemons:</h1>

            <PokemonTable>
                {pokedex.map(pokemon => (
                    <PokemonCard pokemon={pokemon} />
                ))}
            </PokemonTable>
        </BoxContent>
    )
}