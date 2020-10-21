const botonNumeros = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-opera');
const botonIgual = document.getElementsByName('data-igual')[0];
const botonDelete = document.getElementsByName('data-delete')[0];
var result = document.getElementById('result');
var operActual = '' ;
var opAnterior = '' ;
var operacion = undefined;

botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
    })
});

botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);
    })
});

botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});

botonDelete.addEventListener('click', function(){
    clear();
    actualizarDisplay();
});

function agregarNumero(num){
    operActual = operActual.toString() + num.toString();
    actualizarDisplay();
}

function selectOperacion(op){
    if(operActual === '') return;
    if(opAnterior !== ''){
        calcular()
    }
    operacion = op.toString();
    opAnterior = operActual;
    operActual = '';
}

function calcular(){
    var calculo;
    const anterior = parseFloat(opAnterior);
    const actual =  parseFloat(operActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;  
         case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
         return;
    }
    operActual = calculo;
    operacion = undefined;
    opAnterior = '';
}

function clear(){
    operActual = '';
    opAnterior = '';
    operacion = undefined;
}

function actualizarDisplay(){
    result.value = operActual;
}
