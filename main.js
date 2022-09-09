//////GAME BOARD//////
const gameBoard = (() => {
    const board = ['X', 'O', ' ', 'O', 'X', 'X', 'O', ' ', 'X'];
    const display = document.getElementById('game-board');

    const gridCells = (() => {
        for (i = 0; i < 9; i++) {
            let newDivs = document.createElement('div');
            newDivs.setAttribute('id', `grid-div-${i}`)
            display.appendChild(newDivs);
        };
    })();

    const bridge = (() => {
        for (i = 0; i < board.length; i++) {
            let element = document.getElementById(`grid-div-${i}`);
            element.textContent = board[i];
            console.log(`bridged ${element} with ${board[i]}`);
        };
    })();

})();

const playerFactory = (name, color, score) => {
    const scoreCount = () => console.log(score);
    return {name, color, scoreCount};
};

const playerX = playerFactory('X', 'red', 0);
const playerO = playerFactory('O', 'blue', 0);