import styles from './Button.module.css'

function Button ({onClick, id, children}) {
    return (
        <div onClick={onClick} className={styles.button} id={id}>
            {children}           
        </div>
    )
}

export default Button