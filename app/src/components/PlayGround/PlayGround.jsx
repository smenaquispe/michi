import { StageContext } from '../../services/StageContext';
import { WinnerContext } from '../../services/WinnerContext';
import { useEffect, useState, useContext } from 'react';
import Table from "../Table/Table";
import Advice from '../Advice/Advice';
import ThemeButton from '../ThemeButton/ThemeButton';
import Score from '../Score/Score';
import Menu from '../Menu/Menu';
import styles from './PlayGround.module.css'

function PlayGround () {
    
    const { stage, setStage } = useContext(StageContext)
    const { winner } = useContext(WinnerContext)

    // array recieve the image of the game
    const [gameState, setGameState] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ])

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

                {
                    stage === 'menu' &&
                    <Menu />
                }

                {
                    stage === 'game' &&
                    <Table gameState={gameState} setGameState={setGameState} />

                }

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
            <Score winner={winner} />
        </>
    )
}

export default PlayGround;