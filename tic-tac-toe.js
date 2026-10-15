
const moves = [];

function layoutBoard(){
    squares = document.querySelectorAll('#board > div');
    squares.forEach((square) => {
        square.setAttribute('class', 'square');
    });
}


function addMoves(){
    squares = document.querySelectorAll('#board > div');
    squares.forEach((square) => {
        square.addEventListener('click', 
            () => {

                var turn = (moves.length === 0 || moves.at(-1) === 'O') ? 'X' : 'O';
                square.setAttribute('class', `square ${turn}`);
                square.innerHTML = turn;
                moves.push(turn);
                console.log(moves);
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
                square.classList.add('hover O');
            }
        )
    });
}

window.onload = function(){
    layoutBoard();
    addMoves();
    hoverChanges();
}