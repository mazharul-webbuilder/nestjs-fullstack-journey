const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
    console.log('game is starting')
}

const person = {
    great: function great() {
        console.log('Hello there')
    }
}

person.great()

startGameBtn.addEventListener('click', startGame)