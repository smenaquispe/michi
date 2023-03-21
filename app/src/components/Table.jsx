import styles from './Table.module.css'
import Locker from './Locker'
import { useEffect, useState } from 'react'
import xsvg from '../../assets/x.svg'
import circlesvg from '../../assets/circle.svg'
import { win } from '../services/win'


function Table () {

    // array recieve the image of the game
    const [gameState, setGameState] = useState(
        [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]
    )

    // turns
    const [turn, setTurn] = useState({
        letter: 'X',
        figure: xsvg
    })

    const handleGameState = (e) => {
        try {
            const [row, col] = e.target.id.split('_').map(str => parseInt(str))
            const currentGame = gameState
            currentGame[row][col] = turn.letter
            setGameState(currentGame)
            setTurn(turn.letter === 'X' ? 
                { letter: 'O', figure: circlesvg } 
                : { letter: 'X', figure: xsvg} )
        } catch (error) {
            return
        }
    }

    useEffect(() => {
        if(win(gameState))
            alert(win(gameState))
    }, [gameState, turn])

    return (
        <article className={styles.table} onClick={handleGameState}>
            <Locker id={'0_0'} figureTurn={turn.figure} ></Locker>
            <Locker id={'0_1'} figureTurn={turn.figure}></Locker>
            <Locker id={'0_2'} figureTurn={turn.figure}></Locker>

            <Locker id={'1_0'} figureTurn={turn.figure}></Locker>
            <Locker id={'1_1'} figureTurn={turn.figure}></Locker>
            <Locker id={'1_2'} figureTurn={turn.figure}></Locker>

            <Locker id={'2_0'} figureTurn={turn.figure}></Locker>
            <Locker id={'2_1'} figureTurn={turn.figure}></Locker>
            <Locker id={'2_2'} figureTurn={turn.figure}></Locker>
        </article>
    )
}

export default Table
