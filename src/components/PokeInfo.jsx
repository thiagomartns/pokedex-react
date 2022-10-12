import React from 'react'

const PokeInfo = ({ item }) => {
  return (
    <>
      <span className="number">#{item.data.id}</span>
      <h3 className="name">{item.data.name}</h3>
      <h5 className="type" >{item.data.types[0].type.name}</h5>
    </>
  )
}

export default PokeInfo