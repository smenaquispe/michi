import React, {createContext, useState} from "react";

const StageContext = createContext()

function StageProvider({children}){
    /**
     * 
     * 1 -> menu
     * 2 -> game
     * 3 -> reset
     * 
     */
    const [stage, setStage]  = useState('menu')
    
    return (
        <>
            <StageContext.Provider value={{stage, setStage}}>
                {children}
            </StageContext.Provider>
        </>
    )
}

export {StageContext,StageProvider}