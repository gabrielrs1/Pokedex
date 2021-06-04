import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import { BoxContent } from "./styles";

export function PokemonCard({ pokemon, openModal, pokemonIndex }) {
    const [pokemonInfo, setPokemonInfo] = useState([])

    useEffect(() => {
        axios.get(`${pokemon.url}`)
        .then(response => setPokemonInfo(response.data.sprites))
    }, [pokemon])

    return (
        <BoxContent>
            <Card className="align-items-center">
                <button type="button" onClick={() => (openModal(), pokemonIndex(pokemon.url))}>
                    <img src={pokemonInfo.front_default} />
                </button>
                <Card.Body>
                    <Card.Title>{pokemon.name}</Card.Title>     
                </Card.Body>
            </Card>
        </BoxContent>
    )
}