<<<<<<< HEAD
let displayElement = document.getElementById('display');
let operadorAtual = '';
let operadorresultado = '';
let operacao = undefined;

function addNumero(numero) {
    if (numero === '0' && operadorAtual === '0') return;
     else {
        operadorAtual += numero;
    }
    atualizaTela();
}

function slcOperador(op) {
    if (operadorAtual === '') return;
    if (operadorresultado !== '') {
        calcula();
    }
    operacao = op;
    operadorresultado = operadorAtual;
    operadorAtual = '';
}


function calcula() {
    let resultado;
    const anterior = parseFloat(operadorresultado);
    const atual = parseFloat(operadorAtual);
    if (isNaN(anterior) || isNaN(atual)) return;

    switch (operacao) {
        case '+':
            resultado = anterior + atual;
            break;
        case '-':
            resultado = anterior - atual;
            break;
        case '*':
            resultado = anterior * atual;
            break;
        case '/':
            if (atual === 0) {
                resultado = 'Erro';
            } else {
                resultado = anterior / atual;
            }
            break;
        default:
            return;
    }

    operadorAtual = resultado;
    operacao = undefined;
    operadorresultado = '';
    atualizaTela();
}

function limpaTela() {
    operadorAtual = '';
    operadorresultado = '';
    operacao = undefined;
    atualizaTela();
}

function atualizaTela() {
    displayElement.textContent = operadorAtual || '0';
    
    displayElement.classList.add('flash');
    
    setTimeout(() => {
        displayElement.classList.remove('flash');
    }, 500); 
=======
let displayElement = document.getElementById('display');
let operadorAtual = '';
let operadorresultado = '';
let operacao = undefined;

function addNumero(numero) {
    if (numero === '0' && operadorAtual === '0') return;
     else {
        operadorAtual += numero;
    }
    atualizaTela();
}

function slcOperador(op) {
    if (operadorAtual === '') return;
    if (operadorresultado !== '') {
        calcula();
    }
    operacao = op;
    operadorresultado = operadorAtual;
    operadorAtual = '';
}


function calcula() {
    let resultado;
    const anterior = parseFloat(operadorresultado);
    const atual = parseFloat(operadorAtual);
    if (isNaN(anterior) || isNaN(atual)) return;

    switch (operacao) {
        case '+':
            resultado = anterior + atual;
            break;
        case '-':
            resultado = anterior - atual;
            break;
        case '*':
            resultado = anterior * atual;
            break;
        case '/':
            if (atual === 0) {
                resultado = 'Erro';
            } else {
                resultado = anterior / atual;
            }
            break;
        default:
            return;
    }

    operadorAtual = resultado;
    operacao = undefined;
    operadorresultado = '';
    atualizaTela();
}

function limpaTela() {
    operadorAtual = '';
    operadorresultado = '';
    operacao = undefined;
    atualizaTela();
}

function atualizaTela() {
    displayElement.textContent = operadorAtual || '0';
    
    displayElement.classList.add('flash');
    
    setTimeout(() => {
        displayElement.classList.remove('flash');
    }, 500); 
>>>>>>> 5cb1bc5b49439e0d6ed94037ec6494bb99e49a02
}