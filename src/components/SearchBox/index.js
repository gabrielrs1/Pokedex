import { useContext } from "react";
import Switch from "react-switch"
import { Col, Row } from "react-bootstrap";
import { ThemeContext } from "styled-components"

import { shade } from "polished";
import { BoxContent } from "./styles";

export function SearchBox({ pokemons, setPokemonValue, pokemonValue, toggleTheme }) {
    const { colors, title } = useContext(ThemeContext)

    return (
        <BoxContent onSubmit={pokemons}>
            <Row className="w-100 justify-content-center">
                <Col xs={6}>
                    <input
                     type="text"
                     placeholder="Pesquise seu pokemon"
                     value={pokemonValue}
                     onChange={event => setPokemonValue(event.target.value)}
                    />
                </Col>
                <Col xs="auto">
                    <button type="submit">Pesquisar</button>
                </Col>
            </Row>
            <Row className="w-100 justify-content-center">
                <Col xs={1} className="mt-4">
                    <Switch
                     onChange={toggleTheme}
                     checked={title === "dark"}
                     checkedIcon={false}
                     uncheckedIcon={false}
                     width={40}
                     height={10}
                     handleDiameter={20}
                     offColor={shade(0.5, colors.secondary)}
                     onColor={shade(-1.7, colors.primary)}
                    />
                </Col>
            </Row>
        </BoxContent>
    )
}