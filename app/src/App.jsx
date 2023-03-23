import PlayGround from "./components/PlayGround/PlayGround"
import { DarkModeProvider } from './services/DarkModeContext'
import { StageProvider } from './services/StageContext'
import { WinnerProvider } from "./services/WinnerContext"

function App () {
    return (
        <>
            <StageProvider>
                <WinnerProvider>
                    <DarkModeProvider>
                        <PlayGround />
                    </DarkModeProvider>
                </WinnerProvider>
            </StageProvider>
        </>
    )
}

export default App
