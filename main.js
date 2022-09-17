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
    const logicArray = [];
    const indexedResults = [];

    const checksForWin = () => {
        clearsArray();
        whatsInTheSquare();
        if (playerX.theirTurn === true) {
            console.log(`Checking if ${playerO.name} has won...`);
            clearsResults();
            getAllTokens(logicArray, 'O');
        } else if (playerO.theirTurn === true) {
            console.log(`Checking if ${playerX.name} has won...`);
            clearsResults();
            getAllTokens(logicArray, 'X');
        };
    };

    const winCondition = () => {
        
    }

    const whatsInTheSquare = () => {
        for (i = 0; i < gameState.length; i++) {
            let placedToken = gameState[i].innerHTML;
            logicArray.push(placedToken);
        };
    };

    const clearsArray = () => {
        for (i = 0; i < 9; i++) {
            logicArray.pop();
        };
    };

    const clearsResults = () => {
        for (i = 0; i < 9; i++) {
            indexedResults.pop();
        };
    };

    function getAllTokens(array, token) {
        for (i = 0; i < array.length; i++) {
            if (array[i] === token) {
                indexedResults.push(i);
            };
            console.log(`logicArray: ${array}, token: ${token}, indexedResults: ${indexedResults}.`);
        };
    };

    return {checksForWin, whatsInTheSquare, logicArray, indexedResults, getAllTokens,};
})();