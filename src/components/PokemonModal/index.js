import { useEffect, useState, React } from "react" 
import axios from "axios"

import { Col, Row } from "react-bootstrap"
import Modal from "react-modal"

import { BoxContent } from "./styles"

export function PokemonModal({ isOpen, onRequestClose, pokemonIndex }) {
    const [pokemonSprites, setPokemonSprites] = useState([])
    const [pokemonTypes, setPokemonTypes] = useState([])
    const [pokemonAbilities, setPokemonAbilities] = useState([])
    const [pokemonSpecies, setPokemonSpecies] = useState([])

    useEffect(() => {
        const getData = async () => {
            await axios.get(`${pokemonIndex}`)
            .then(response => {
                setPokemonSprites(response.data.sprites)
                setPokemonTypes(response.data.types)
                setPokemonAbilities(response.data.abilities)
                setPokemonSpecies(response.data.species)
            })
            .catch(error => {
                console.log(error)
            })
        }

        getData()
    }, [pokemonIndex])

    return (
        <Modal
         isOpen={isOpen}
         onRequestClose={onRequestClose}
         className="react-modal-content"
         overlayClassName="react-modal-overlay"
        >   
            <BoxContent>
                <Row className="align-items-center">
                    <Col className="text-center">
                        <img src={pokemonSprites.front_default} alt={pokemonSpecies.name} />
                        <p>{pokemonSpecies.name}</p>
                    </Col>
                    <Col>
                        <h5>Tipo do pokemon:</h5>
                        <ul>
                            {pokemonTypes.map((types, index) => (
                                <React.Fragment key={index}>
                                    <li>{types.type.name}</li>
                                </React.Fragment> 
                            ))}
                        </ul>

                        <h5>Habilidades do pokemon:</h5>
                        <ul>
                            {pokemonAbilities.map((abilities, index) => (
                                <React.Fragment key={index}>
                                    <li key={index}>{abilities.ability.name}</li>
                                </React.Fragment>  
                            ))}
                        </ul>
                    </Col>
                </Row>
            </BoxContent>
        </Modal>
    )
}