import { useState } from "react"

function Locker ({id, figureTurn}) {
    const [figure, setFigure] = useState('')

    const displayFigure = e => {
        figure === '' && setFigure(figureTurn) 
    }

    return (
        <div className="locker" id={id} onClick={displayFigure}>{
            figure && <img src={figure} alt="figure taken" />
        }</div>
    ) 
}

export default Locker