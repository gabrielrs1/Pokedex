import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal"

import { Pokemons } from "./components/Pokemons";
import { SearchBox } from "./components/SearchBox";
import { GlobalStyles } from "./components/styles/global";
import { PokemonModal } from "./components/PokemonModal";

Modal.setAppElement("#root")

function App() {
  const [pokedex, setPokedex] = useState([]) // api
  const [pokedexValues, setPokedexValues] = useState([]) // search
  const [pokemonValue, setPokemonValue] = useState('')
  const [isOpen, setIsOpen] = useState(false) // modal
  const [pokemonIndex, setPokemonIndex] = useState(0) // modal de pokemon

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
    .then(response => (setPokedex(response.data.results), setPokedexValues(response.data.results)))
  }, [])

  function PokemonSearch(event) {
    event.preventDefault();

    if(pokemonValue === '' || pokemonValue === ' ') {
      setPokedexValues(pokedex)
    } else {
      pokedex.forEach(pokemon => {
        if(pokemon.name === pokemonValue) {
          setPokedexValues([pokemon])
        }
      })
    }
  }

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div className="limit">
      <PokemonModal isOpen={isOpen} onRequestClose={closeModal} pokemonIndex={pokemonIndex} />
      <SearchBox 
      pokemons={PokemonSearch}
      setPokemonValue={setPokemonValue}
      pokemonValue={pokemonValue}
      />
      <Pokemons pokedexValues={pokedexValues} openModal={openModal} pokemonIndex={setPokemonIndex} />
      <GlobalStyles />
    </div>
  );
}

export default App;
