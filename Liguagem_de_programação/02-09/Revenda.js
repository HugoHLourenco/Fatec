function mostraPreco() {
    var inTitulo = document.getElementById("inTitulo")
    var inPreco = document.getElementById("inPreco")
    var outTitulo = document.getElementById("outTitulo")
    var outPreco = document.getElementById("outPreco")

    var titulo = inTitulo.value
    var preco = parseFloat(inPreco.value)
    var parcela = preco / 12

    outTitulo.textContent = "Nome do fusca: " + titulo;
    outPreco.textContent = "Valor de entrada do fusca: R$ " + preco * 0.5.toFixed(2)
    outParcela.textContent = "Seu fusca em 12x R$" + parcela.toFixed(2)
}

var btPreco = document.getElementById("btPreco")
btPreco.addEventListener("click", mostraPreco)