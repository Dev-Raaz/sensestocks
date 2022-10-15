import { createContext, useState } from "react"

// Creating the context
export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {

    const [ isNight, setIsNight ] = useState(false)

    return (
        <ThemeContext.Provider value={{ isNight, setIsNight }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider