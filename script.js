// To display mathematical expressions
function addToDisplay(value) {
  document.getElementById('outPut').value += value;
}

// To compute the results
function compute() {
  let input = document.getElementById('outPut').value;

  //Check for divide by zero
  if (eval(input) == Infinity || eval(input) == -Infinity) {
    alert("Cannot divide by zero");
  }
  //Compute normally
  else {
    let result = eval(input);
    document.getElementById('outPut').value = result;
  }
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