//////GAME BOARD//////
const gameBoard = (() => {
    const board = ['X', 'O', '', 'O', 'X', 'O', 'O', 'X', 'O'];
    const display = document.getElementById('game-board');
    //display.innerHTML = board;

    const gridCells = (() => {
        for (i = 0; i < 9; i++) {
            let newDivs = document.createElement('div');
            newDivs.setAttribute('id', `grid-div-${i}`)
            display.appendChild(newDivs);
        };
    })();

})();

const playerFactory = (name, color, score) => {
    const scoreCount = () => console.log(score);
    return {name, color, score};
};

const playerX = playerFactory('X', 'red', 0);
const playerO = playerFactory('O', 'blue', 0);