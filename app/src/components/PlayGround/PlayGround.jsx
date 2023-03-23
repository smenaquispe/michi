import { useEffect, useState } from 'react';
import Table from "../Table/Table";
import Advice from '../Advice/Advice';
import ThemeButton from '../ThemeButton/ThemeButton';
import Score from '../Score/Score';
import Menu from '../Menu/Menu';
import styles from './PlayGround.module.css'


function PlayGround () {

    /**
     * menu -> begin stage
     * game -> stage show the table
     * reset -> show advice and reboot the table
     */
    // stages
    const [stage, setStage] = useState('menu')
    
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

                {
                    stage === 'menu' &&
                    <Menu setStage={setStage} />
                }

                {
                    stage === 'game' &&
                    <Table setWinner={setWinner} gameState={gameState} setGameState={setGameState} />

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