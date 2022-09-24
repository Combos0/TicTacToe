//////GAME BOARD//////

const gameBoard = (() => {
    const board = [];
    const display = document.getElementById('game-board');

    const whosTurn = () => {
        let playerCard1 = document.getElementById('player1');
        let playerCard2 = document.getElementById('player2');
        if (playerX.theirTurn === true && playerO.theirTurn === false) {
            playerCard1.classList.add('active-turn');
            playerCard2.classList.remove('active-turn');
        } else if (playerX.theirTurn === false && playerO.theirTurn === true) {
            playerCard1.classList.remove('active-turn');
            playerCard2.classList.add('active-turn');
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

    const clearsBoard = () => {
        for (i = 0; i < 9; i++) {
            let boardSquare = document.getElementById(`grid-div-${i}`);
            boardSquare.innerHTML = null;
        };
    }

    return {board, clearsBoard, whosTurn};
})();

//////PLAYER FACTORY//////

const playerFactory = (name, token, theirTurn) => {
    const score = 0
    return {name, token, theirTurn, score};
};

const playerX = playerFactory('Combos', 'X', true);
const playerO = playerFactory('kennyL', 'O', false);

//////GAME LOGIC//////

const playRound = (() => {
    const gameState = gameBoard.board;
    const logicArray = [];
    const indexedResults = [];
    const roundCouunter = 0;
    const player1Score = document.getElementById('player-1-score');
    const player2Score = document.getElementById('player-2-score');
    const player1NameSpace = document.getElementById('player-1-name');
    const player2NameSpace = document.getElementById('player-2-name');

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
            alert(`Game over! ${player} is the winner! A new round will begin after closing this box.`);
            scoreCounter(player);
            updateScore();
            controls.boardReset();
        } else if ((indexedResults.includes(3) && indexedResults.includes(4) && indexedResults.includes(5)) === true) {
            alert(`Game over! ${player} is the winner! A new round will begin after closing this box.`);
            scoreCounter(player);
            updateScore();
            controls.boardReset();
        } else if ((indexedResults.includes(6) && indexedResults.includes(7) && indexedResults.includes(8)) === true) {
            alert(`Game over! ${player} is the winner! A new round will begin after closing this box.`);
            scoreCounter(player);
            updateScore();
            controls.boardReset();
        } else if ((indexedResults.includes(0) && indexedResults.includes(3) && indexedResults.includes(6)) === true) {
            alert(`Game over! ${player} is the winner! A new round will begin after closing this box.`);
            scoreCounter(player);
            updateScore();
            controls.boardReset();
        } else if ((indexedResults.includes(1) && indexedResults.includes(4) && indexedResults.includes(7)) === true) {
            alert(`Game over! ${player} is the winner! A new round will begin after closing this box.`);
            scoreCounter(player);
            updateScore();
            controls.boardReset();
        } else if ((indexedResults.includes(2) && indexedResults.includes(5) && indexedResults.includes(8)) === true) {
            alert(`Game over! ${player} is the winner! A new round will begin after closing this box.`);
            scoreCounter(player);
            updateScore();
            controls.boardReset();
        } else if ((indexedResults.includes(0) && indexedResults.includes(4) && indexedResults.includes(8)) === true) {
            alert(`Game over! ${player} is the winner! A new round will begin after closing this box.`);
            scoreCounter(player);
            updateScore();
            controls.boardReset();
        } else if ((indexedResults.includes(2) && indexedResults.includes(4) && indexedResults.includes(6)) === true) {
            alert(`Game over! ${player} is the winner! A new round will begin after closing this box.`);
            scoreCounter(player);
            updateScore();
            controls.boardReset();
        } else if (playRound.roundCouunter === 8) {
            alert(`Game over! Tie game! A new round will begin after closing this box.`);
            controls.boardReset();
        }
    };

    const scoreCounter = (player) => {
        if (player === playerX.name) {
            playerX.score++;
        } else if (player === playerO.name) {
            playerO.score++;
        };
    };

    const updateScore = () => {
        player1Score.innerHTML = playerX.score;
        player2Score.innerHTML = playerO.score;
    };

    const updatesNames = () => {
        player1NameSpace.innerHTML = playerX.name;
        player2NameSpace.innerHTML = playerO.name;
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
    const clearsBoth = () => {
        clearsArray();
        clearsResults();
    };

    function getAllTokens(array, token) {
        for (i = 0; i < array.length; i++) {
            if (array[i] === token) {
                indexedResults.push(i);
            };
        };
    };

    return {checksForWin, clearsBoth, updateScore, updatesNames};
})();

//////ROUND CONTROL//////

const controls = (() => {
    const newGameButton = document.getElementById('new-game-btn');
    const restartRoundButton = document.getElementById('restart-round-btn'); 
    
    const getFirstPlayer = () => {
        let newName = prompt('Please enter a name for player 1:', 'Combos');
        if (newName !== null) {
            playerX.name = newName;
        };
    };

    const getSecondPlayer = () => {
        let newName = prompt('Please enter a name for player 2:', 'kennyL');
        if (newName !== null) {
            playerO.name = newName;
        }
    };

    const newGame = (() => {
        newGameButton.addEventListener('click', () => {
            boardReset();
            playerO.theirTurn = false;
            playerX.theirTurn = true;
            gameBoard.whosTurn();
            getFirstPlayer();
            getSecondPlayer();
            playerO.score = 0;
            playerX.score = 0;
            playRound.updateScore();
            playRound.updatesNames();
        });
    })();

    const boardReset = () => {
        gameBoard.clearsBoard();
        playRound.clearsBoth();
    };

    const restartRound = (() => {
        restartRoundButton.addEventListener('click', () => {
            boardReset();
            playerO.theirTurn = false;
            playerX.theirTurn = true;
            gameBoard.whosTurn();
        });
    })();

    const firstStart = (() => {
        getFirstPlayer();
        getSecondPlayer();
        playRound.updatesNames();
    })();

    return {newGame, newGameButton, restartRoundButton, restartRound, boardReset, getFirstPlayer, getSecondPlayer};
})();