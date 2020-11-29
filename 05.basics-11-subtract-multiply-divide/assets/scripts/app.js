const defaultResult = 0;
let currentResult = defaultResult;
let loggedEntries = [];

function getUserNumberInput() {
  return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = +enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  const logEntry = {
    operation: "Add",
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult,
  };
  loggedEntries.push(logEntry);
  console.log(logEntry);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
  const logEntry = {
    operation: "Subtract",
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult,
  };
  loggedEntries.push(logEntry);
  console.log(logEntry);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
  const logEntry = {
    operation: "multiply",
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult,
  };
  loggedEntries.push(logEntry);
  console.log(logEntry);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
  const logEntry = {
    operation: "divide",
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult,
  };
  loggedEntries.push(logEntry);
  console.log(logEntry);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
