
    // maneja el estado del juego y tambien los turnos
export const handleGame = (e, states) => {

        const { gameState, setGameState, play, setTurn, turn } = states;

        try {

            // get locker
            let locker
            if(e.target.className.includes('locker')) locker = e.target 
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
            play(gameState)

        } catch (error) {
            return
        }
}
export const computerPlay = (states) => {
    
        // ahora es el turno del computador
        const { gameState, setGameState, play, setTurn, turn } = states;
        const posiblePositions = []
        for(let i = 0; i < gameState.length; i++){
            for(let j = 0; j < gameState[0].length; j++){
                if(gameState[i][j] === '')
                    posiblePositions.push({row: i, col: j})
            }
        }

        const randomIndex = Math.floor(Math.random() * posiblePositions.length)
        const computerMove = posiblePositions[randomIndex]
        const currentGame = gameState
        currentGame[computerMove.row][computerMove.col] = turn

        setGameState(currentGame)
        // set other turn
        setTurn(turn === 'X' ? 'O' : 'X')                
        // set the winner if win
        play(gameState)       
}