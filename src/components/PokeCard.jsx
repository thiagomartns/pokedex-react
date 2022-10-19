import React, { useState } from 'react'
// import { Modal, Box } from '@mui/material'
import ModalCard from './ModalCard'

const PokeCard = ({ item, index }) => {

  const [open, setOpen] = useState(false)


  return (
    <div>
      <div
        onClick={() => setOpen(true)}
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
      <ModalCard open={open} setOpen={setOpen} />
    </div>
  )
}

export default PokeCard