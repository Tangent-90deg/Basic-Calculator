const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-sub');
const multiplyBtn = document.getElementById('btn-mul');
const divideBtn = document.getElementById('btn-div');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, calculationDescription) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = calculationDescription;
}
