//////GAME BOARD//////

const gameBoard = (() => {
    const board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
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
        };
    })();

    const interactiveDivs = (() => {
        for (i = 0; i < 9; i++) {
            let gridSpaces = document.getElementById(`grid-div-${i}`);
            gridSpaces.addEventListener('click', () => {
                if (gridSpaces.innerHTML === 'X' || gridSpaces.innerHTML === 'O') {
                    alert('Please pick a different square.');
                } else if (playerX.theirTurn === true && playerO.theirTurn === false) {
                    gridSpaces.innerHTML = 'X';
                    playerX.theirTurn = false;
                    playerO.theirTurn = true;
                    console.log(`player 1's turn: ${playerX.theirTurn}, player 2's turn: ${playerO.theirTurn}`);
                } else if (playerO.theirTurn === true && playerX.theirTurn === false) {
                    gridSpaces.innerHTML = 'O';
                    playerO.theirTurn = false;
                    playerX.theirTurn = true;
                    console.log(`player 2's turn: ${playerO.theirTurn}, player 1's turn: ${playerX.theirTurn}`);
                };
            });
        };
    })();

    return {board};
})();

//////PLAYER FACTORY//////

const playerFactory = (name, token, theirTurn) => {
    let score = 0
    const scoreCount = () => console.log(score);
    return {name, scoreCount, token, theirTurn};
};

const playerX = playerFactory('Combos', 'X', true);
const playerO = playerFactory('kennyL', 'O', false);