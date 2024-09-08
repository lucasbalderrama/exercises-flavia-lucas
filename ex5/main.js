//Lucas Randal Nº19 e Flávia Glenda Nº05
function inverterTexto() {
    let texto = "oi";
    
    let resultado = "";
    
    for (let i = texto.length - 1; i >= 0; i--) {
        resultado += texto[i];
    }
    return resultado;
}
const textoInvertido = inverterTexto();
console.log(textoInvertido);  
