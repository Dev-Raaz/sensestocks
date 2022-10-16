import { createContext, useEffect, useState } from "react"

// Creating the context
export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {

    const [ isNight, setIsNight ] = useState(true)

    useEffect(()=> {
        const root = document.querySelector('html')
        if(isNight) {
            root.classList.toggle('dark')
        }else {
            root.classList.toggle('dark')
        }
    }, [isNight])

    return (
        <ThemeContext.Provider value={{ isNight, setIsNight }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider