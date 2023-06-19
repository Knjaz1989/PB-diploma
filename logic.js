let players = ['x', 'o'];
let activePlayer;
let boardSize = 3;
let board;


function createNeaBoard(size) {
    let newArray = new Array;
    for (let index = 0; index < size; index++) {
        let innerArray = new Array;
        for (let index = 0; index < size; index++) {
            innerArray.push('');
        };
        newArray.push(innerArray);
    };
    return newArray;
}


function startGame() {
    board = createNeaBoard(boardSize);
    activePlayer = players[0];
    renderBoard(board);
}


function click(row, column) {
    board[row][column] = activePlayer 
    renderBoard(board);
    if (checkBoard(board)) {
        showWinner(players.indexOf(activePlayer));
    };
    if (activePlayer === 'x') {
        activePlayer = players[1];
    } else {
        activePlayer = players[0]
    }
}


function arrayFilter(array) {
    if (array.filter(x => x === activePlayer).length === board.length) {
        return true;
    }
    return false;
}


function checkBoard(board) {
    let diagonalArrayLeft = [];
    let diagonalArrayRight = [];
    for (let indexRow = 0; indexRow < board.length; indexRow++) {
        if (arrayFilter(board[indexRow])) {
            return true;
        }
        let columnArray = [];
        let indexColumn = indexRow;
        for (let indexRow = 0; indexRow < board.length; indexRow++) {
            columnArray.push(board[indexRow][indexColumn]);          
        }
        if (arrayFilter(columnArray)) {
            return true;
        }
        diagonalArrayLeft.push(board[indexRow][indexRow])
        diagonalArrayRight.push(board[board.length - indexRow - 1][indexRow])
    }
    if (arrayFilter(diagonalArrayLeft) || arrayFilter(diagonalArrayRight)) {
        return true;
    }
    return false;
}