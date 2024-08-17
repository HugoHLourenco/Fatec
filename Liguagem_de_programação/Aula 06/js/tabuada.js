function calcularTabuada() {
    var num = document.getElementById("inNumero").value
    var out = document.getElementById("outTabuada")

    if (num <= 0 || isNaN(num)) {
        alert("Número inválido!!!")
        num.focus()
        return
    }

    var res = ""

    for (let i = 1; i <= 10; i++) {
        res = res + num + " X " + i + " = " + num * i + "\n"
    }

    out.textContent = res
}

var bt = document.getElementById("bt")
bt.addEventListener("click", calcularTabuada)