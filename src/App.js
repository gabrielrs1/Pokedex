import { useEffect, useState } from "react";
import axios from "axios";

import { Pokemons } from "./components/Pokemons";
import { SearchBox } from "./components/SearchBox";
import { GlobalStyles } from "./components/styles/global";

function App() {
  // api
  const [pokedex, setPokedex] = useState([])
  // search
  const [pokedexValues, setPokedexValues] = useState([])

  const [pokemonValue, setPokemonValue] = useState('')

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

  return (
    <div className="limit">
      <SearchBox 
       pokemons={PokemonSearch}
       setPokemonValue={setPokemonValue}
       pokemonValue={pokemonValue}
      />
      <Pokemons pokedexValues={pokedexValues} />
      <GlobalStyles />
    </div>
  );
}

export default App;
