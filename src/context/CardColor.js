import { createContext, useState } from 'react'

export const CardColor = createContext()

export function CardColorProvider({ children }) {

  const [generation, setGeneration] = useState('')

  const handleChange = (event) => {
    setGeneration(event.target.value);
    console.log(generation);
  };

  return (
    <CardColor.Provider value={{ 
      generation, setGeneration , handleChange
      }}>
      {children}
    </CardColor.Provider>
  )
}