function mostrarOla() {
    var nome = document.getElementById("nome").value
    //exibir no paragrafo com id="resposta": "Olá" e o nome informado
    document.getElementById("resposta").innerHTML = "Olá " + nome;
}
//cria uma referencia ao botão com id="mostrar"
var mostrar=document.getElementById("mostrar")
//ao clicar no botão a função mostarOla deve ser chamada
