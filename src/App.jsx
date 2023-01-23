import './App.scss'
import PokeCard from './Components/pokeCard/PokeCard';

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <div className="poke-container" id="pokecontainer">
        <PokeCard />
      </div>
    </div>
  );
}

export default App;
