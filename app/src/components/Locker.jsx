import { useState } from "react"
import xsvg from '../../assets/x.svg'

function Locker () {
    const [figure, setFigure] = useState('')

    const displayFigure = e => {
        figure === '' ? setFigure(xsvg) : setFigure('')
    }

    return (
        <div className="locker" onClick={displayFigure}>{
            figure && <img src={figure} alt="figure taken" />
        }</div>
    ) 
}

export default Locker