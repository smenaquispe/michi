export function gameRules (game){

    const checkRowX = checkRows(game, 'X')
    if(checkRowX.check) return {whoWin: 'X', lineWin: checkRowX.lineWin}

    const checkRowO = checkRows(game, 'O')
    if(checkRowO.check) return {whoWin: 'O', lineWin: checkRowO.lineWin}

    const checkColumnX = checkColumns(game, 'X')
    if(checkColumnX.check) return {whoWin: 'X', lineWin: checkColumnX.lineWin}

    const checkColumnO = checkColumns(game, 'O')
    if(checkColumnO.check) return {whoWin: 'O', lineWin: checkColumnO.lineWin}

    const checkDiagX = checkDiagonal(game, 'X')
    if(checkDiagX.check) return {whoWin: 'X', lineWin: checkDiagX.lineWin}

    const checkDiagO = checkDiagonal(game, 'O')
    if(checkDiagO.check) return {whoWin: 'O', lineWin: checkDiagO.lineWin}

    if(checkTie(game)) return { whoWin : 'draw', lineWin : {} }

    return { whoWin : false, lineWin : {} }
}

// check in rows
function checkRows(game, letter) {

    let index = 0;
    let check = false

    for(const row of game){
        if(row.every(elem => elem === letter)){
            check = true
            break;
        }
        index++
    }

    let lineWin = {}
    if(check){
        lineWin['pos1'] = [index, 0]
        lineWin['pos2'] = [index, 1]
        lineWin['pos3'] = [index, 2]
    }

    return { check, lineWin }
}

// check in columns
function checkColumns(game, letter) {

    let check = false
    let index = 0

    for(let i = 0; i < game.length; i++){
        const col = game.map(elem => elem[i])
        if(col.every(elem => elem === letter)){
            check = true
            break
        }
        index++
    }

    let lineWin = {}
    if(check){
        lineWin['pos1'] = [0, index]
        lineWin['pos2'] = [1, index]
        lineWin['pos3'] = [2, index]
    }

    return { check, lineWin }
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

    if(principalDiag.every(elem => elem === letter)){
        const lineWin = {pos1:[0,0], pos2:[1,1], pos3:[2,2]}
        return { check: true, lineWin }
    }
    if(secundaryDiag.every(elem => elem === letter)){        
        const lineWin = {pos1:[2,0], pos2:[1,1], pos3:[0,2]}
        return { check: true, lineWin }
    }
    
    return { check: false, lineWin: {} }
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

const game = [
    ['X', 'X', 'X'],
    ['', '', ''],
    ['O', '', 'O']
]

console.log(checkRows(game, 'X'))