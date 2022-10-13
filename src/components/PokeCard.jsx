import React from 'react'

const PokeCard = ({ item, index }) => {
  return (
    <div>
      <div 
        className={`pokemon ${item.types[0].type.name}`} 
        key={index}
      >
        <div className="img-container">
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`} alt="" />
        </div>
        <div className="info">
          <span className="number">#{item.id}</span>
          <h3 className="name">{item.species.name}</h3>
          <h5 className="type" >{item.types[0].type.name}</h5>
        </div>
      </div>
    </div>
  )
}

export default PokeCard