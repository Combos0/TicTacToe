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
                    playRound.checksForWin();
                } else if ((playerX.theirTurn === false && playerO.theirTurn === true) && (boardDiv.innerHTML !== 'X' && boardDiv !== 'O')) {
                    boardDiv.innerHTML = 'O';
                    playerX.theirTurn = true;
                    playerO.theirTurn = false;
                    whosTurn();
                    playRound.checksForWin();
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
    const roundCouunter = 0;

    const checksForWin = () => {
        clearsArray();
        whatsInTheSquare();
        if (playerX.theirTurn === true) {
            //Checking if playerO has won...
            clearsResults();
            getAllTokens(logicArray, 'O');
            winCondition(playerO.name);
            playRound.roundCouunter++;
        } else if (playerO.theirTurn === true) {
            //Checking if playerX has won...
            clearsResults();
            getAllTokens(logicArray, 'X');
            winCondition(playerX.name);
            playRound.roundCouunter++;
        };
    };

    const winCondition = (player) => {
        if ((indexedResults.includes(0) && indexedResults.includes(1) && indexedResults.includes(2)) === true) {
            alert(`Game over! ${player} is the winner!`);
        } else if ((indexedResults.includes(3) && indexedResults.includes(4) && indexedResults.includes(5)) === true) {
            alert(`Game over! ${player} is the winner!`);
        } else if ((indexedResults.includes(6) && indexedResults.includes(7) && indexedResults.includes(8)) === true) {
            alert(`Game over! ${player} is the winner!`);
        } else if ((indexedResults.includes(0) && indexedResults.includes(3) && indexedResults.includes(6)) === true) {
            alert(`Game over! ${player} is the winner!`);
        } else if ((indexedResults.includes(1) && indexedResults.includes(4) && indexedResults.includes(7)) === true) {
            alert(`Game over! ${player} is the winner!`);
        } else if ((indexedResults.includes(2) && indexedResults.includes(5) && indexedResults.includes(8)) === true) {
            alert(`Game over! ${player} is the winner!`);
        } else if ((indexedResults.includes(0) && indexedResults.includes(4) && indexedResults.includes(8)) === true) {
            alert(`Game over! ${player} is the winner!`);
        } else if ((indexedResults.includes(2) && indexedResults.includes(4) && indexedResults.includes(6)) === true) {
            alert(`Game over! ${player} is the winner!`);
        } else if (playRound.roundCouunter === 8) {
            alert(`Game over! Tie game!`);
        }
    };

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
        };
    };

    return {checksForWin, whatsInTheSquare, logicArray, indexedResults, roundCouunter, getAllTokens,};
})();