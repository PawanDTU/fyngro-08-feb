import { createContext, useContext, useState, useCallback } from "react"

interface DarkModeContextType {
  darkMode: boolean
  toggleDarkMode: () => void
}

const DarkModeContext = createContext<DarkModeContextType | null>(null)

export const DarkModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => !prev)
  }, [])

  return <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>
}

export const useDarkMode = () => {
  const context = useContext(DarkModeContext)
  if (context === null) {
    throw new Error("useDarkMode must be used within a DarkModeProvider")
  }
  return context
}

