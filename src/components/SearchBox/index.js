import { Col, Row } from "react-bootstrap";
import { BoxContent } from "./styles";

export function SearchBox({ pokemons, setPokemonValue, pokemonValue }) {
    return (
        <BoxContent onSubmit={pokemons}>
            <Row className="w-100 justify-content-center">
                <Col xs={5}>
                    <input
                     type="text"
                     placeholder="Pesquise seu pokemon"
                     value={pokemonValue}
                     onChange={event => setPokemonValue(event.target.value)}
                    />
                </Col>
                <Col xs={2}>
                    <button type="submit">Pesquisar</button>
                </Col>
            </Row>
        </BoxContent>
    )
}