import React, {createContext, useEffect, useState} from "react";

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

    useEffect(() => {
        const lastStage = JSON.parse(localStorage.getItem('stage'))
        if(lastStage)
            setStage(lastStage)
    }, [])

    useEffect(() => {
        localStorage.setItem('stage', JSON.stringify(stage))
    }, [stage])
    
    return (
        <>
            <StageContext.Provider value={{stage, setStage}}>
                {children}
            </StageContext.Provider>
        </>
    )
}

export {StageContext,StageProvider}