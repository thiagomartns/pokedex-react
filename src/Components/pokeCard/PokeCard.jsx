import React from 'react'
import './pokeCard.scss'

const PokeCard = () => {
  return (
    <>
      <div className="pokemon pokemon-type">
        <div className="img-container">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="" />
        </div>
        <div className="info">
          <span className="number">#001</span>
          <h3 className="name">Bulbassaur</h3>
          <h5 className="type">Grass</h5>
        </div>
      </div>
    </>
  )
}

export default PokeCard