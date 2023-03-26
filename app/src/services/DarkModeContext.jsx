import React, { createContext, useEffect, useState } from 'react'

const DarkModeContext = createContext()

function DarkModeProvider({children}){
    const [darkMode, setDarkMode] = useState(false)
    
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    const paint = () => {
        if(darkMode){
            document.documentElement.style.setProperty('--primary-color', 'black')
            document.documentElement.style.setProperty('--secundary-color', 'white')
            document.documentElement.style.setProperty('--shadow-color', 'black')
        }else {
            document.documentElement.style.setProperty('--primary-color', 'white')
            document.documentElement.style.setProperty('--secundary-color', 'black')
            document.documentElement.style.setProperty('--shadow-color', '#c2bebe')
        }
    }

    useEffect(() => {
        const theme = JSON.parse(localStorage.getItem('theme'))
        setDarkMode(theme)
        paint()
    }, [])

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(darkMode))
        paint()
    }, [darkMode])

    return (
        <div>
            <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
                {children}
            </DarkModeContext.Provider>
        </div>
    )
}

export { DarkModeContext, DarkModeProvider }