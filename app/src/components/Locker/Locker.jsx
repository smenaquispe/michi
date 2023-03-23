import { IconX } from '@tabler/icons-react'
import { IconCircle } from '@tabler/icons-react'

const figureMap = {
    '': null,
    'X': <IconX size={80} />,
    'O': <IconCircle size={80} />
}


function Locker ({id, figureTurn}) {

    return (
        <div className="locker" id={id} >
            {
                figureMap[figureTurn] && figureMap[figureTurn]
            }
        </div>
    ) 
}

export default Locker