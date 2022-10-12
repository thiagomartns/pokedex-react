import { createContext } from 'react'

export const CardColor = createContext()

export function CardColorProvider({ children }) {

  return (
    <CardColor.Provider value={{ 
      backgroundColor: "rgb(222, 253, 224)" 
      }}>
      {children}
    </CardColor.Provider>
  )
}