
const moves = [];

function layoutBoard(){
    squares = document.querySelectorAll('#board > div');
    squares.forEach((square) => {
        square.setAttribute('class', 'square');
        square.addEventListener('click', 
            function() {

                var turn = (moves.length === 0 || moves.at(-1) === 'O') ? 'X' : 'O';
                square.setAttribute('class', `square ${turn}`);
                square.innerHTML = turn;
                moves.push(turn);
                console.log(moves)
            }
        )
    });
}

window.onload = function(){
    layoutBoard();
}