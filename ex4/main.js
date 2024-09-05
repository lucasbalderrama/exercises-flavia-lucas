//Lucas Randal N°19 e Flavia Glenda N°05

let senha = "7279";

var answerUser = prompt("Digite a senha:");

while (answerUser !== senha) {
    answerUser = prompt("Senha incorreta. Tente novamente:");
}

alert("Senha correta!");