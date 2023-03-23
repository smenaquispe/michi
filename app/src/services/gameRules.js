export function gameRules (game){
    if(checkRows(game, 'X')) return 'X'
    if(checkRows(game, 'O')) return 'O'
    if(checkColumns(game, 'X')) return 'X'
    if(checkColumns(game, 'O')) return 'O'
    if(checkDiagonal(game, 'X')) return 'X'
    if(checkDiagonal(game, 'O')) return 'O'
    if(checkTie(game)) return 'draw'

    return false
}

// check in rows
function checkRows(game, letter) {
    for(const row of game){
        if(row.every(elem => elem === letter))
            return true
    }

    return false
}

// check in columns
function checkColumns(game, letter) {
    for(let i = 0; i < game.length; i++){
        const col = game.map(elem => elem[i])
        if(col.every(elem => elem === letter))
            return true
    }

    return false
}

// check in diagonal
function checkDiagonal(game, letter){
    const principalDiag = []
    const secundaryDiag = []
    for(let i = 0; i < game.length; i++){
        for(let j = 0; j < game.length; j++){
            if(i === j) principalDiag.push(game[i][j])
            if(i + j === game.length - 1) secundaryDiag.push(game[i][j])
        }
    }

    if(principalDiag.every(elem => elem === letter))
        return true
    if(secundaryDiag.every(elem => elem === letter))
        return true
    
    return false       
}

// si el juego termino en empate
function checkTie(game){
    for(let i = 0; i < game.length; i++){
        for(let j = 0; j < game.length; j++){
            if(game[i][j] === '') return false
        }
    }
    
    return true
}