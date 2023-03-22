import { useEffect, useState } from 'react';
import Table from "../Table/Table";
import Advice from '../WinAdvice/Advice';
import ThemeButton from '../ThemeButton/ThemeButton';
import Score from '../Score/Score';
import styles from './PlayGround.module.css'


function PlayGround () {

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
            <Score />
        </>
    )
}

export default PlayGround;