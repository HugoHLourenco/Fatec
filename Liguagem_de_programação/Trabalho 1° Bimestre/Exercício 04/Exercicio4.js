function verPromocao() {
    var inProduto = document.getElementById("inProduto").value
    var inPreco = document.getElementById("inPreco").value
    var outCompra = document.getElementById("outCompra")
    var outDesconto = document.getElementById("outDesconto")
    var desconto = inPreco * 0.5

    outCompra.textContent = inProduto + " - Promoção: Leve 3 por RS: " + ((inPreco * 2) + desconto).toFixed(2)
    outDesconto.textContent = "O 3° produto custa apenas R$: " + desconto.toFixed(2)
}

var bt = document.getElementById("btpromocao")
bt.addEventListener("click", verPromocao)