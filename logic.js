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


function checkBoard(board) {
    for (let indexRow = 0; indexRow < board.length; indexRow++) {
        if (board[indexRow].filter(x => x === activePlayer).length === board.length) {
            return true;
        }
        let columnArray = [];
        let indexColumn = indexRow;
        for (let indexRow = 0; indexRow < board.length; indexRow++) {
            columnArray.push(board[indexRow][indexColumn]);          
        }
        if (columnArray.filter(x => x === activePlayer).length === board.length) {
            return true;
        }
    };
    return false;
}