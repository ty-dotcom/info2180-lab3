
let moves = [];

function layoutBoard(){
    squares = document.querySelectorAll('#board > div');
    squares.forEach((square) => {
        square.setAttribute('class', 'square');
    });
}


function addMoves(){
    squares = document.querySelectorAll('#board > div');
    squares.forEach((square, i) => {
        square.addEventListener('click', 
            () => {

                var turn = (moves.length === 0 || moves.at(-1)[0] === 'O') ? 'X' : 'O';
                square.setAttribute('class', `square ${turn}`);
                square.innerHTML = turn;
                moves.push([turn, i]);
                displayWinner();
            }
        )
    });
}

function hoverChanges(){
    squares = document.querySelectorAll('#board > div');
    squares.forEach((square) => {
        square.addEventListener('mouseenter', 
            () => {
                square.classList.add('hover');
            }
        )

        square.addEventListener('mouseleave', 
            () => {
                square.classList.remove('hover');
                square.classList.add('hover.O');
            }
        )
    });
}


function displayWinner(){
    stats = document.querySelector('#status');
    result = checkWinner();
    if (result.win){
        stats.setAttribute('class', 'you-won');
        stats.innerHTML = `Congratulations! ${result.winner} is the Winner!`;
    };
}

function checkWinner(){
    const board = Array(9).fill("");

    moves.forEach(([move, index]) => {
        board[index] = move;
    });

    const rows = [
        board.slice(0, 3),
        board.slice(3, 6),
        board.slice(6, 9),
    ];

    for(i = 0; i < 3; i++){
        if (rows[i].every(val => val === rows[i][0] && rows[i][0] !== "")){
            return {win: true, winner: rows[i][0]};
        }

        if (rows.every(row => row[i] === rows[0][i] && rows[0][i] !== "")){
            return {win: true, winner: rows[0][i]};
        }
    }

    if (rows.every((row, i) => row[i] === rows[0][0] && rows[0][0] !== "")){
            return {win: true, winner: rows[0][0]};
        }

    if (rows.every((row, i) => row[2 - i] === rows[0][2] && rows[0][2] !== "")){
        return {win: true, winner: rows[0][2]};
    }

    return {win: false, winner: ''};

}

function resetGame(){
    resetBtn = document.querySelector('.btn');
    resetBtn.addEventListener('click', () => {
        stats = document.querySelector('#status');
        stats.classList.remove('you-won');
        stats.innerHTML = "Move your mouse over a square and click to play an X or an O.";

        moves.length = 0;
        squares = document.querySelectorAll('#board > div');
        squares.forEach((square) => {
            square.setAttribute('class', 'square');
            square.innerHTML = '';       
        });
    })

}

window.onload = function(){
    layoutBoard();
    addMoves();
    hoverChanges();
    resetGame();
}