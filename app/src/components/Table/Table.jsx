import styles from './Table.module.css'
import Locker from '../Locker/Locker'
import { useState, useContext, useEffect } from 'react'
import { WinnerContext } from '../../services/WinnerContext'
import { handleGame, computerPlay } from './HandleGame'
import { StageContext } from '../../services/StageContext'
import Line from '../Line/Line'

function Table ({gameState, setGameState, gameMode}) {

    //stage 
    const {stage} = useContext(StageContext)
    // use winner context
    const {winner, play} = useContext(WinnerContext)
    // turns
    const [turn, setTurn] = useState('X')
    // timeout to prevent multiclicks
    const [waitClick, setWaitClick] = useState(true)

    // handle game as player
    const handleGameState = e => {
        if(waitClick){
            handleGame(e, {
                gameState,
                setGameState, 
                play,
                setTurn,
                turn
            })
        }
    }

    // computer
    useEffect(() => {
        if(!turn) return

        if(gameMode === 'singleplayer' && turn === 'O' && !winner){
            setWaitClick(false)
            setTimeout(() => {
                computerPlay({
                    gameState,
                    setGameState, 
                    play,
                    setTurn,
                    turn
                })
                setWaitClick(true)
            }, 500)
        }
    }, [turn])

    // reset and set turn x
    useEffect(() => {
        if(stage === 'reset')
            setTurn('X')
    }, [stage])

    return (
        <>
            <article className={styles.table} onClick={handleGameState}>            
                {
                    gameState.map((row, i) => {
                        return row.map((sec, j) => {
                            return <Locker id={`${i}_${j}`} figureTurn={gameState[i][j]}>{sec}</Locker>
                        })
                    })
                }
                <Line pos1={[0,0]} pos2={[450,450]} />
            </article>
        </>

    )
}

export default Table;