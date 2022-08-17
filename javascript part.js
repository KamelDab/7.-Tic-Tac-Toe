let cells = document.getElementsByClassName('kratka');
let playerTurn = document.getElementById('playerTurn');
let playAgain = document.getElementById('playAgain');
playerTurn.innerText = 'Player 1 Turn';
const crossElement = 'X';
const circleElement = 'O';
let player = '1';
let player2 = '2';
let playerScore = document.getElementsByClassName('playerScore');
let scoreP1 = 0;
let scoreP2 = 0;
let infoP1 = 'Player 1 <br> wins:'
let infoP2 = 'Player 2 <br> wins:'
playerScore[0].innerHTML = infoP1 + scoreP1;
playerScore[1].innerHTML = infoP2 + scoreP2;

for (let element of cells) {
    element.addEventListener('click', function () {
        if (element.innerText == crossElement || element.innerText == circleElement) {
            return;
        }
        if (player == '1') {
            element.innerText = crossElement;
            player = '2';
            playerTurn.innerText = 'Player 2 Turn';
        } else {
            element.innerText = circleElement;
            player = '1';
            playerTurn.innerText = 'Player 1 Turn';
        }
        youWin();
    })
};

playAgain.addEventListener('click', function () {
    newGame();
});


function newGame() {
    for (let element of cells) {
        element.innerText = '';
    }
    player = '1';
    playerTurn.innerText = 'Player 1 Turn';
    playerScore[0].innerHTML = 'Player 1 <br> wins:' + scoreP1;
    playerScore[1].innerHTML = 'Player 2 <br> wins:' + scoreP2;
};




function determineWin(index1, index2, index3) {
    if (cells[index1].innerText == cells[index2].innerText && cells[index1].innerText == cells[index3].innerText) {
        if (cells[index1].innerText == crossElement) {
            playerTurn.innerText = 'Player 1 wins!';
            scoreP1++;
            playerScore[0].innerHTML = infoP1 + scoreP1;
        } else if (cells[index1].innerText == circleElement) {
            playerTurn.innerText = 'Player 2 wins!';
            scoreP2++;
            playerScore[1].innerHTML = infoP2 + scoreP2;
        }
    }
};

function youWin() {
    determineWin(0, 1, 2);
    determineWin(3, 4, 5);
    determineWin(6, 7, 8);
    determineWin(0, 3, 6);
    determineWin(1, 4, 7);
    determineWin(2, 5, 8);
    determineWin(0, 4, 8);
    determineWin(2, 4, 6);
};
