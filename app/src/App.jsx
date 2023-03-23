import PlayGround from "./components/PlayGround/PlayGround"
import { DarkModeProvider } from './services/DarkModeContext'
import { StageProvider } from './services/StageContext'

function App () {
    return (
        <>
            <StageProvider>
                <DarkModeProvider>
                    <PlayGround />
                </DarkModeProvider>
            </StageProvider>
        </>
    )
}

export default App
