import { createPortal } from 'react-dom'
import styles from './Advice.module.css'

function Advice({children, onClick}){

    return createPortal(
        <div className={styles.message} onClick={onClick}>
            <h1>
                {children}
            </h1>
        </div>
    ,
    document.getElementById('advice'))
}

export default Advice;