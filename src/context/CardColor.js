import { createContext } from 'react'

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {

  return (
    <ThemeContext.Provider value={{ backgroundColor: "rgb(222, 253, 224)" }}>
      {children}
    </ThemeContext.Provider>
  )
}