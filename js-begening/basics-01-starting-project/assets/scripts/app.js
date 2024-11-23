const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', substact)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', division)


function getUserInput() {
    return parseInt(userInput.value);
}

// Generate and writes calculation log
function add() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber); // from vendor file
    writeToLog('ADD', initialResult, enteredNumber, currentResult)
}

function substact() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult)

}

function multiply() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult)
}

function division() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('DIVISION', initialResult, enteredNumber, currentResult)
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription)
}

function writeToLog(operation, prevResult, number, result) {
    const logEntry = {
        operation: operation,
        prevResult: prevResult,
        number: number,
        result: result
    }
    logEntries.push(logEntry);
    console.log(logEntries)
}

