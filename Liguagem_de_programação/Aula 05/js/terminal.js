function caixa() {
    var valor = document.getElementById("valor").value
    var outnota100 = document.getElementById("outNota100")
    var outnota50 = document.getElementById("outNota50")
    var outnota10 = document.getElementById("outNota10")

    Number(valor)

    var nota100 = 0
    var nota50 = 0
    var nota10 = 0

    while (valor >= 100) {
        valor -= 100
        nota100++
    }
    while (valor >= 50) {
        valor -= 50
        nota50++
    }
    while (valor >= 10) {
        valor -= 10
        nota10++
    }
    
    if (valor = 100){
        console.log("sadasd")
    }
    outnota100.textContent = "O número de notas de R$100 é: " + nota100 + " notas"
    outnota50.textContent = "O número de notas de R$50 é: " + nota50  + " notas"
    outnota10.textContent = "O número de notas de R$10 é: " + nota10   + " notas"
}

var bt = document.getElementById("bt")
bt.addEventListener("click", caixa)