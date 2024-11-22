const defaultResult = 0;

let currentResult = defaultResult;

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', substact)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', division)


function getUserInput() {
    return parseInt(userInput.value);
}

function add() {
    const enteredNumber = getUserInput();

    const calcDescription = `${currentResult} + ${enteredNumber}`;
    const initialResult = currentResult;

    currentResult += enteredNumber;

    createAndWriteOutput('+', initialResult, enteredNumber);
}

function substact() {
    const enteredNumber = getUserInput();

    const calcDescription = `${currentResult} - ${enteredNumber}`;

    const initialResult = currentResult;


    currentResult -= enteredNumber;

    createAndWriteOutput('-', initialResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserInput();

    const calcDescription = `${currentResult} * ${enteredNumber}`;

    const initialResult = currentResult;


    currentResult *= enteredNumber;

    createAndWriteOutput('*', initialResult, enteredNumber);
}

function division() {
    const enteredNumber = getUserInput();

    const initialResult = currentResult;


    const calcDescription = `${currentResult} / ${enteredNumber}`;

    currentResult /= enteredNumber;

    createAndWriteOutput('/', initialResult, enteredNumber);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription)
}

