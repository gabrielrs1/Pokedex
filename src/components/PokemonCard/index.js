import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";

export function PokemonCard({ pokemon }) {
    const [pokemonInfo, setPokemonInfo] = useState([])

    useEffect(() => {
        axios.get(`${pokemon.url}`)
        .then(response => setPokemonInfo(response.data.sprites))
    }, [])

    return (
        <Card className="align-items-center">
            <Card.Img variant="top" src={pokemonInfo.front_default} style={{ width: '10rem' }} />
            <Card.Body>
                <Card.Title>{pokemon.name}</Card.Title>     
            </Card.Body>
        </Card>
    )
}