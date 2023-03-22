import styles from './PlayGround.module.css'
import Table from "../Table/Table";
import Advice from '../WinAdvice/Advice';
import { useEffect, useState, useContext } from 'react';
import { DarkModeContext } from '../../services/DarkModeContext'
import ThemeButton from '../ThemeButton/ThemeButton';

function PlayGround () {

    // probando contexto
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext)

    // stages
    const [stage, setStage] = useState('game')
    
    // array recieve the image of the game
    const [gameState, setGameState] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ])
    const [winner, setWinner] = useState(null)

    // reboot the game
    const resetGame = () => {
        setGameState([
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ])
        setStage('game')
    }

    useEffect(() => {
        // if winnner, necessary reset
        if(winner) setStage('reset')
    }, [winner])

    return (
        <>
            <main className={styles.playground}>
                <h1>Tik Tak Toe</h1>

                <Table setWinner={setWinner} gameState={gameState} setGameState={setGameState} />

                {
                    stage === 'reset' && 
                    <Advice onClick={resetGame} >
                        {
                            winner === 'draw' 
                            ? "¡Draw!"
                            : `¡Win ${winner}!`
                        }
                    </Advice>
                }

            </main>
            <ThemeButton />
        </>
    )
}

export default PlayGround;