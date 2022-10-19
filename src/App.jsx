import { useEffect, useState, useContext } from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard";
import SelectComponent from './components/SelectComponent'
import { CardColor } from "./context/CardColor";


function App() {
    
    const [pokemons, setPokemons] = useState([]);

    const { generation } = useContext(CardColor)

    useEffect(() => {
      getPokemons();
    }, [generation]);
  
    const getPokemons = () => {
      
      if (generation === '1') {

        let endpoints = [];
        for (let i = 1; i < 152; i++) {
          endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));

      } else if (generation === '2') {

        let endpoints = [];
        for (let i = 152; i < 252; i++) {
          endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));

      } else if (generation === '3') {

        let endpoints = [];
        for (let i = 252; i < 387; i++) {
          endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
        
      } else if (generation === '4') {

        let endpoints = [];
        for (let i = 387; i < 494; i++) {
          endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
        
      } else if (generation === '5') {

        let endpoints = [];
        for (let i = 494; i < 650; i++) {
          endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
        
      } else if (generation === '6') {

        let endpoints = [];
        for (let i = 650; i < 722; i++) {
          endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
        
      } else if (generation === '7') {

        let endpoints = [];
        for (let i = 722; i < 810; i++) {
          endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
        
      } else if (generation === '8') {

        let endpoints = [];
        for (let i = 810; i < 906; i++) {
          endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
        
      } 
    };

  if(pokemons) {
  
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <div className="generation-select">
          <SelectComponent />
        </div>
        <div className="poke-container" id="poke-container">
          {pokemons.map((item, index) => (
            <PokeCard
              item={item.data} 
              index={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
