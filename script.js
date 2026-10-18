const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""]

    const getBoard = () => [...board]

    const placeMarker = (index, marker) => {
        if(board[index] === "" && index < board.length && index >= 0){
            board[index] = marker
            console.log("true")
            return true
        } else {
            console.log("false")
            return false
        }
            
            
    }

    const reset = () => {
        for(let i = 0; i < board.length; i++) {
            board[i] = ""
        }
    }

    const printBoard = () => {
        console.log(board.slice(0,3))
        console.log(board.slice(3,6))
        console.log(board.slice(6,9))
    }

    return {getBoard, placeMarker, reset, printBoard}

})()


function createPlayer (name, mark){
    return {name, mark}
}

const gameController = (() => {

    const playerOne = createPlayer("playerOne", "X")
    const playerTwo = createPlayer("playerTwo", "O")

    const players = []

    const winningCombinations = [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // Diagonals
    [0, 4, 8],
    [2, 4, 6]
    ];

    players.push(playerOne, playerTwo)

    let activePlayer = players[0]

    const getActivePlayer = () => activePlayer

    const switchTurn = () => {
        if(activePlayer === players[0]) {
            activePlayer = players[1]
        } else activePlayer = players[0]
    } 

    const playRound = (index) => {
        if(gameBoard.placeMarker(index, activePlayer.mark) === false) {
            return console.log("spot taken")
        } else {
            gameBoard.printBoard()
            switchTurn()
            console.log(getActivePlayer())
        }
    }

    const checkWinner = (mark) => {

        console.log(gameBoard.getBoard()[3])

        winningCombinations.forEach((combo) => {
            combo.forEach(index => {
                //console.log(combo, index)
                
                
            })
            //console.log(combo)
        })
    } 


    return {getActivePlayer, switchTurn, playRound, checkWinner}

})()


gameController.playRound(3)
gameController.checkWinner()