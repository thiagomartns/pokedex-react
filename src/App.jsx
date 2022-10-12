import { useEffect, useState } from "react";
import axios from "axios";


function App() {
    
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
      getPokemons();
    }, []);
  
    const getPokemons = () => {
      var endpoints = [];
      for (var i = 1; i < 152; i++) {
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

            <div className="pokemon" key={index} style={{backgroundColor: "rgb(222, 253, 224)"}} >
              <div className="img-container">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`} alt="" />
              </div>
              <div className="info">
                <span className="number">#{item.data.id}</span>
                <h3 className="name">{item.data.name}</h3>
                <h5 className="type">{item.data.types[0].type.name}</h5>
              </div>
            </div>
          
          ))}

        </div>
        
      </div>
    );
  }
}

export default App;
