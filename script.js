// To display mathematical expressions
function addToDisplay(value) {
  document.getElementById('outPut').value += value;
}

// To compute the result
function compute() {
  let result = eval(document.getElementById('outPut').value);
  document.getElementById('outPut').value = result;
}

// To delete the last character
function deleteLast() {
  let outPut = document.getElementById('outPut')
  outPut.value = outPut.value.slice(0, -1)
}

// To clear the display
function clearValues() {
  document.getElementById('outPut').value = ('');
}