import { createContext, useEffect, useState } from "react"

// Creating the context
export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {

    const [ isNight, setIsNight ] = useState(true)

    useEffect(()=> {
        const root = document.querySelector('html')
        if(isNight) {
            root.classList.add('dark')
        }else {
            root.classList.remove('dark')
        }
    }, [isNight])

    return (
        <ThemeContext.Provider value={{ isNight, setIsNight }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider