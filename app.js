const defaultResult = 0;

let currentResult = defaultResult; //Uncaught type error allowed but optional

//Array
let logEntries = [];
 

//Gets input from input field
function getUserNumberInput(){
  return parseInt(userInput.value);
}

//Generates and writes calculation log
function createAndWritOutput(operator, resultBeforeCalc, calcNumber){
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult,calcDescription);//from vendor file
}

function writeToLog(operationIdentifier,prevResult,operationNumber,newResult)
{
const logEntry={
    operation:operationIdentifier,
    prevResult:prevResult,
    number:operationNumber,
    result:newResult
  };
  logEntries.push(logEntry);
  //console.log(logEntry.operation);
  console.log(logEntries);
}

function add() {
  const enteredNumber=getUserNumberInput();
  // currentResult = currentResult + parseFloat(userInput.value);//to convert number to string we write currentResult.toString();
  //or 
  const initialResult=currentResult;
  currentResult += enteredNumber;
  // const calcDescription = `${currentResult} + ${enteredNumber}`;
  //outputResult(currentResult,calcDescription);
  createAndWritOutput('+',initialResult,enteredNumber);
  // const logEntry={
  //   operation:'ADD',
  //   prevResult:initialResult,
  //   number:enteredNumber,
  //   result:currentResult
  // };
  // logEntries.push(logEntry);
  // //console.log(logEntry.operation);
  // console.log(logEntries);
  writeToLog('ADD',initialResult,enteredNumber,currentResult);
}

function subtract() {
  const enteredNumber=getUserNumberInput();
  const initialResult=currentResult;
  currentResult -= enteredNumber;
  createAndWritOutput('-',initialResult,enteredNumber);
  writeToLog('SUBTRACT',initialResult,enteredNumber,currentResult);
}

function multiply() {
  const enteredNumber=getUserNumberInput();
  const initialResult=currentResult;
  currentResult *= enteredNumber;
  createAndWritOutput('*',initialResult,enteredNumber);
  writeToLog('MULTIPLY',initialResult,enteredNumber,currentResult);
}

function divide() {
  const enteredNumber=getUserNumberInput();
  const initialResult=currentResult;
  if(currentResult = 0 / enteredNumber)
  {
    alert('Invalid operation');
    return;
  }
  else
  currentResult /= enteredNumber;
  createAndWritOutput('/',initialResult,enteredNumber);
  writeToLog('DIVIDE',initialResult,enteredNumber,currentResult);
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);

// const additionResult = add(10, 20);

// currentResult = additionResult;

//let calculationDescription='( ' + currentResult + ' 10)*3/2-1';

//outputResult(currentResult, calculationDescription);
