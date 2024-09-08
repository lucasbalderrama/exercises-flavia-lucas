//Lucas Randal Nº19 e Flávia Glenda Nº05
function verificarNumero() {
    let numero = +prompt("Digite um número:");

    if (numero <= 1) {
        console.log(`O número ${numero} não é primo!`);
        return;
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            console.log(`O número ${numero} não é primo!`);
            return;
        }
    }

    console.log(`O número ${numero} é primo!`);
}

verificarNumero();
