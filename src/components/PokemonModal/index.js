import Modal from "react-modal"
import { BoxContent } from "./styles"

export function PokemonModal({ isOpen, onRequestClose }) {
    return (
        <Modal
         isOpen={isOpen}
         onRequestClose={onRequestClose}
         className="react-modal-content"
         overlayClassName="react-modal-overlay"
        >   
            <BoxContent>
                <h1>dwadawd</h1>
            </BoxContent>
        </Modal>
    )
}