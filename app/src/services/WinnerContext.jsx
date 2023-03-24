import React, {createContext, useState} from "react";
import { gameRules } from "./gameRules";

const WinnerContext = createContext()

function WinnerProvider({children}) {
    const [winner, setWinner] = useState(null)

    const play = (gameState) => {
        setWinner(gameRules(gameState))
    }

    return (
        <>
            <WinnerContext.Provider value={{winner, play, setWinner}}>
                {children}
            </WinnerContext.Provider>
        </>
    )
}

export { WinnerContext, WinnerProvider }