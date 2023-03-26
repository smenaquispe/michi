import React, {createContext, useState} from "react";
import { gameRules } from "./gameRules";

const WinnerContext = createContext()

function WinnerProvider({children}) {
    const [winner, setWinner] = useState(null)
    const [positionsLineWin, setPositionsLineWin] = useState(null)

    const play = (gameState) => {
        const { whoWin, lineWin } = gameRules(gameState)
        setWinner(whoWin)
        setPositionsLineWin(lineWin)
    }

    return (
        <>
            <WinnerContext.Provider value={{winner, play, setWinner, positionsLineWin}}>
                {children}
            </WinnerContext.Provider>
        </>
    )
}

export { WinnerContext, WinnerProvider }