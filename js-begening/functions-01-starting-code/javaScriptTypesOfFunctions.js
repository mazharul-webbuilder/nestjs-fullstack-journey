const startGameBtn = document.getElementById('start-game-btn');

// Normal function (Function Declaration / Function Statement)
function startGame() {
    console.log('game is starting')
}

// Function is a variable (Function Expression)
const start = function startGame() {
    console.log('Game is starting')
}

//Below function is called anonymous function (Function Expression)
const anotherStart = function() {
    console.log('Game is starting')
};

// function stored in object
const person = {
    great: function great() {
        console.log('Hello there')
    }
}

person.great()

// Only when startGameBtn clicked the anonymous function will call
startGameBtn.addEventListener('click', function (){

})

// Rest Parameter
const sump = (a, b,  ...numbers) => {
    let result;
    for (const num of numbers){
        result += num
    }
    return result
}