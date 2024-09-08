//Lucas Randal Nº19 e Flávia Glenda Nº5
let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let pares = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        pares.push(numeros[i]);
    }
}

console.log("Array original:", numeros);
console.log("Array de números pares:", pares);