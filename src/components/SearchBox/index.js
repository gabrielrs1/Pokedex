import { Col, Row } from "react-bootstrap";
import { BoxContent } from "./styles";

export function SearchBox() {
    return (
        <BoxContent>
            <Row className="w-100 justify-content-center">
                <Col xs={5}>
                    <input type="text" placeholder="Pesquise seu pokemon" />
                </Col>
                <Col xs={2}>
                    <button type="button">Pesquisar</button>
                </Col>
            </Row>
        </BoxContent>
    )
}