import xSvg from '../../assets/x.svg'
import circleSvg from '../../assets/circle.svg'
import xDarkModeSvg from '../../assets/xDarkMode.svg'
import circleDarkModeSvg from '../../assets/circleDarkMode.svg'
import { useContext } from 'react'
import { DarkModeContext } from '../../services/DarkModeContext'

const figureMapLightMode = {
    '': null,
    'X': xSvg,
    'O': circleSvg
}


const figureMapDarkMode = {
    '': null,
    'X': xDarkModeSvg,
    'O': circleDarkModeSvg
}

function Locker ({id, figureTurn}) {

    const { darkMode } = useContext(DarkModeContext)

    return (
        <div className="locker" id={id} >
            {
                darkMode ?
                figureMapDarkMode[figureTurn] && <img src={figureMapDarkMode[figureTurn]} alt="figure taken" />
                :
                figureMapLightMode[figureTurn] && <img src={figureMapLightMode[figureTurn]} alt="figure taken" />

            }
        </div>
    ) 
}

export default Locker