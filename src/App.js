import { Pokemons } from "./components/Pokemons";
import { SearchBox } from "./components/SearchBox";
import { GlobalStyles } from "./components/styles/global";

function App() {
  return (
    <div className="limit">
      <SearchBox />
      <Pokemons />
      <GlobalStyles />
    </div>
  );
}

export default App;
