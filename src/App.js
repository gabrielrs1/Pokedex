import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal"
import usePersistedState from "./hooks/usePersistedState"

import { Pokemons } from "./components/Pokemons";
import { SearchBox } from "./components/SearchBox";
import { PokemonModal } from "./components/PokemonModal";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import light from "./styles/themes/light"
import dark from "./styles/themes/dark"

Modal.setAppElement("#root")

function App() {
  const [pokedex, setPokedex] = useState([]) // api
  const [pokedexValues, setPokedexValues] = useState([]) // search
  const [pokemonValue, setPokemonValue] = useState('')
  const [isOpen, setIsOpen] = useState(false) // modal
  const [pokemonIndex, setPokemonIndex] = useState(0) // modal de pokemon

  const [theme, setTheme] = usePersistedState("theme", light);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light)
  }

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
    .then(response => {
      setPokedex(response.data.results)
      setPokedexValues(response.data.results)
    })
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
    <ThemeProvider theme={theme}>
      <div className="limit">
        <PokemonModal 
         isOpen={isOpen}
         onRequestClose={closeModal}
         pokemonIndex={pokemonIndex}
        />
        <SearchBox 
         pokemons={PokemonSearch}
         setPokemonValue={setPokemonValue}
         pokemonValue={pokemonValue}
         toggleTheme={toggleTheme}
        />
        <Pokemons 
         pokedexValues={pokedexValues}
         openModal={openModal}
         pokemonIndex={setPokemonIndex}
        />
        <GlobalStyles />
      </div>
    </ThemeProvider>
  );
}

export default App;
