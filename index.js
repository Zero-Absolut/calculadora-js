const display = document.getElementById('display');

const calcular = document.getElementById('calcular');

const valorDisplay = document.getElementsByTagName('button');

let valor = '';

function capturaValor(vale){
    valor += vale;
    
}

for(let i = 0; i < valorDisplay.length; i ++){
    valorDisplay[i].addEventListener('click', function(){
        display.value = valor;
    })
}

function separarExpressao(expressao){
    const regexOperador = /([+\-x\/])/;

    const partes = expressao.split(regexOperador);

    if(partes.length === 3){
        let num1 = parseFloat(partes[0]);
        let operador = partes[1];
        let num2 = parseFloat(partes[2]);

        if(operador === '+'){
            return num1 + num2;
        }else if(operador === '-'){
            return num1 - num2;
        }else if(operador === 'x'){
            return num1 * num2;
        }else if(operador === '/'){
            return num1 / num2;
        }else {
            display.value = 'erro';
        }
        
    }
}

function limpaCampo(){
    valor = '';
}

calcular.addEventListener('click', function(){
    let valorFinal = separarExpressao(valor);
    display.value = valorFinal;
    valor = valorFinal;
})