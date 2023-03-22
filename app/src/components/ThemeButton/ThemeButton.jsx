import { useContext } from "react"
import { DarkModeContext } from '../../services/DarkModeContext'
import moonSvg from '../../../assets/moon.svg'
import sunSvg from '../../../assets/sun.svg'
import styles from './ThemeButton.module.css'

function ThemeButton(){
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext)


    return (
        <div onClick={toggleDarkMode} className={styles.themeButton}>
            <img src={
                darkMode ? moonSvg : sunSvg
            } alt="image of theme mode" />
        </div>
    )

}

export default ThemeButton