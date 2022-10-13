import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CardColor } from "./context/CardColor";
import PokeInfo from "./components/PokeInfo";


function App() {
    
    const [pokemons, setPokemons] = useState([]);

    const { backgroundColor } = useContext(CardColor)

    useEffect(() => {
      getPokemons();
    }, []);
  
    const getPokemons = () => {
      let endpoints = [];
      for (let i = 1; i < 152; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      }
      axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
    };

  if(pokemons) {
  
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <div className="poke-container" id="poke-container">

          {pokemons.map((item, index) => (

            <div className={`pokemon ${item.data.types[0].type.name}`} 
              key={index}  >
              <div className="img-container">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`} alt="" />
              </div>
              <div className="info">
                <PokeInfo item={item} />
              </div>
            </div>
          
          ))}

        </div>
        
      </div>
    );
  }
}

export default App;
