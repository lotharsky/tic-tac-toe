const gameBoard = (() => {
    const board = ["", "X", "X", "X", "0", "O", "O", "X", "B"]

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

    let gameOver = false

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

        if(gameOver === true) {
            return
        }

        if(gameBoard.placeMarker(index, activePlayer.mark) === false) {
            return console.log("spot taken")
        } else {

            if(checkWinner() === true) {
                console.log(`${activePlayer.name} is the winner`)
                gameOver = true
                return
            } 
            else if(checkTie() === true) {
                console.log("its a tie")
                console.log("wot")
                gameOver = true
                return

            } else {
                gameBoard.printBoard()
                switchTurn()
                console.log(getActivePlayer())
            }
        }
    }

    const checkWinner = (mark) => {

        const board = gameBoard.getBoard()

        // Manier claude tip
        return winningCombinations.some(combo => {
            return combo.every(cell => board[cell] === mark)
        })
        // // EIGEN MANIER DAT IK HEB GEVONDEN
        // for(const combo of winningCombinations){
        //     let markCount = 0
        //     for(const index  of combo) {
        //         if(board[index] === mark) {
        //             markCount += 1
        //         }
        //     }

        //     if(markCount === 3) return true
        // }
        // return false
    } 

    const checkTie = () => {
        if(gameBoard.getBoard().every(cell => {return cell != ""})) {
            //console.log("its a tie")
            return true
        } 

        return false
    }

    const restart = () => {
        gameBoard.reset()
        activePlayer = players[0]
        gameOver = false
    }

    return {getActivePlayer, playRound, checkWinner, checkTie, restart}

})()


gameController.playRound(0)
//gameController.checkWinner("O")

//console.log(gameController.checkWinner("X"))
//console.log(gameController.checkTie())