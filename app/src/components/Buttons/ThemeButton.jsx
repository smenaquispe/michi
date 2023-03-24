import { useContext } from "react"
import { DarkModeContext } from '../../services/DarkModeContext'
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react"
import Button from "./Button"

function ThemeButton(){
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext)

    return (
        <Button onClick={toggleDarkMode} id="themeButton">
            {
                darkMode ? <IconSunFilled size={60} /> : <IconMoonFilled  size={60} />
            }
        </Button>
    )

}

export default ThemeButton