//Lucas Randal N°19 e Flavia Glenda N°05
let num1 = prompt("Informe o 1° número:");
let num2 = prompt("Informe o 2° número:");
let resultado;

function maiorNumero(num1, num2) {
    (num1 > num2) ?  resultado = num1  :  resultado = num2;

    return resultado
}

maiorNumero(num1, num2);

alert("O maior número é: "+ resultado);