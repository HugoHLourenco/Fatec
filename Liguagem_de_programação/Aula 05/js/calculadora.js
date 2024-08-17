function raizQuadrada() {
    var num = document.getElementById("inNum").value
    var outCalc = document.getElementById("outCalc")

    num = parseFloat(num);

    if (Number.isInteger(Math.sqrt(num))) {
        var raiz = Math.sqrt(num);
        outCalc.textContent = "A raiz de " + num + " é: " + raiz;
    } else {
        outCalc.textContent = "Não há raiz quadrada exata para este número.";
    }
}

var bt = document.getElementById("bt")
bt.addEventListener("click", raizQuadrada)