//Lucas Randal N°19 e Flavia Glenda N°05

let number = 101;
var searching = true

while (searching) {
    if (number % 5 === 0 && number % 7 === 0) {
        searching = false
    }

    else {
        number++
    }
}

alert(`O primeiro número múltiplo de 5 e 7, maior que 100 é: ${number}`);