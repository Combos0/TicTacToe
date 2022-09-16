//////GAME BOARD//////

const gameBoard = (() => {
    const board = [];
    const display = document.getElementById('game-board');

    const whosTurn = () => {
        let playerCard1 = document.getElementById('player1');
        let playerCard2 = document.getElementById('player2');
        if (playerX.theirTurn === true && playerO.theirTurn === false) {
            playerCard1.classList.toggle('active-turn');
            playerCard2.classList.toggle('active-turn');
        } else if (playerX.theirTurn === false && playerO.theirTurn === true) {
            playerCard1.classList.toggle('active-turn');
            playerCard2.classList.toggle('active-turn');
        };
    };

    const boardSpaces = (() => {
        for (i = 0; i < 9; i++) {
            let boardDiv = document.createElement('div');
            boardDiv.setAttribute('id', `grid-div-${i}`);
            display.appendChild(boardDiv);
            boardDiv.addEventListener('click', () => {
                if ((playerX.theirTurn === true && playerO.theirTurn === false) && (boardDiv.innerHTML !== 'X' && boardDiv.innerHTML !== 'O')) {
                    boardDiv.innerHTML = 'X';
                    playerX.theirTurn = false;
                    playerO.theirTurn = true;
                    whosTurn();
                } else if ((playerX.theirTurn === false && playerO.theirTurn === true) && (boardDiv.innerHTML !== 'X' && boardDiv !== 'O')) {
                    boardDiv.innerHTML = 'O';
                    playerX.theirTurn = true;
                    playerO.theirTurn = false;
                    whosTurn();
                } else {alert('Please select an open square!')};
            });
            board.push(boardDiv);
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

//////GAME LOGIC//////

const playRound = (() => {
    const gameState = gameBoard.board;

    const checksForWin = () => {
        
    };

    const whatsInTheSquare = () => {
        let logicArray = [];
        for (i = 0; i < gameState.length; i++) {
            let placedToken = gameState[i].innerHTML;
            logicArray.push(placedToken);
        };
        return {logicArray};
    };

    return {checksForWin, whatsInTheSquare,};
})();