let eq = '';
let memory_storage = [];

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
  document.getElementById('btn_add').addEventListener('click', add);

  const opButtons = document.getElementsByClassName('op_button');
  for (let i = 0; i < opButtons.length; i++) {
    opButtons[i].addEventListener('click', (event) => {
      dis(event.target.value.toString());
    });
  }
}

// initilize
initilize();

//function that add the eq's value to memory
function add() {
  memory_storage.push(eval(eq));
  if (memory_storage.length > 5) {
    memory_storage.splice(0, 1);
  }
  console.log(memory_storage);
}
