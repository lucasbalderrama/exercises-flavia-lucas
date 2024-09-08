//Lucas Randal N°19 e Flavia Glenda N°05
let numero = "37";
let resposta;

while (resposta !== numero) {

  resposta = (prompt("Adivinhe o número (entre 1 e 100):"));

  (resposta > numero) ? alert("Seu resposta é maior que o número definido.") : {};
  (resposta < numero) ? alert("Seu resposta é menor que o número definido.")
  : alert("Parabéns! Você acertou o número.");
}