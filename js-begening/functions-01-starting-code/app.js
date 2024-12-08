const startGameBtn = document.getElementById('start-game-btn')

const SELECTION_ROCK = 'ROCK'
const SELECTION_PAPER = 'PAPER'
const SELECTION_SCISSORS = 'SCISSORS'
const DEFAULT_USER_CHOICE = 'ROCK'
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS'
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS'

let GameIsRunning = false

const getPlayerChoice = function () {
    const selection = prompt(`${SELECTION_ROCK}, ${SELECTION_PAPER} or ${SELECTION_SCISSORS}?`, '').toUpperCase()
    if (
        selection !== SELECTION_ROCK &&
        selection !== SELECTION_PAPER &&
        selection !== SELECTION_SCISSORS) {

    } else {
        alert(`Invalid Choice! We chose ${DEFAULT_USER_CHOICE} for you`)
        return DEFAULT_USER_CHOICE
    }
    return selection
}

const getComputerChoice = function () {
    const randomValue = Math.random() // Between 0 and 1
    if (randomValue < 0.34) {
        return SELECTION_ROCK;
    } else if (randomValue < 0.67) {
        return SELECTION_PAPER;
    } else {
        return SELECTION_SCISSORS;
    }

}

const getWinner = function (cChoice, pChoice) {
    if (cChoice === pChoice) {
        return RESULT_DRAW
    } else if (cChoice === SELECTION_ROCK && pChoice === SELECTION_PAPER
        || cChoice === SELECTION_PAPER && pChoice === SELECTION_SCISSORS
        || cChoice === SELECTION_SCISSORS && pChoice === SELECTION_ROCK
    ) {
        return RESULT_PLAYER_WINS;
    } else {
        return RESULT_COMPUTER_WINS;
    }
}

startGameBtn.addEventListener('click', function () {
    if (GameIsRunning) {
        return;
    }
    GameIsRunning = true;
    console.log('Game is starting.....')
    const playerSelection = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, playerSelection)
    console.log(winner)
});
