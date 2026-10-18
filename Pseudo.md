# Game Loop

1. draw board

2. turn: player 1

turn(player, position):
    if (position free):
        place player marker
    else: 
        "spot is taken"
        turn()
3. end turn player 1

4. turn: player 2
    turn(player, postion)

5. end turn player 2

6. --> loop

if 3X or 3O or game positions are full:
    "congrats player X"
    end game
else:
    turn()


# Functions:

Board():
    2D array []

    displayBoard() => Board

    ChangePosition() => {
        currentBoard + new value in array
    } 

    return {Board, change position func}



GameControllen ():
    if (3X, 3O or pos full):
        "game over"
        end game
    Else:
        turn()
        displayBoard

