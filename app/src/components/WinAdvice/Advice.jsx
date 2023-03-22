import { createPortal } from 'react-dom'
import styles from './Advice.module.css'

function Advice({children, resetGame}){

    return createPortal(
        <div className={styles.message} onClick={resetGame}>
            <h1>
                {children}
            </h1>
        </div>
    ,
    document.getElementById('advice'))
}

export default Advice;