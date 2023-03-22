import styles from './Table.module.css'
import Locker from '../Locker/Locker'
import { useState } from 'react'
import { win } from './win'

function Table ({setWinner, gameState, setGameState}) {

    // turns
    const [turn, setTurn] = useState('X')

    // maneja el estado del juego y tambien los turnos
    const handleGameState = (e) => {
        
        try {

            let locker
            if(e.target.className === 'locker') locker = e.target 
            else locker = e.target.parentElement

            const [row, col] = locker.id.split('_').map(str => parseInt(str))
            const currentGame = gameState

            if(currentGame[row][col] !== '') return

            currentGame[row][col] = turn
            setGameState(currentGame)
            setTurn(turn === 'X' ? 'O' : 'X')                
            setWinner(win(gameState))


        } catch (error) {
            return
        }
    }

    return (
        <article className={styles.table} onClick={handleGameState}>
            {
                gameState.map((row, i) => {
                    return row.map((sec, j) => {
                        return <Locker id={`${i}_${j}`} figureTurn={gameState[i][j]}>{sec}</Locker>
                    })
                })
            }
        </article>
    )
}

export default Table;