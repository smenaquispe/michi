import { createPortal } from 'react-dom'
import styles from './WinAdvice.module.css'

function WinAdvice({children}){

    return createPortal(
        <div className={styles.messageWin}>
            <h1>
                {children}
            </h1>
        </div>
    ,
    document.getElementById('win-advice'))
}

export default WinAdvice;