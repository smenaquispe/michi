import styles from './PlayGround.module.css'
import Table from "../Table/Table";
import Advice from '../WinAdvice/Advice';
import { useEffect, useState } from 'react';

function PlayGround () {

    // stages
    const [stage, setStage] = useState('game')
    
    // array recieve the image of the game
    const [gameState, setGameState] = useState(
        [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]
    )

    // reboot the game
    const resetGame = () => {
        setGameState(     
        [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ])

        setStage('game')
    }

    // winner 
    const [winner, setWinner] = useState(null)

    useEffect(() => {
        if(winner) setStage('reset')
    }, [winner])

    return (
        <main className={styles.playground}>
            <h1>Tik Tak Toe</h1>

            <Table setWinner={setWinner} gameState={gameState} setGameState={setGameState} />

            {
                stage === 'reset' && 
                <Advice resetGame={resetGame} >
                    {
                        winner === 'tie' 
                        ? "¡Empate!"
                        : `¡Win ${winner}!`
                    }
                </Advice>
            }
        </main>
    )
}

export default PlayGround;