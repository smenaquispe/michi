import styles from './Table.module.css'
import Locker from '../Locker/Locker'
import { useState } from 'react'
import { gameRules } from './gameRules'

function Table ({setWinner, gameState, setGameState}) {

    // turns
    const [turn, setTurn] = useState('X')

    // maneja el estado del juego y tambien los turnos
    const handleGameState = (e) => {
        
        try {

            // get locker
            let locker
            if(e.target.className === 'locker') locker = e.target 
            else locker = e.target.parentElement

            // get the position of locker
            const [row, col] = locker.id.split('_').map(str => parseInt(str))
            const currentGame = gameState

            // try if locker is done
            if(currentGame[row][col] !== '') return

            // set the game with this 
            currentGame[row][col] = turn
            setGameState(currentGame)

            // set other turn
            setTurn(turn === 'X' ? 'O' : 'X')                

            // set the winner if win
            setWinner(gameRules(gameState))


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