
function layoutBoard(){
    squares = document.querySelectorAll('#board > div');
    squares.forEach((square) => {
        square.setAttribute('class', 'square');
    });
}

window.onload = function(){
    layoutBoard();
}