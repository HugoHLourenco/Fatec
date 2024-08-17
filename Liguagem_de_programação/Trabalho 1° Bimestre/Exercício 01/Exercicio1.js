function calcular() {
    var inKg = document.getElementById("inKg").value
    var inG = document.getElementById("inG").value
    var outPreco = document.getElementById("outPreco")
    var gramas = inG / 1000
    var res = inKg * gramas

    outPreco.textContent = "O valor a pagar é de R$: " + res.toFixed(2)

}

var bt = document.getElementById("btCalcular")
bt.addEventListener("click", calcular)