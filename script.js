function addToDisplay(value) {
  document.getElementById('outPut').value += value;
}

function compute() {
  let result = eval(document.getElementById('outPut').value);
  document.getElementById('outPut').value = result;
}

function clearValues() {
  document.getElementById('outPut').value = ('');
}