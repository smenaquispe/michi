import { StageContext } from '../../services/StageContext';
import { WinnerContext } from '../../services/WinnerContext';
import { useEffect, useState, useContext } from 'react';
import Table from "../Table/Table";
import Advice from '../Advice/Advice';
import ThemeButton from '../Buttons/ThemeButton';
import Score from '../Score/Score';
import Menu from '../Menu/Menu';
import styles from './PlayGround.module.css'
import ReturnButton from '../Buttons/ReturnButton';
import winnerLockerStyle from '../Locker/Locker.module.css'

function PlayGround () {
    
    const { stage, setStage } = useContext(StageContext)
    const { winner, setWinner, setPositionsLineWin } = useContext(WinnerContext)

    // array recieve the image of the game
    const [gameState, setGameState] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ])

    // gamemode
    const [gameMode, setGameMode] = useState(null)

    useEffect(() => {
        const prevGameMode = JSON.parse(localStorage.getItem('gamemode'))
        if(prevGameMode) setGameMode(prevGameMode)
    }, [])

    // reboot the game
    const resetGame = () => {
        setGameState([
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ])
        
        const lockers = document.querySelectorAll('.locker')
        lockers.forEach(l => l.classList.remove(winnerLockerStyle.winnerLocker))

        setStage('game')
    }

    useEffect(() => {
        // if winnner, necessary reset
        if(winner) {
            setTimeout(() => {
                setStage('reset')  
            }, 700);
        } 
    }, [winner])

    useEffect(() => {
        if(stage === 'menu'){
            setWinner(null)
            setGameState([
                ['', '', ''],
                ['', '', ''],
                ['', '', '']
            ])  

            setPositionsLineWin(null)
        }
        
    }, [stage])

    return (
        <>
            <main className={styles.playground}>
                <h1>Tik Tak Toe</h1>
                {
                    stage === 'menu' &&
                    <Menu setGameMode={setGameMode} />
                }

                {
                    stage === 'game' || stage === 'reset' ?
                    <Table gameState={gameState} setGameState={setGameState} gameMode={gameMode} />
                    : null
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

            {
                stage === 'game' || stage === 'reset' ?
                <ReturnButton />
                : null
            }
            
            {
                stage === 'game' || stage === 'reset' ?
                <Score winner={winner} />
                : null
            }

        </>
    )
}

export default PlayGround;