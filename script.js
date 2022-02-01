let eq = '';

//function that display value
function dis(val) {
  eq += val;
  document.getElementById('result').value = eq;
}

//function that evaluates the digit and return result
function solve() {
  eq = eval(eq);
  document.getElementById('result').value = eq;
}

//function that clear the display
function clr() {
  eq = '';
  document.getElementById('result').value = eq;
}

function initilize() {
  console.log('Initializing');
  document.getElementById('btn_clear').addEventListener('click', clr);
  document.getElementById('btn_solve').addEventListener('click', solve);

  const opButtons = document.getElementsByClassName('op_button');
  for (let i = 0; i < opButtons.length; i++) {
    opButtons[i].addEventListener('click', (event) => {
      dis(event.target.value.toString());
    });
  }
}

// initilize
initilize();