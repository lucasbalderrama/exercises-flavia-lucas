//Lucas Randal N°19 e Flavia Glenda N°05
function verificar() {
    let valor = prompt("Digite algo: ");

    if (valor == '' || valor == null) {
        alert("Vazio");
    } else {
        alert("Contém conteúdo!");
    }
}

verificar();