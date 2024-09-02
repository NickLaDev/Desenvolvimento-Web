let displayElement = document.getElementById('display');
let currentOperand = '';
let previousOperand = '';
let operation = undefined;

function addNumero(number) {
    if (number === '0' && currentOperand === '0') return;
     else {
        currentOperand += number;
    }
    updateDisplay();
}

function slcOperador(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        compute();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
}


function calcula() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                result = 'Error';
            } else {
                result = prev / current;
            }
            break;
        default:
            return;
    }

    currentOperand = result;
    operation = undefined;
    previousOperand = '';
    updateDisplay();
}

function limpa() {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
}

function updateDisplay() {
    displayElement.textContent = currentOperand || '0';
}
