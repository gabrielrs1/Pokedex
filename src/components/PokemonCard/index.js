import { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import { BoxContent } from "./styles";
import { ThemeContext } from "styled-components";

export function PokemonCard({ pokemon, openModal, pokemonIndex }) {
    const [pokemonInfo, setPokemonInfo] = useState("")

    const { colors } = useContext(ThemeContext)

    useEffect(() => {
        axios.get(`${pokemon.url}`)
        .then(response => {
            setPokemonInfo(response.data.sprites.front_default)
        })
    }, [pokemon])

    return (
        <BoxContent>
            <Card className="align-items-center" style={{ background: `${colors.primary}` }}>
                <button type="button" onClick={() => {
                    openModal()
                    pokemonIndex(pokemon.url)
                }}>
                    <img src={pokemonInfo} alt={pokemon.name} />
                </button>
                <Card.Body>
                    <Card.Title style={{ color: `${colors.text}` }}>{pokemon.name}</Card.Title>     
                </Card.Body>
            </Card>
        </BoxContent>
    )
}