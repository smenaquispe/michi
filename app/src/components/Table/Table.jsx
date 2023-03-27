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
    const {winner, play, positionsLineWin} = useContext(WinnerContext)
    // turns
    const [turn, setTurn] = useState('X')
    // timeout to prevent multiclicks
    const [waitClick, setWaitClick] = useState(true)
    // state of positions of drawing line
    const [posLine, setPosLine] = useState(null)

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


    // map array of positions in slots to array of pos in pxs
    useEffect(() => {
        if(positionsLineWin && Object.entries(positionsLineWin).length > 0) {
            const { pos1, pos2 } = positionsLineWin

            const locker1 = document.getElementById(`${pos1[0]}_${pos1[1]}`).getBoundingClientRect()
            const locker2 = document.getElementById(`${pos2[0]}_${pos2[1]}`).getBoundingClientRect()

            console.log({
                pos1: [locker1.left, locker1.top],
                pos2: [locker2.left, locker2.top]
            })
            
            setPosLine({
                pos1: [locker1.left, locker1.top],
                pos2: [locker2.left, locker2.top]
            })

        }
    }, [positionsLineWin])

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
            </article>

            {
                posLine && 
                <Line {...posLine} />                
            }
        </>

    )
}

export default Table;