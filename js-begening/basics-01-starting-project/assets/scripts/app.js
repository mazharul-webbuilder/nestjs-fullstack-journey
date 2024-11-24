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
function calculateResult(calculationType) {
    const enteredNumber = getUserInput();

    if (calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE' ||
        enteredNumber === 0
    ){
        return;
    }
    const initialResult = currentResult;
    let mathOperator;
    if(calculationType === 'ADD'){
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if(calculationType === 'MULTIPLY'){
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE'){
        currentResult /= enteredNumber;
        mathOperator = '/';
    }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber); // from vendor file
    writeToLog(calculationType, initialResult, enteredNumber, currentResult)
}
function add() {
    calculateResult('ADD')
}

function substact() {
    calculateResult('SUBTRACT')
}

function multiply() {
    calculateResult('MULTIPLY')
}

function division() {
    calculateResult('DIVIDE')
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

