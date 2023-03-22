import PlayGround from "./components/PlayGround/PlayGround"
import { DarkModeProvider } from './services/DarkModeContext'

function App () {
    return (
        <DarkModeProvider>
            <PlayGround />
        </DarkModeProvider>
    )
}

export default App
