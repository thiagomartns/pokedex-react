import './App.scss'
import PokeCard from './Components/pokeCard/PokeCard';
import { useFetch } from './hooks/useFetch'

function App() {

  const { pokemons, setPokemons } = useFetch()

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <p>First Generation</p>
      <div className="poke-container" id="pokecontainer">
        {pokemons.map((item, index) => (
          <PokeCard item={item.data} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
