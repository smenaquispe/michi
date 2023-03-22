import xsvg from '../../assets/x.svg'
import circlesvg from '../../assets/circle.svg'

const figureMap = {
    '': null,
    'X': xsvg,
    'O': circlesvg
}

function Locker ({id, figureTurn}) {
    return (
        <div className="locker" id={id} >{
            figureMap[figureTurn] && <img src={figureMap[figureTurn]} alt="figure taken" />
        }</div>
    ) 
}

export default Locker