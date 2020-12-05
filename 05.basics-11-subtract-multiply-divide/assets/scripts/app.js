const defaultResult = 0;
let currentResult = defaultResult;
let loggedEntries = [];

function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generate and write calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  loggedEntries.push(logEntry);
  console.log(logEntry);
}

function calculateResult(calculationType) {
  if (
    calculationType != 'Add' &&
    calculationType != 'Subtract' &&
    calculationType != 'Multiply' &&
    calculationType != 'Divide'
  ) {
    return;
  }

if (
  calculationType === 'Add' || 
  calculationType === || "Subtract")

  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;

  if (calculationType === 'Add') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calculationType === 'Subtract') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calculationType === 'Multiply') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult('Add');
}

function subtract() {
  calculateResult('Subtract');
}

function multiply() {
  calculateResult('Multiply');
}

function divide() {
  calculateResult('Divide');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
