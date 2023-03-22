import React, { createContext, useState } from 'react'

const DarkModeContext = createContext()

function DarkModeProvider({children}){
    const [darkMode, setDarkMode] = useState(false)
    const toggleDarkMode = () => {
        
        if(!darkMode){
            document.documentElement.style.setProperty('--primary-color', 'black')
            document.documentElement.style.setProperty('--secundary-color', 'white')
            document.documentElement.style.setProperty('--shadow-color', 'black')
        }else {
            document.documentElement.style.setProperty('--primary-color', 'white')
            document.documentElement.style.setProperty('--secundary-color', 'black')
            document.documentElement.style.setProperty('--shadow-color', '#c2bebe')
        }

        setDarkMode(!darkMode)
    }

    return (
        <div>
            <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
                {children}
            </DarkModeContext.Provider>
        </div>
    )
}

export { DarkModeContext, DarkModeProvider }