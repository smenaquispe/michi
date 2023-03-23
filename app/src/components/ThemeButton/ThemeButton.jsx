import { useContext } from "react"
import { DarkModeContext } from '../../services/DarkModeContext'
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react"
import styles from './ThemeButton.module.css'

function ThemeButton(){
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext)

    return (
        <div onClick={toggleDarkMode} className={styles.themeButton}>
            {
                darkMode ? <IconSunFilled size={60} /> : <IconMoonFilled  size={60} />
            }
        </div>
    )

}

export default ThemeButton